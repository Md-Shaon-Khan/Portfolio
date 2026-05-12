from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

from app.database import connect_db, close_db, settings
from app.routes.contact import router as contact_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_db()
    yield
    await close_db()


limiter = Limiter(key_func=get_remote_address)

app = FastAPI(
    title="Shaon Portfolio API",
    description="Backend API for Md Shaon Khan's portfolio",
    version="1.0.0",
    lifespan=lifespan,
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS
origins = [o.strip() for o in settings.ALLOWED_ORIGINS.split(",")]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["health"])
async def health():
    return {"status": "ok", "service": "Shaon Portfolio API v1.0.0"}


@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}


# Routers
app.include_router(contact_router, prefix="/api", tags=["contact"])