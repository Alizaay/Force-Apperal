# Force-Apperal

Deployed demo (Vercel): https://force-apparel.vercel.app

Deployment notes:
- This repository contains the frontend inside the `client/` folder. Vercel is configured via `vercel.json` to build from `client`.
- Production environment variables for the Vite app are set in `client/.env.production` (e.g. `VITE_APP_SITE_URL`).
