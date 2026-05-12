from motor.motor_asyncio import AsyncIOMotorClient
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    MONGODB_URI:     str = "mongodb://localhost:27017"
    DATABASE_NAME:   str = "shaon_portfolio"
    SMTP_HOST:       str = "smtp.gmail.com"
    SMTP_PORT:       int = 587
    SMTP_USER:       str = ""
    SMTP_PASS:       str = ""
    NOTIFY_EMAIL:    str = ""
    ALLOWED_ORIGINS: str = "http://localhost:5173"


settings = Settings()

client: AsyncIOMotorClient | None = None


def get_database():
    return client[settings.DATABASE_NAME]


async def connect_db():
    global client
    client = AsyncIOMotorClient(settings.MONGODB_URI)
    print("✅  MongoDB connected")


async def close_db():
    global client
    if client:
        client.close()
        print("🔌  MongoDB disconnected")