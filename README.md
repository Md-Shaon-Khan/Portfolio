# Md Shaon Khan — Portfolio

> Elite AI & Healthcare Engineering Portfolio

## Tech Stack
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + MongoDB Atlas + Motor + SMTP
- **Deployment**: Netlify (frontend) + Render (backend)

## Folder Structure
```
shaon-portfolio/
├── frontend/
│   ├── public/
│   │   └── resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Cursor.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── ParticleBackground.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── hooks/
│   │   │   └── useScrollProgress.ts
│   │   ├── lib/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.ts
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── .env
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes/
│   │   │   └── contact.py
│   │   ├── database.py
│   │   └── email_service.py
│   ├── requirements.txt
│   └── .env
├── .gitignore
└── README.md
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Environment Variables

### Frontend `.env`
```
VITE_API_URL=http://localhost:8000
VITE_GITHUB_TOKEN=your_github_token
```

### Backend `.env`
```
MONGODB_URI=mongodb+srv://...
DATABASE_NAME=shaon_portfolio
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
NOTIFY_EMAIL=your@email.com
```

## Deployment

### Netlify (Frontend)
1. Push `frontend/` to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add env vars in Netlify dashboard

### Render (Backend)
1. Push `backend/` to GitHub
2. New Web Service on Render
3. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Add env vars in Render dashboard