from fastapi import APIRouter, Request, HTTPException
from slowapi import Limiter
from slowapi.util import get_remote_address
from app.models import ContactRequest, ContactDocument
from app.database import get_database
from app.email_service import send_notification

router  = APIRouter()
limiter = Limiter(key_func=get_remote_address)

SPAM_KEYWORDS = ["casino", "buy now", "click here", "make money fast", "free offer"]


def is_spam(text: str) -> bool:
    text_lower = text.lower()
    return any(kw in text_lower for kw in SPAM_KEYWORDS)


@router.post("/contact", status_code=201)
@limiter.limit("5/hour")
async def submit_contact(request: Request, body: ContactRequest):
    # Spam check
    if is_spam(body.message) or is_spam(body.subject):
        raise HTTPException(status_code=400, detail="Message flagged as spam.")

    db  = get_database()
    col = db["contacts"]

    # Rate-limit by email: max 3 per day
    from datetime import datetime, timezone, timedelta
    since = datetime.now(timezone.utc) - timedelta(days=1)
    count = await col.count_documents({
        "email": body.email,
        "created_at": {"$gte": since},
    })
    if count >= 3:
        raise HTTPException(status_code=429, detail="Too many messages from this email today.")

    # Store
    ip = request.client.host if request.client else ""
    doc = ContactDocument(**body.model_dump(), ip_address=ip)
    await col.insert_one(doc.model_dump())

    # Notify (fire-and-forget style)
    try:
        await send_notification(body.name, body.email, body.subject, body.message)
    except Exception:
        pass  # Don't fail the request if email fails

    return {"status": "ok", "message": "Message received. I'll respond within 24 hours."}


@router.get("/contacts")
async def list_contacts():
    """Admin endpoint — protect with auth in production."""
    db  = get_database()
    col = db["contacts"]
    docs = await col.find({}, {"_id": 0}).sort("created_at", -1).limit(50).to_list(50)
    return {"contacts": docs}