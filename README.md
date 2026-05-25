# MCS Handbook Mobile App - React MVC + Node.js Microservices

This starter project converts the MCS Program Handbook mobile app requirements into a React front-end and Node.js/Express microservice back-end.

## Architecture

- **Frontend:** React using MVC-style folders: `models`, `controllers`, `views`, `services`, `components`.
- **Backend:** Node.js microservices using MVC folders: `models`, `controllers`, `routes`, `server.js`.
- **API Gateway:** Single entry point for the React app. It forwards requests to each microservice.

## Main Features

1. Program handbook information
2. Entry requirements
3. Curriculum and unit details
4. Career pathways and career outcomes
5. Announcements
6. Admin authentication
7. Unit bookmarks

## Run with Docker Compose

```bash
docker compose up --build
```

Frontend: http://localhost:5173  
API Gateway: http://localhost:5000

## Run Manually

Open separate terminals:

```bash
cd backend/auth-service && npm install && npm run dev
cd backend/handbook-service && npm install && npm run dev
cd backend/curriculum-service && npm install && npm run dev
cd backend/career-service && npm install && npm run dev
cd backend/announcement-service && npm install && npm run dev
cd backend/bookmark-service && npm install && npm run dev
cd backend/api-gateway && npm install && npm run dev
cd frontend && npm install && npm run dev
```

## Demo Login

```txt
Email: admin@mcs.edu.pg
Password: admin123
```
