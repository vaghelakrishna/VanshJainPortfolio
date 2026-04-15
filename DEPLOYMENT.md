# Deployment Guide

## Recommended setup

Deploy this repo as two separate Vercel projects:

1. Frontend project with root directory `frontend`
2. Backend project with root directory `backend`

This is the most stable setup for the current codebase. The frontend is a Vite SPA, and the backend is an Express API that accepts form submissions and forwards them to Google Sheets.

## Frontend on Vercel

Root directory:
`frontend`

Install command:
`npm install`

Build command:
`npm run build`

Output directory:
`dist`

Environment variables:
`VITE_API_BASE_URL=https://your-backend-project.vercel.app/api`

Notes:
- `frontend/vercel.json` rewrites all routes to `index.html` so React Router works on refresh.
- After the backend is deployed, update `VITE_API_BASE_URL` to the real backend URL and redeploy the frontend.

## Backend on Vercel

Root directory:
`backend`

Framework preset:
`Other`

Install command:
`npm install`

Build command:
Leave empty or use Vercel default detection.

Start command:
Not required when deployed on Vercel. For local development, use `npm start` or `npm run dev`.

Environment variables:
`ALLOWED_ORIGINS=https://your-frontend-project.vercel.app,https://www.yourdomain.com`
`GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzfxI5ajmcmnrCWAsItCdVtcPT-6-uLEUdoUX8UkfMcV5VaMDhDcK2XwNsErhj2vOCLFw/exec`
`MONGO_URI=...` optional

Health check:
`/api/health`

Notes:
- The backend can run without MongoDB because current form submissions are forwarded to Google Sheets.
- If `MONGO_URI` is missing, the server skips the database connection and still serves the API.
- Keep `ALLOWED_ORIGINS` in sync with every frontend domain that should be allowed to call the API.

## What the backend does

The backend is the bridge between the website forms and external services:

- `POST /api/contact` receives the contact form and sends it to the `Contacts` Google Sheet
- `POST /api/enroll` receives course enrollment data and sends it to the `Enrollments` Google Sheet
- `POST /api/subscribe` receives newsletter emails and sends them to the `Subscribers` Google Sheet
- `GET /api/health` gives you a quick status check for the API, Google Sheets integration, and Mongo config

The frontend should never call the Google Apps Script directly. The backend handles validation, CORS, environment variables, and secret-safe server-side forwarding.

## Vercel deployment order

1. Deploy the backend from `backend`
2. Copy the backend deployment URL
3. Set `VITE_API_BASE_URL` in the frontend project
4. Deploy the frontend from `frontend`
5. Add the frontend domain to `ALLOWED_ORIGINS` in the backend project

## Local development

Backend:
`cd backend`
`npm install`
`npm run dev`

Frontend:
`cd frontend`
`npm install`
`npm run dev`

For local frontend development, use:
`VITE_API_BASE_URL=http://localhost:5000/api`
