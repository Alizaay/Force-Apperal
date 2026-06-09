# Force-Apperal

Deployed demo (Vercel): https://force-apparel.vercel.app

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

The frontend lives at the **repository root** (not in a subfolder).

In your Vercel project settings, set:

- **Root Directory:** leave empty (or `.`)
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

`vercel.json` at the repo root handles SPA routing and asset caching.

Production env vars (optional):

- `VITE_APP_SITE_URL` — set in Vercel dashboard or via `.env.production`
