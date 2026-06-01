# MCS Program Handbook Mobile App

A complete starter application for the Bachelor of Mathematics and Computing Science Program Handbook.

## Architecture

- **Frontend:** React + Vite using MVC-style folders
- **Backend:** Node.js + Express microservices
- **API Gateway:** One entry point for the frontend
- **Storage:** JSON file storage for quick local testing
- **Ready for MongoDB:** Models and controllers are separated for later database migration

## Services

| Service | Port | Purpose |
|---|---:|---|
| API Gateway | 5000 | Routes frontend requests to services |
| Auth Service | 5001 | Admin login and token validation |
| Handbook Service | 5002 | Program overview and entry requirements |
| Curriculum Service | 5003 | Units, curriculum search, filters |
| Career Service | 5004 | Career pathways and outcomes |
| Announcement Service | 5005 | Department announcements |
| Bookmark Service | 5006 | Save favourite units |

## Run Locally

### 1. Install frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

### 2. Install backend services

Open separate terminals:

```bash
cd backend/auth-service && npm install && npm run dev
cd backend/handbook-service && npm install && npm run dev
cd backend/curriculum-service && npm install && npm run dev
cd backend/career-service && npm install && npm run dev
cd backend/announcement-service && npm install && npm run dev
cd backend/bookmark-service && npm install && npm run dev
cd backend/api-gateway && npm install && npm run dev
```

API Gateway runs on:

```txt
http://localhost:5000
```

### 3. Admin Login

```txt
Email: admin@mcs.edu.pg
Password: admin123
```

## Run with Docker

```bash
docker compose up --build
```

## Main Features

- Splash screen
- Home dashboard
- Program overview
- Entry requirements
- Curriculum by year and semester
- Unit search and filters
- Unit details
- Career pathways
- Announcements
- Bookmark favourite units
- Admin login
- Admin content management
- Microservice API gateway
- Modern mobile-friendly UI

## GitHub Upload

```bash
git init
git add .
git commit -m "Initial full MCS handbook app"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```
