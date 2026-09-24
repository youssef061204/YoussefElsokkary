# Project media

The site reads media from public/projects/<slug>/ through app/lib/projects.ts. Files in the configured gallery appear automatically when present. Videos are optional; when demo.mp4 exists, a controlled, non-autoplaying player appears above the gallery. Add files and rebuild/redeploy the portfolio. No component edit is needed.

Screenshots currently shipped are from the project implementations: TradePersona and LedgerMatch from repository docs and local runs, and Zentro from a local run of its API, worker, database, and web app. The Zentro capture is a local prototype with demo data, not evidence of a public deployment or production transactions. AI Operator's benchmark panel is rendered from the frozen repository artifact; it is not a product screenshot.

Record 1080p at 30 fps, crop browser chrome, hide tokens, keys, personal data, and local absolute paths, then export H.264 MP4. Aim for 15–45 seconds. Use fictional or included sample data. Do not add a music track or autoplay. An optional ffmpeg command is: ffmpeg -i input.mp4 -vf "scale=1920:-2" -c:v libx264 -crf 24 -preset medium -movflags +faststart -an demo.mp4. Export screenshots as WebP around quality 80–85.

## TradePersona — public/projects/tradepersona/

Already present: dashboard.webp, evaluation.webp, upload.webp, counterfactual.webp, abstention.webp, demo.mp4. The demo is a 42-second local run using the repository sample, including upload, analysis, sensitivity, and evaluation.

### demo.mp4

1. Start the project with its README quickstart (npm run dev from TradePersona after dependencies are installed).
2. Open http://localhost:3000/upload and choose the included frontend/public/tradepersona-sample.csv.
3. Submit analysis and wait for /dashboard.
4. Show the model result, probabilities, evidence, explanations, and a counterfactual; pause long enough to read the synthetic-benchmark notice.
5. Open /evaluation and show the held-out metrics and uncertainty.
6. Export about 30–40 seconds to public/projects/tradepersona/demo.mp4.

### Still capture recipe

- counterfactual.webp: On /dashboard, scroll to the counterfactual section after uploading the included sample. Capture the edited history inputs and changed model output together.
- abstention.webp: Upload a valid CSV with at least 30 completed trades but missing holding_minutes throughout. Capture the analysis state that withholds classification and explains why. Do not edit the result in an image tool.

## LedgerMatch — public/projects/ledgermatch/

Already present: dashboard.webp, mobile.webp, recommendation.webp, exception-review.webp, audit.webp, evaluation.webp, demo.mp4. The 42-second demo uses a local synthetic workspace and shows import, reconciliation, abstention, reviewer confirmation, and allocation.

### demo.mp4

1. Start PostgreSQL, the Next.js app, and the separate worker using the LedgerMatch README.
2. Open http://127.0.0.1:3000, choose Try demo, then Load sample data.
3. Select Run reconciliation and show the completed run and remaining exceptions.
4. Open Exceptions, find PAY-1001, inspect suggestions, select INV-1001, add a fictional note, and allocate.
5. Show the changed balances and audit trail. Export about 35–45 seconds to public/projects/ledgermatch/demo.mp4.

### Still capture recipe

- recommendation.webp: Capture an exception with ranked invoice suggestions and its confidence/abstention state.
- exception-review.webp: Capture PAY-1001 before confirmation, with the selected invoice and reviewer note visible. Keep the synthetic-demo label in view.

## AI Operator — public/projects/ai-operator/

Already present: a benchmark visualization generated from artifacts/evaluation/live-benchmark.json and a source-backed architecture flow. No UI capture is shipped because this checkout has no configured Gemini key.

### hero.webp, review.webp, evaluation.webp, demo.mp4

1. Follow AI-Operator/README.md to install dependencies, pull node:24.13.0-bookworm-slim, and add GEMINI_API_KEY to its ignored .env.
2. Run pnpm dev. Open the one-use local connection URL printed by the launcher. Do not record or publish that URL.
3. Select a disposable Git repository and submit a small, concrete code task with a verification target.
4. Capture the task/progress UI as hero.webp once the plan and action states are populated.
5. If an action requests approval, show the exact command and approval control; approve only the task you deliberately submitted.
6. After verification, open the proposed changeset. Capture changed files, verification, and accept/discard/revert controls as review.webp.
7. Open /evaluations after running pnpm evaluate and the existing benchmark; capture the clearly separated safety and live-model evidence as evaluation.webp.
8. Record a 30–45 second sequence from task submission through plan, approval, verification, and changeset review. End before accepting into the working tree unless this is a disposable repo. Export as demo.mp4.

The homepage and case study switch from the benchmark panel to hero.webp as soon as it exists at build time. The benchmark remains in the case-study gallery.

## Zentro — public/projects/zentro/

Already present: hero.webp from /ecosystem, task-detail.webp from a local completed task, and demo.mp4 showing marketplace context through routing, verification, and escrow in a 38-second local walkthrough.

### demo.mp4

1. Follow Zentro/README.md to start PostgreSQL, Redis, API, worker, verifier, settlement, and web app. In the local development setup, npm run infra:up, npx prisma migrate deploy from apps/api, and npm run dev start the stack.
2. Open http://localhost:3000/ecosystem. If needed, select seed benchmarked agents.
3. Choose the CODE PATCH task template and show the policy fit, artifact contract, and benchmark floor before submission.
4. Submit a fictional local demo task and open its task detail page.
5. Show routing decision, score breakdown, verification snapshot, artifact coverage, assignment/escrow, and event timeline. Allow the task to finish if it runs asynchronously.
6. Export about 35–45 seconds to public/projects/zentro/demo.mp4. Keep OAuth credentials and any private repository data out of frame.

The shipped task screenshot depicts local demo state. Do not present its displayed task counts, trust, or escrow amounts as external usage metrics.
