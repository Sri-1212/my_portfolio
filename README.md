# Srilakshmi — Full-Stack Portfolio

A full-stack personal portfolio built to showcase my projects, skills, and achievements — with a real backend and database behind the contact form, not just a static frontend.

**Live site:** my-portfolio-weld-tau-cmq5sgg2rx.vercel.app
**Backend API:** myportfolio-production-cb40.up.railway.app 

---

## Tech Stack

**Frontend**
- React + TypeScript
- Tailwind CSS
- Framer Motion (scroll animations, sticky project cards, magnetic hover effects)
- Vite

**Backend**
- Node.js + Express.js
- REST API (`/api/contact`, `/api/health`)

**Database**
- MySQL (via `mysql2`)
- Stores contact form submissions in a `contact_messages` table

**Deployment**
- Frontend → Vercel
- Backend → Railway
- Database → Railway MySQL

---

## Features

- Responsive, animated hero section with a scroll-following 3D avatar
- Scrolling tech-stack marquee
- Scroll-revealed About section with character-by-character text animation
- Skills section grouped by category (Languages, Frontend, Backend & Database, IoT & Hardware)
- Sticky-stacking Projects section showcasing real projects (IoT systems, hackathon builds, web apps)
- Achievements & Leadership section
- Working Contact form — submissions are validated on the backend and persisted to a production MySQL database
- Full separation of local vs. production config via environment variables (no hardcoded secrets or URLs)

---

## Project Structure

```
portfolio/
├── src/                  # React frontend
│   ├── sections/         # Hero, About, Skills, Projects, Achievements, Contact
│   ├── components/       # Reusable UI (buttons, FadeIn, Magnet, AnimatedText)
│   └── hooks/            # useApi.ts — handles local vs. production API base URL
├── server/               # Express backend
│   ├── index.js          # App entry point, CORS, health check
│   ├── db.js             # MySQL connection pool (env-variable driven)
│   ├── routes/
│   │   └── contact.js    # POST /api/contact
│   └── package.json
├── package.json          # Frontend package.json
└── vite.config.ts
```

---

## Running Locally

**1. Clone the repo**
```bash
git clone <your-repo-url>
cd portfolio
```

**2. Frontend setup**
```bash
npm install
npm run dev
```
Runs at `http://localhost:5173`

**3. Backend setup**
```bash
cd server
npm install
```

Create a `server/.env` file (see `server/.env.example`):
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_local_mysql_password
DB_NAME=portfolio_db
FRONTEND_URL=http://localhost:5173
```

Create the database table:
```sql
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Start the backend:
```bash
npm start
```
Runs at `http://localhost:5000`

---

## Environment Variables

**Frontend** (`.env`, used only in production builds)
```env
VITE_API_URL=https://your-backend.up.railway.app
```
Not required locally — the Vite dev server proxies `/api` requests to `localhost:5000` automatically.

**Backend** (`server/.env`)
| Variable | Description |
|---|---|
| `DB_HOST` | MySQL host |
| `DB_PORT` | MySQL port |
| `DB_USER` | MySQL user |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | MySQL database name |
| `FRONTEND_URL` | Allowed CORS origin (frontend URL) |
| `PORT` | Set automatically by the hosting platform in production |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check — returns `{ status: "ok", service: "portfolio-backend" }` |
| `POST` | `/api/contact` | Accepts `{ name, email, message }`, validates input, and stores it in `contact_messages` |

---

## Deployment Notes

- Frontend is deployed on **Vercel**, with `VITE_API_URL` set as an environment variable pointing to the live backend.
- Backend is deployed on **Railway**, configured to:
  - Bind to `0.0.0.0` and use Railway's dynamic `PORT`
  - Read all database credentials from environment variables (no secrets committed to the repo)
  - Restrict CORS to the deployed frontend's URL only
- Database is a **Railway MySQL** service, kept separate from the local development database.

---

## Author

**Srilakshmi**
B.Tech Computer Science Engineering, BMS Institute of Technology & Management
[GitHub](https://github.com/Sri-1212) · [LinkedIn](https://www.linkedin.com/in/srilakshmi-)