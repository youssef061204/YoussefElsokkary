# Youssef Elsokkary — engineering portfolio

A statically generated Next.js portfolio featuring four repository-backed case studies: TradePersona, LedgerMatch, AI Operator, and Zentro. Claims and caveats are centralized in app/lib/projects.ts; optional project media is detected from public/projects/ at build time.

## Run

- npm ci
- npm run dev

Open http://localhost:3000. For production verification, run `npm run lint`, `npm run typecheck`, `npm run check:links`, and `npm run build`.

Set `SITE_URL` to the deployed site's absolute HTTPS origin before building so social preview image URLs resolve to the public site. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used when `SITE_URL` is absent.

## Add or replace media

See docs/media-guide.md for exact capture scripts and filenames. Drop an image or demo.mp4 into the configured project directory, then rebuild/redeploy. Missing optional files are omitted; architecture or benchmark visuals fill the hero when no screenshot exists.

## Evidence boundaries

TradePersona and LedgerMatch predictive results use held-out synthetic data. AI Operator reports a single frozen live-model coding run separately from deterministic safety tests. Zentro is a locally demonstrated prototype with no verified published outcome benchmark or public deployment.
