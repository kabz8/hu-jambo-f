# FaithJourney

A Vite + React + Express app configured for Vercel. Static client is built to `dist/public`, API served via `api/index.ts`.

## Local development

```bash
# from FaithJourney/
npm install
npm run dev
```

Client runs through the Express server in dev; logs appear in the terminal.

## Build

```bash
npm run build
```

Outputs to `dist/public`.

## Deploy to Vercel

This repo includes `vercel.json` so Vercel will:
- build the static app via `vercel-build` → `vite build`
- serve static files from `dist/public`
- expose API routes from `api/index.ts`

Steps:
1. Push this project to GitHub.
2. In Vercel Dashboard, import the repo and set the project root to `FaithJourney/`.
3. Framework Preset: `Other` (Vite). Build command: `npm run vercel-build`. Output directory: `dist/public`.
4. Environment variables (optional): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` if using donations.

After deploy, Vercel will serve `/` from the built static assets and `/api/*` from the serverless function.
