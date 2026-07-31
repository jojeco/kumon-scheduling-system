# Kumon Scheduling System

Web-based scheduling and student management system built for a Kumon learning centre. Handles student session scheduling, instructor assignment, and attendance tracking via a full-stack web application.

## Tech Stack

**Backend** — Node.js · Express.js · PostgreSQL · Firebase Authentication  
**Frontend** — React · JavaScript  
**Auth** — Firebase (JWT token verification on all protected routes)

## Features

- Student and instructor account management
- Session scheduling with conflict detection
- Firebase-backed authentication with protected API routes
- PostgreSQL for persistent scheduling data
- REST API with CORS support for frontend integration

## Architecture

```
frontend/          React client
backend/
  server.js        Express app entry point
  db.js            PostgreSQL connection pool
  firebaseAdmin.js Firebase Admin SDK init
  src/
    routes/        API route handlers
    middlewares/   Auth middleware
```

## Setup

**Backend:**
```bash
cd backend
npm install
# Create .env with DB_URL and Firebase credentials
node server.js
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## API

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/` | No | Health check |
| GET | `/db-test` | No | DB connection test |
| GET | `/profile` | Bearer token | Authenticated user profile |

---

Built as a real-world project for a local Kumon franchise — designed to replace manual scheduling with an automated web-based workflow.
