# Youssef Elsokkary — engineering portfolio

A statically generated Next.js portfolio featuring six repository-backed case studies: ATLAS, SIGHT, TradePersona, LedgerMatch, AI Operator, and Zentro. Claims and caveats are centralized in app/lib/projects.ts; optional project media is detected from public/projects/ at build time.

## Run

- npm ci
- npm run dev

Open http://localhost:3000. For production verification, run `npm run lint`, `npm run typecheck`, `npm run check:links`, and `npm run build`.

Set `SITE_URL` to the deployed site's absolute HTTPS origin before building so social preview image URLs resolve to the public site. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used when `SITE_URL` is absent.

## Add or replace media

See docs/media-guide.md for exact capture scripts and filenames. Drop an image or demo.mp4 into the configured project directory, then rebuild/redeploy. Missing optional files are omitted; architecture or benchmark visuals fill the hero when no screenshot exists.

## Evidence boundaries

SIGHT is featured second with genuine native Android emulator captures in a portrait-preserving layout. Its case study explains spoken destination choices, real pedestrian routing, local visual subtasks and offline recognition, while separating provider samples, held-out road/object accuracy, native checks and unverified physical-device or participant outcomes. The road-presence model exceeded its held-out false-event budget, so automatic road narration stays disabled and its diagnostics require explicit opt-in. It does not claim safe crossings, clear walking paths or certified mobility-aid readiness. See [SIGHT media and verification notes](docs/sight-project.md).

ATLAS is featured first with four actual application screenshots and a recorded walkthrough. Detection/tracking scores cover three predeclared UA-DETRAC test sequences, forecasting uses chronological METR-LA holdout, and CPU throughput includes production processing and persistence. Its public demo uses precomputed real CV outputs. The negative held-out RESCO signal result remains explicit; the separate synthetic improvement is not presented as field validation.

Dependency audit: production dependencies have no reported advisories at publication. The existing development-only Next.js ESLint dependency chain includes `braces` GHSA-vfj7-8cjw-p6xm, for which no patched release exists at verification. It processes repository lint patterns and is not shipped in the portfolio runtime. The suggested major downgrade was not applied.

TradePersona and LedgerMatch predictive results use held-out synthetic data. AI Operator reports a single frozen live-model coding run separately from deterministic safety tests. Zentro is a locally demonstrated prototype with no verified published outcome benchmark or public deployment.

The featured ATLAS card now includes **65.7% paired delay reduction versus fixed** on ten unseen RESCO Cologne1 seeds (bootstrap 95% CI 64.7-66.6%). Its case study reports 20.53 s MPC delay, 45.3% paired reduction versus unchanged max-pressure, the preserved original 66.45 s failure, weak forecasting ablation benefit, and failed untuned Ingolstadt1 transfer. Updated screenshots and the 58-second walkthrough come from the actual public-demo build; these are simulated interventions, not field improvements. METR-LA results remain in the case-study evidence text.
