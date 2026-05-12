from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, timezone


class ContactRequest(BaseModel):
    name:    str = Field(..., min_length=2, max_length=100)
    email:   EmailStr
    subject: str = Field(default="", max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactDocument(ContactRequest):
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    ip_address: str = ""
    read:       bool = False