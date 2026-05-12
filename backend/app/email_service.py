import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.database import settings


async def send_notification(name: str, email: str, subject: str, message: str):
    """Send email notification when a new contact form is submitted."""
    if not settings.SMTP_USER or not settings.NOTIFY_EMAIL:
        print("⚠️  SMTP not configured — skipping email")
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Portfolio] New message: {subject or 'No subject'}"
    msg["From"]    = settings.SMTP_USER
    msg["To"]      = settings.NOTIFY_EMAIL

    html = f"""
    <html><body style="font-family: 'DM Sans', sans-serif; background: #1D3557; color: #F1FAEE; padding: 32px;">
      <div style="max-width: 560px; margin: auto; border: 1px solid rgba(168,218,220,0.2); border-radius: 4px; padding: 32px;">
        <h2 style="color: #E63946; font-size: 20px; margin-bottom: 4px;">New Portfolio Message</h2>
        <p style="color: #A8DADC; font-size: 12px; font-family: monospace; margin-bottom: 24px;">from shaon-portfolio contact form</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #A8DADC; font-size: 12px; font-family: monospace; width: 80px;">NAME</td>
              <td style="padding: 8px 0; color: #F1FAEE;">{name}</td></tr>
          <tr><td style="padding: 8px 0; color: #A8DADC; font-size: 12px; font-family: monospace;">EMAIL</td>
              <td style="padding: 8px 0; color: #F1FAEE;"><a href="mailto:{email}" style="color: #457B9D;">{email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #A8DADC; font-size: 12px; font-family: monospace;">SUBJECT</td>
              <td style="padding: 8px 0; color: #F1FAEE;">{subject or '—'}</td></tr>
        </table>
        <div style="margin-top: 24px; border-top: 1px solid rgba(168,218,220,0.15); padding-top: 24px;">
          <p style="color: #A8DADC; font-size: 12px; font-family: monospace; margin-bottom: 8px;">MESSAGE</p>
          <p style="color: #F1FAEE; line-height: 1.7; white-space: pre-wrap;">{message}</p>
        </div>
      </div>
    </body></html>
    """

    msg.attach(MIMEText(html, "html"))

    try:
        await aiosmtplib.send(
            msg,
            hostname=settings.SMTP_HOST,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASS,
            start_tls=True,
        )
        print(f"✉️  Email notification sent for {email}")
    except Exception as e:
        print(f"❌  Email send failed: {e}")