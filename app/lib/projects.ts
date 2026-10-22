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
    "slug": "atlas",
    "name": "ATLAS",
    "category": "Traffic digital twin / Computer vision / Measured validation",
    "intro": "AI traffic intelligence turning continuous video into tracked trajectories, a synchronized 3D SUMO twin, forecasts, and independently measured physical errors.",
    "problem": "Traffic footage is difficult to inspect as structured evidence. Engineers need persistent tracks, synchronized replay, meaningful baselines, and clear limits before drawing conclusions about traffic control or safety.",
    "system": "ATLAS processes 49,979 consecutive frames across 13 complete NGSIM and CityFlow videos. A geographically registered Three.js scene pairs actual traffic footage with native free-running SUMO on one clock, with selectable vehicles, camera presets, frame controls and explicit inferred observations. A second complete FHWA camera was acquired and decoded for source integrity, separately from those CV totals. Ground-truth audits trace missing native states, source-located turns, signal-report timing and directional junction error. Frozen independent-site and cross-camera tests expose generalization limits. Native workers process real HLS and MJPEG streams; Next.js publishes genuine precomputed results without pretending to host persistent inference.",
    "accent": "green",
    "github": "https://github.com/youssef061204/ATLAS",
    "live": "https://atlas-mu-murex.vercel.app",
    "docs": [
      {
        "label": "Ground-truth diagnosis in the live demo",
        "url": "https://atlas-mu-murex.vercel.app/ground-truth"
      },
      {
        "label": "ATLAS 8 methods, controlled ablations and limitations",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/reality-v8-diagnostics.md"
      },
      {
        "label": "ATLAS 7 results, architecture and limitations",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/reality-v7-results.md"
      },
      {
        "label": "Current presentation provenance and media licenses",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/artifacts/portfolio/v8/source-license.txt"
      },
      {
        "label": "Archived ATLAS 6 experiment and errors",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/reality-v6-results.md"
      },
      {
        "label": "Video versus SUMO",
        "url": "https://atlas-mu-murex.vercel.app/reality"
      },
      {
        "label": "FHWA video attribution and license",
        "url": "https://atlas-mu-murex.vercel.app/demo/reality/v6/source-license.txt"
      },
      {
        "label": "Connected architecture",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/atlas-4-architecture.md"
      },
      {
        "label": "Verified engineering metrics",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/VERIFIED_ENGINEERING_METRICS.md"
      },
      {
        "label": "Signal-control results",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/signal-control-results.md"
      },
      {
        "label": "Five-city measured results",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/atlas-4-results.md"
      },
      {
        "label": "ATLAS 5 results and limitations",
        "url": "https://github.com/youssef061204/ATLAS/blob/main/docs/atlas-5-results.md"
      },
      {
        "label": "Twin validation",
        "url": "https://atlas-mu-murex.vercel.app/calibration?city=seattle"
      },
      {
        "label": "Robustness comparison",
        "url": "https://atlas-mu-murex.vercel.app/studio?city=seattle&cohort=atlas-5&case=high"
      }
    ],
    "scope": "The same known Lankershim validation cohort improves from 0.6852 to 0.7259 raw point IDF1; these are 1 Hz / 4 m point metrics, not bounding-box benchmark scores. Peachtree held-out point IDF1 is 0.4901. Native trajectory MAE improves 16.71 to 13.64 m, but only 12.7% of reference states are within 4 m, counts regress, and physical acceptance fails. ATLAS 8 root-cause experiments use already exposed development data: an oracle state after Main Street reduces northbound error from 33.58 to 6.56 m on the same 374 states, but bypasses the unverified junction and is not deployable prediction. Extending the approach alone regresses. CityFlow held-out gains are small. Live trials have no accuracy ground truth. Zero accepted physical twins or observed field savings; public playback is historical video with precomputed real processing.",
    "stack": [
      "Python",
      "PyTorch",
      "OpenVINO",
      "OpenCV",
      "YOLO",
      "ByteTrack",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Three.js",
      "scikit-learn",
      "SUMO",
      "SQLite",
      "Docker"
    ],
    "metrics": [
      {
        "value": "0.898",
        "label": "UA-DETRAC mAP@50",
        "detail": "4,260 real annotated frames; merged vehicle class; untouched pretrained baseline"
      },
      {
        "value": "0.793",
        "label": "UA-DETRAC IDF1",
        "detail": "Production ByteTrack; three complete sequences; official TrackEval; 4,260 annotated frames"
      },
      {
        "value": "2.344 mph",
        "label": "METR-LA graph MAE",
        "detail": "Five-minute directional GNN forecast across 207 highway sensors; one seed and historical chronological holdout, separate from city traffic"
      },
      {
        "value": "49,979",
        "label": "consecutive video frames",
        "detail": "13 complete newly processed NGSIM/CityFlow clips; every frame, frozen evaluations and an interactive geographically grounded 3D replay. Separate live stream trials are not counted here."
      }
    ],
    "decisions": [
      {
        "title": "Localize the physical failure with observed video",
        "body": "A 2,670-state lifecycle audit preserves every missing or misplaced reference vehicle. FHWA GIS locates just 10 of 63 initially mapped turns near the modeled Main Street junction; the others cannot be routed there. The controller report timestamps completed cycles but cannot verify 2005 lamp colors. In a same-374-state northbound oracle ablation, starting vehicles after Main Street cuts conditional position MAE from 33.58 to 6.56 m; southbound scores stay identical. Extending the approach from 15.49 to 95.49 m instead worsens overall position error. These are source-linked development diagnostics, not a validated or deployable twin."
      },
      {
        "title": "Improve perception, keep independent denominators",
        "body": "Development-selected multiscale aerial detection improves raw point IDF1 from 0.6852 to 0.7259 and reference coverage from 60.7% to 65.8% on the identical known Lankershim cohort. Matched position/speed errors slightly regress. A separate offline short-gap output reaches 0.7406, with 89 inferred scoring observations explicitly marked and hidden by default. It is never called live detection."
      },
      {
        "title": "Make the 3D twin geographically grounded and inspectable",
        "body": "Actual survey linework, historical georeferenced imagery, curved native lanes, instanced vehicle bodies/wheels/lights, orbit/follow presets and one playback clock connect source video to native simulation. Vehicle inspection exposes missing observations, tracker handoffs and delayed native admission. Building heights and decorative context stay labeled illustrative. Projections outside calibration support withhold physical speed."
      },
      {
        "title": "Diagnose physical errors instead of accepting animation",
        "body": "Nine development-only behavior settings and native insertion scheduling reduce uncapped trajectory MAE from 16.71 to 13.64 m on known regression data. Safety checks remain active and later reference states never force SUMO vehicles. Count MAE changes 2.79 to 2.86; only 12.7% of all reference states are within 4 m. The unchanged physical acceptance gate fails, so no new controller or field-benefit claim is promoted."
      },
      {
        "title": "Freeze models before new camera and city tests",
        "body": "A complete 14,961-frame Peachtree run yields 0.4901 point IDF1 and 61.2% reference coverage on a frozen independent-city interval. Vehicle-specific ReID raises CityFlow development IDF1 to 0.5162, but the separate S03 raw-box test improves only 0.1635 to 0.1649; cross-camera filtering regresses. Every cohort, failed temporal tail and annotation-convention adjustment remains separate."
      },
      {
        "title": "Operate genuine continuous video at no added service cost",
        "body": "A 60-second Caltrans HLS trial decodes 1,500 frames with no stream gaps and visually checked car-ID continuity. A daytime Taiwan MJPEG trial processes 258 changing frames, 142 with vehicle tracks, with five explicit reconnect resets. TLS stays verified; buffers and audit images are deleted. Neither trial has tracking/count ground truth, and the public Vercel site does not pretend to host a persistent CV worker."
      },
      {
        "title": "Make validation a visible product state",
        "body": "Five cities expose observed count series, estimated demand, chronology, coverage and explicit unavailable speed/travel-time/queue truth. Official follow-up resolves 23 Seattle street segments and acquires 240 Whitehall hourly surveys; historical lane mapping remains unverified. Demand reconstruction is not called simulator-state validation. The new Whitehall study fails, and no validated-twin count is invented."
      },
      {
        "title": "Freeze the selector, preserve the failed promotion",
        "body": "An occupancy-based portfolio with hysteresis, dwell time and deterministic phase-safety gating was frozen before 2,100 final paired SUMO runs across five cities, six scenarios and seven controllers. Delay falls 13.95% vs fixed and 7.36% vs max-pressure overall, but is 2.33% worse than cached MPC and regresses 28.75% in one Toronto episode. The worst-case guard fails; production remains unchanged. All 2,550 development/validation/final runs have zero modeled signal-safety violations."
      },
      {
        "title": "Test full processing costs and source-only transfer",
        "body": "Six counterbalanced complete-pipeline runs on one full 1,130-frame sequence measure 18.33 ByteTrack and 15.06 BoT-SORT FPS, including cold startup, inference, analytics and persistence. These do not replace the historical 29.4 FPS workload. Causal forecasting fixes Calgary transfer in the reused historical cohort, while Austin zero-shot worsens; no target labels or target normalization statistics select zero-shot parameters."
      },
      {
        "title": "Retain the ATLAS 4 transfer failures",
        "body": "The retained ATLAS 4 study uses five official count archives, whole-date chronological splits, persistence and calendar baselines, boosting, temporal MLPs and actual geographic messages. Its validation-selected models improve Seattle, Austin and Calgary; Toronto and London regress. Every four-city transfer rotation freezes preprocessing before fifth-city evaluation. Marginal uncertainty coverage is measured; proximity graphs are not surveyed traffic-flow graphs. ATLAS 5 reports its newer historical regression study separately."
      },
      {
        "title": "Faster planning without invented traffic gains",
        "body": "Cached vectorized MPC reproduces 1,000/1,000 original actions while observed planner p95 falls from 2.084 to 0.585 ms, a 71.95% reduction on synthetic decision snapshots. The 1,800-run held-out city study preserves original traffic outcomes and high-demand regressions against max-pressure. Experimental cooperative Q control improves three cities but regresses two, and remains unpromoted. No field savings or universal superiority is inferred."
      },
      {
        "title": "Measured graph learning, separate domains",
        "body": "A 3,617-parameter directional graph neural model learns local, upstream and downstream messages across 207 highway sensors. Five-minute MAE falls from 2.490 to 2.344 mph and fifteen-minute MAE from 3.214 to 2.975 mph under the original chronology and target masks. A matched temporal MLP isolates the graph benefit; epochs are selected on validation. These highway predictions are not relabeled as camera-derived city queues."
      },
      {
        "title": "Recognized benchmarks, untouched baselines",
        "body": "Evaluated pretrained detection with COCOeval and the production tracker with official HOTA/CLEAR/Identity metrics. METR-LA five-minute MAE is 2.490 mph versus persistence 2.813 across all 207 sensors under chronological holdout. Pinned source revisions and per-camera artifacts make the limited test scope explicit."
      },
      {
        "title": "Replace the failed controller, preserve the evidence",
        "body": "The original cyclic controller measured 66.45 s versus fixed 57.45 s and max-pressure 37.99 s; that failure remains published. Validation-selected 30-second MPC now measures 20.53 s across 10 new paired Cologne1 seeds: 65.7% lower delay than fixed and 45.3% lower than unchanged max-pressure, winning all 10 seeds. Untuned Ingolstadt1 transfer failed (40.08 s versus fixed 37.95 and max-pressure 28.16); forecasting's separate ablation benefit was small and uncertain. These are simulated interventions, not field improvements."
      },
      {
        "title": "Public replay without pretending to host inference",
        "body": "The Vercel deployment serves real previously processed trajectories, an attributed annotated video, forecasts, and cached simulation playback. Uploads and configuration changes remain in the local worker architecture. Missing metric calibration gates physical safety screens rather than inventing TTC/PET results."
      }
    ],
    "flow": [
      "Continuous traffic video",
      "Multiscale detection / tracking",
      "Calibrated observed trajectories",
      "Free-running native SUMO",
      "Synchronized 3D / measured errors"
    ],
    "media": {
      "hero": "video-twin-v7.jpg",
      "video": "walkthrough-v8.mp4",
      "gallery": [
        {
          "file": "video-twin-v7.jpg",
          "caption": "Actual Lankershim traffic video and its geographically registered 3D native SUMO reconstruction share playback time. The public experience is precomputed real processing.",
          "alt": "ATLAS actual traffic video beside a geographically grounded 3D reconstruction"
        },
        {
          "file": "vehicle-inspector-v7.jpg",
          "caption": "Selecting an actual vehicle links the video box, 3D camera, source tracker IDs, observation gaps and requested versus sampled native admission times.",
          "alt": "ATLAS selected tracked vehicle with synchronized 3D follow view and correspondence inspector"
        },
        {
          "file": "real-cv-v7.jpg",
          "caption": "The original Guadalajara traffic video remains playable with actual cached CV boxes and IDs. Its source is time-lapse, so physical speeds and field arrival rates are withheld.",
          "alt": "ATLAS original traffic video workspace showing real detection and tracking output"
        },
        {
          "file": "ground-truth-v8.jpg",
          "caption": "The real-video Ground Truth audit isolates a junction failure with a reference-assisted, nondeployable test. Original FHWA footage and survey geometry sit beside the measured errors; physical validation still fails.",
          "alt": "ATLAS Ground Truth diagnosis showing source video, surveyed geometry, and controlled SUMO error measurements"
        },
        {
          "file": "benchmarks-v7.jpg",
          "caption": "Preserved UA-DETRAC and chronological METR-LA benchmarks keep their original data, hardware and simulation scopes; video-domain experiments are separate.",
          "alt": "ATLAS benchmark dashboard showing verified real-world evaluation results"
        }
      ]
    }
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
