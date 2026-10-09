export type Project = {
  slug: string;
  name: string;
  category: string;
  intro: string;
  problem: string;
  system: string;
  accent: string;
  github: string;
  live?: string;
  docs: { label: string; url: string }[];
  scope: string;
  stack: string[];
  metrics: { value: string; label: string; detail: string }[];
  decisions: { title: string; body: string }[];
  flow: string[];
  media: {
    hero?: string;
    video: string;
    gallery: { file: string; caption: string; alt: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "atlas",
    name: "ATLAS",
    category: "Traffic intelligence · Graph ML · Real-data evaluation",
    intro: "An AI-powered traffic digital twin connecting real observations, vehicle trajectories, analytics, graph forecasting, and reproducible signal-control experiments.",
    problem: "Traffic footage is difficult to inspect as structured evidence. Engineers need persistent tracks, synchronized replay, meaningful baselines, and clear limits before drawing conclusions about traffic control or safety.",
    system: "Five official city catalogs supply provenance-aware traffic observations. The native Python/FastAPI worker processes snapshots, accepts versioned operator road regions, estimates visible counts, and runs matched SUMO experiments under explicit demand assumptions. Next.js and Three.js replay real CV trajectories; synchronized maps show actual simulated vehicle positions. A separate 207-sensor highway laboratory evaluates directional graph neural forecasting. The public site serves genuine saved outputs without requiring local infrastructure.",
    accent: "green",
    github: "https://github.com/youssef061204/ATLAS",
    live: "https://atlas-mu-murex.vercel.app",
    docs: [
      {label:"Connected architecture",url:"https://github.com/youssef061204/ATLAS/blob/main/docs/atlas-3-architecture.md"},
      {label:"Verified engineering metrics",url:"https://github.com/youssef061204/ATLAS/blob/main/docs/VERIFIED_ENGINEERING_METRICS.md"},
      {label:"Signal-control results",url:"https://github.com/youssef061204/ATLAS/blob/main/docs/signal-control-results.md"},
    ],
    scope: "Real CV scores cover three predeclared UA-DETRAC sequences. The GNN measures highway speed on the shared historical METR-LA holdout, with one training seed and independent replication pending. City demand and lane geometry remain uncalibrated; public outputs are precomputed and signal effects are simulations, not field savings.",
    stack: ["Python","PyTorch","OpenCV","YOLO","ByteTrack","FastAPI","Next.js","TypeScript","Three.js","scikit-learn","SUMO","SQLite","Docker"],
    metrics: [
      {value:"0.898",label:"UA-DETRAC mAP@50",detail:"4,260 real annotated frames; merged vehicle class; untouched pretrained baseline"},
      {value:"5.85%",label:"forecast MAE vs original ML",detail:"Directional GNN: 2.344 vs 2.490 mph at 5 minutes; 207 METR-LA sensors; paired day-block 95% CI 5.59–6.13%; shared historical holdout"},
      {value:"29.4 FPS",label:"complete CPU pipeline",detail:"Intel i7-14700HX; includes inference, analytics, and persistence on real traffic frames"},
      {value:"65.7%",label:"Cologne delay vs fixed",detail:"Validation-frozen MPC; 10 new paired RESCO seeds; 95% bootstrap CI 64.7-66.6%; simulated intervention"},
    ],
    decisions: [
      {title:"Measured graph learning, separate domains",body:"A 3,617-parameter directional graph neural model learns local, upstream and downstream messages across 207 highway sensors. Five-minute MAE falls from 2.490 to 2.344 mph and fifteen-minute MAE from 3.214 to 2.975 mph under the original chronology and target masks. A matched temporal MLP isolates the graph benefit; epochs are selected on validation. These highway predictions are not relabeled as camera-derived city queues."},
      {title:"Recognized benchmarks, untouched baselines",body:"Evaluated pretrained detection with COCOeval and the production tracker with official HOTA/CLEAR/Identity metrics. METR-LA five-minute MAE is 2.490 mph versus persistence 2.813 across all 207 sensors under chronological holdout. Pinned source revisions and per-camera artifacts make the limited test scope explicit."},
      {title:"Replace the failed controller, preserve the evidence",body:"The original cyclic controller measured 66.45 s versus fixed 57.45 s and max-pressure 37.99 s; that failure remains published. Validation-selected 30-second MPC now measures 20.53 s across 10 new paired Cologne1 seeds: 65.7% lower delay than fixed and 45.3% lower than unchanged max-pressure, winning all 10 seeds. Untuned Ingolstadt1 transfer failed (40.08 s versus fixed 37.95 and max-pressure 28.16); forecasting's separate ablation benefit was small and uncertain. These are simulated interventions, not field improvements."},
      {title:"Public replay without pretending to host inference",body:"The Vercel deployment serves real previously processed trajectories, an attributed annotated video, forecasts, and cached simulation playback. Uploads and configuration changes remain in the local worker architecture. Missing metric calibration gates physical safety screens rather than inventing TTC/PET results."},
    ],
    flow:["Official observations / video","CV + uncertain visible state","Explicit demand assumptions","Matched SUMO + real replay","Evidence + pilot assessment"],
    media:{hero:"vision-v3.jpg",video:"walkthrough-v3.mp4",gallery:[
      {file:"vision-v3.jpg",caption:"Actual licensed video, recorded detections and trajectories synchronize with the image-plane digital twin. This Mixkit replay's sampled FPS is separate from the UA-DETRAC complete-pipeline benchmark.",alt:"ATLAS actual traffic video, tracking overlay and synchronized digital twin"},
      {file:"cities-v3.jpg",caption:"Official camera coordinates and an actual imported OSM corridor make source coverage inspectable. Geometry and generated signal phases do not establish field demand calibration.",alt:"ATLAS official city observations and imported road corridor"},
      {file:"comparison-v3.jpg",caption:"Actual baseline and prototype SUMO vehicle positions share one timeline. The observation-conditioned case uses explicit unvalidated demand assumptions; its conditional difference is not a city performance claim.",alt:"ATLAS synchronized matched observation-conditioned signal simulation"},
      {file:"laboratory-v3.jpg",caption:"The graph forecasting laboratory shows all evaluated horizons, the matched temporal MLP, validation-selected models and paired historical-holdout intervals.",alt:"ATLAS measured directional graph neural forecasting and comparator results"},
    ]},
  },
  {
    slug: "tradepersona",
    name: "TradePersona",
    category: "Behavioral ML · Research preview",
    intro: "A trading-history analysis system that separates measured behavior from experimental classification.",
    problem: "A trade log can reveal patterns in activity, sizing, and holding time. Turning those patterns into a behavioral label requires stronger evidence than a plausible-looking dashboard.",
    system: "A Next.js upload and analysis interface, bounded Express API, and persistent Python worker. One canonical feature pipeline feeds a versioned classifier, calibrated probabilities, abstention checks, explanations, counterfactuals, and an artifact-driven evaluation page.",
    accent: "green",
    github: "https://github.com/youssef061204/TradePersona",
    docs: [
      { label: "Methodology", url: "https://github.com/youssef061204/TradePersona/blob/main/docs/METHODOLOGY.md" },
      { label: "Evaluation artifact", url: "https://github.com/youssef061204/TradePersona/blob/main/backend/ml/artifacts/v1/evaluation.json" },
    ],
    scope: "Synthetic benchmark only. These labels have not been validated on real traders.",
    stack: ["Python", "scikit-learn", "pandas", "Express", "Next.js", "TypeScript", "Docker"],
    metrics: [
      { value: "0.779", label: "held-out macro F1", detail: "320 independent synthetic histories; 95% CI 0.735–0.820" },
      { value: "85.0%", label: "classification coverage", detail: "81.6% accuracy on retained synthetic histories" },
      { value: "20", label: "versioned features", detail: "Shared by training and inference" },
    ],
    decisions: [
      { title: "Leakage-aware evaluation", body: "Rejected four filename-labeled legacy trajectories as an accuracy benchmark. Split 2,000 new synthetic histories by whole trajectory across training, selection, calibration, policy, test, and shift sets." },
      { title: "Uncertainty is a product state", body: "Temperature scaling and fixed confidence/margin gates can withhold classification. Missing holding data, insufficient history, and unsupported feature ranges also trigger abstention." },
      { title: "Explanations follow the model", body: "Median-replacement sensitivity probes and raw-history counterfactuals rerun dependent features and inference; they are labeled as model sensitivity, not causal advice." },
    ],
    flow: ["Completed-trade CSV", "Validate + 20 features", "Versioned model", "Calibrate + gate", "Analysis / abstain"],
    media: {
      hero: "dashboard.webp",
      video: "demo.mp4",
      gallery: [
        { file: "dashboard.webp", caption: "Analysis output shows a classified synthetic pattern alongside probability and evidence, with its research scope visible.", alt: "TradePersona analysis dashboard with pattern and probability panels" },
        { file: "evaluation.webp", caption: "The evaluation view reads generated artifacts and exposes held-out performance and uncertainty.", alt: "TradePersona model evaluation dashboard" },
        { file: "upload.webp", caption: "The input flow defines the completed-trade contract before analysis.", alt: "TradePersona CSV upload screen" },
        { file: "counterfactual.webp", caption: "A raw-history edit recomputes dependent features and reruns the model; it is a sensitivity probe.", alt: "TradePersona counterfactual model sensitivity view" },
        { file: "abstention.webp", caption: "Unsupported or ambiguous histories are withheld instead of forcing a label.", alt: "TradePersona abstention state" },
      ],
    },
  },
  {
    slug: "ledgermatch",
    name: "LedgerMatch",
    category: "Financial workflow · ML assisted review",
    intro: "A reconciliation system that automates defensible matches and sends ambiguous payments to a reviewer.",
    problem: "Payment and invoice records rarely line up perfectly. Exact matches should be repeatable; ambiguous or risky cases need a clear review trail rather than silent automation.",
    system: "A Next.js workspace, PostgreSQL ledger and pg-boss worker combine integer-cent matching with a trained XGBoost candidate ranker. The model only recommends compatible invoices; a reviewer confirms every model-assisted allocation.",
    accent: "blue",
    github: "https://github.com/youssef061204/LedgerMatch",
    docs: [
      { label: "Architecture", url: "https://github.com/youssef061204/LedgerMatch/blob/main/docs/architecture.md" },
      { label: "Evaluation", url: "https://github.com/youssef061204/LedgerMatch/blob/main/docs/resume-metrics.md" },
    ],
    scope: "Synthetic data and local benchmarks. No bank integration, money movement, or measured human time savings.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pg-boss", "XGBoost", "Python", "Docker"],
    metrics: [
      { value: "87.15%", label: "top-1 ranking", detail: "Up from 24.13%; 4,794 held-out synthetic valid-match exceptions" },
      { value: "98.92%", label: "recommendation precision", detail: "68.83% coverage on 5,759 held-out synthetic exceptions" },
      { value: "5,509/s", label: "payment throughput", detail: "Median of 3 local trials on 100,000 synthetic payments; excludes queue wait" },
    ],
    decisions: [
      { title: "Rules own the money", body: "Exact integer-cent amounts, reference checks, PostgreSQL constraints, serialized workspace writes, and retained audit evidence guard allocations. ML never commits one." },
      { title: "Rank, calibrate, abstain", body: "The XGBoost model reranks bounded compatible candidates. Confidence thresholds are selected on validation cohorts; uncertain groups remain manual review work." },
      { title: "Recoverable background work", body: "A durable pg-boss worker uses idempotent batches, locks, retry fencing, and progress records. An invalid or disabled model falls back to heuristic suggestions." },
    ],
    flow: ["CSV imports", "Deterministic match", "Exception candidates", "ML rank + abstain", "Human confirmation"],
    media: {
      hero: "dashboard.webp",
      video: "demo.mp4",
      gallery: [
        { file: "dashboard.webp", caption: "The synthetic workspace exposes balances, run state, and exceptions needing review.", alt: "LedgerMatch reconciliation dashboard and exception table" },
        { file: "mobile.webp", caption: "The same review surface is available on a narrow screen.", alt: "LedgerMatch mobile dashboard" },
        { file: "recommendation.webp", caption: "Ranked invoice suggestions show confidence, abstention, and the need for reviewer confirmation.", alt: "LedgerMatch machine learning recommendation" },
        { file: "exception-review.webp", caption: "A reviewer records evidence before allocating an ambiguous payment.", alt: "LedgerMatch exception review workflow" },
        { file: "audit.webp", caption: "The review note and allocation appear in a retained audit trail alongside worker decisions.", alt: "LedgerMatch audit trail after a reviewed allocation" },
        { file: "evaluation.webp", caption: "The model evaluation dashboard exposes ranking, precision, coverage, and synthetic test scope.", alt: "LedgerMatch model evaluation dashboard" },
      ],
    },
  },
  {
    slug: "ai-operator",
    name: "AI Operator",
    category: "Coding agent · Controlled execution",
    intro: "A local coding agent whose model proposes changes while the runtime controls execution, verification, and acceptance.",
    problem: "A model can write useful code, but it should not grant itself permissions, run unchecked commands, or declare its own work complete.",
    system: "A typed runtime orchestrates Gemini decisions in isolated Git worktrees, brokers approved Docker commands, verifies tasks independently, and presents a frozen changeset for accept, discard, or revert.",
    accent: "orange",
    github: "https://github.com/youssef061204/AI-Operator",
    docs: [
      { label: "Security model", url: "https://github.com/youssef061204/AI-Operator/blob/main/docs/security.md" },
      { label: "Benchmark artifact", url: "https://github.com/youssef061204/AI-Operator/blob/main/artifacts/evaluation/live-benchmark.json" },
    ],
    scope: "One frozen 50-task live model run. Safety results use deterministic fixture decisions, not live model quality.",
    stack: ["TypeScript", "Next.js", "Node.js", "Gemini", "Git", "Docker", "Playwright"],
    metrics: [
      { value: "33/50", label: "live coding tasks", detail: "66.0% in one frozen Gemini 3.8 Flash run; independent Docker graders" },
      { value: "42/42", label: "expected safety outcomes", detail: "14 deterministic scenarios × 3 runs; 0 permission violations in this suite" },
      { value: "50/50", label: "grader integrity", detail: "Known-bad fixtures fail; reference solutions pass" },
    ],
    decisions: [
      { title: "Model output is untrusted", body: "Strict schemas, action-specific one-use approvals, broker-assigned risk, path defenses, and bounded steps keep model decisions inside runtime policy." },
      { title: "Isolate and constrain", body: "Each task uses a detached Git worktree. Docker command execution defaults to no network, one CPU, 512 MiB memory, 128 PIDs, a read-only root, and a task-workspace-only mount." },
      { title: "Reviewable lifecycle", body: "Independent verification freezes a multi-file proposal. Hash preflights and a recovery journal preserve external edits when accept or revert encounters a conflict." },
    ],
    flow: ["Task + verification", "Schema-bound model", "Isolated worktree", "Restricted execution", "Verify + review diff"],
    media: { hero: "hero.webp", video: "demo.mp4", gallery: [
      { file: "review.webp", caption: "The local runtime presents proposed files for accept, discard, or revert after verification.", alt: "AI Operator changeset review" },
      { file: "evaluation.webp", caption: "The evaluation screen separates deterministic safety evidence from live coding capability.", alt: "AI Operator evaluation view" },
    ] },
  },
  {
    slug: "zentro",
    name: "Zentro",
    category: "Agent marketplace · Verification first",
    intro: "A marketplace prototype that admits structured, checkable agent work and records how it is routed, verified, and settled.",
    problem: "An open-ended agent marketplace cannot treat every claimed capability or submitted result as equally trustworthy. Supported work needs explicit admission and verification rules.",
    system: "A Next.js operator and marketplace interface sits over an Express API, Prisma/PostgreSQL state, Redis/BullMQ queues, workers, verifier, and settlement services. Policy gates task types and required artifacts before routing.",
    accent: "violet",
    github: "https://github.com/youssef061204/Zentro",
    docs: [
      { label: "Ecosystem architecture", url: "https://github.com/youssef061204/Zentro/blob/main/docs/ecosystem-architecture.md" },
      { label: "Example artifacts", url: "https://github.com/youssef061204/Zentro/tree/main/docs/examples" },
    ],
    scope: "Prototype. The repository provides implementation and example artifacts, but no published outcome benchmark or public deployment was verified.",
    stack: ["TypeScript", "Next.js", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
    metrics: [],
    decisions: [
      { title: "Narrow task admission", body: "Policy definitions allow code, testing, source-grounded documentation, data extraction, and data analysis while blocking unsupported open-ended categories." },
      { title: "Evidence-aware routing", body: "Candidate scoring combines capability coverage, benchmark confidence, reputation, latency, cost, bounded exploration, and trust penalties; attempts and reasons are recorded." },
      { title: "Traceable outcomes", body: "Task records carry routing breakdowns, fallback attempts, verifier strength, artifacts, failure classes, and escrow/settlement state through the workflow." },
    ],
    flow: ["Structured task", "Admission policy", "Score + route", "Execute + verify", "Record + settle"],
    media: { hero: "hero.webp", video: "demo.mp4", gallery: [
      { file: "task-detail.webp", caption: "A completed task in the local demo exposes routing, verification, and settlement state. Its financial figures are demo data.", alt: "Zentro marketplace task detail" },
    ] },
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
