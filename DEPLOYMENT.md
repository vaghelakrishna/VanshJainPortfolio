# Deployment Guide

## Frontend on Vercel

Root directory:
`frontend`

Build command:
`npm run build`

Output directory:
`dist`

Environment variables:
`VITE_API_BASE_URL=https://your-render-service.onrender.com/api`

Notes:
- `frontend/vercel.json` rewrites all routes to `index.html` so React Router works on refresh.

## Backend on Render

Root directory:
`backend`

Build command:
`npm install`

Start command:
`npm start`

Environment variables:
`MONGO_URI=...`
`ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app,https://www.yourdomain.com`
`GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzfxI5ajmcmnrCWAsItCdVtcPT-6-uLEUdoUX8UkfMcV5VaMDhDcK2XwNsErhj2vOCLFw/exec`

Health check:
`/api/health`

Notes:
- `render.yaml` is included as a starting blueprint for the backend service.
- If you use the default `onrender.com` domain first, include that Vercel domain in `ALLOWED_ORIGINS`.
- Form submissions now go to Google Sheets through your Apps Script web app.
- MongoDB is optional now, so the backend still starts even if `MONGO_URI` is not set.
