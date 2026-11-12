# SIGHT project entry

SIGHT reuses the existing project-card and case-study system. Its entry is in `app/lib/projects.ts`; it appears after ATLAS. The `media.layout: "phone"` option preserves actual portrait screenshots in the card and hero, with intrinsic image dimensions in the gallery. No generated product imagery is used.

## Media provenance

The imported images are exact copies of the integrated SIGHT Android 15 emulator captures from runtime source commit `23f5dbcb24c64c010d9a36055dfe0cf6e068d7ce`. Each image is 540 × 1200 pixels:

| Portfolio asset | Original SIGHT artifact |
|---|---|
| `public/projects/sight/assist-route.png` | `docs/media/assist-route.png` |
| `public/projects/sight/destination-choices.png` | `docs/media/destination-choices.png` |
| `public/projects/sight/entrance-text-search.png` | `docs/media/entrance-text-search.png` |
| `public/projects/sight/developer-camera.png` | `docs/media/developer-camera.png` |
| `public/projects/sight/large-text-settings.png` | `docs/media/large-text-settings.png` |

These captures show the actual native application, live Photon search and OSRM foot routing. The walkthrough used typed commands, a fixed public Toronto coordinate injected into emulator GPS (latitude 43.6452, longitude -79.3803), and Android's virtual-scene camera. They do not show human microphone recognition, outdoor walking or glasses hardware. The large-text capture uses font scale 2.0. The gallery distinguishes screenshot-session counters from benchmark exports. When the source interface changes, refresh the assets from another genuine capture and update this provenance before publication.

SHA-256 checksums of the imported assets:

| Asset | SHA-256 |
|---|---|
| `assist-route.png` | `f9d10973663d71cacd8990b447159f7624c0f3ebd86437d2c4236e8d33592d9d` |
| `destination-choices.png` | `adb79269c633f3107ca91d49dda6ec3372645281689d35d5839b5ac687cf4e9b` |
| `entrance-text-search.png` | `420e221e7e1b735ace91618266091974199b421171ab476796708658c0ec9f72` |
| `developer-camera.png` | `bbe25d03007f7b15a1429938c215cf31028d3611d2f56334c07a9c569f4fe977` |
| `large-text-settings.png` | `cf236233a8a0bea35cde0c2cabfd8d37814a28917c5f7b2d752ad0ab4e375029` |

`public/projects/sight/demo.mp4` is an exact copy of `SIGHT/docs/media/sight-demo.mp4`: 2,344,178 bytes, 112.85 seconds, H.264, 1280 × 900, 20 fps, no audio. SHA-256: `4eb12cd7d1a765df03555d4b9f4df201b287b619bbd3516da8d8aff51d639695`. Its screen recording preserves the native phone image aspect ratio inside an explanatory canvas; no generated app screens are used. The visible caption and accessible video label identify it as silent. Exact source recording/render details and capture hashes are copied to `public/projects/sight/demo-provenance.json` and `public/projects/sight/screenshots.json`.

## Evidence and publication scope

The current copy leads with the implemented navigation flow: explicit network consent and spoken destination selection, actual route geometry and GPS progress, rerouting and confirmation-based arrival, retained route context during Find/Read, an optional Valhalla mapped-mobility provider, and an offline Vosk recognition fallback. Optional mapped features do not establish present physical accessibility. Entrance/elevator fallback searches recognized sign text rather than claiming a visual landmark detector. Traffic-class observations remain separate from the disabled automatic road-surface narrator.

The provider sample made six fixed public-landmark searches and three foot-route requests across Toronto, Ottawa and Kingston; all returned results/HTTP 200/provider `Ok`. This is a small availability sample, not a route reliability estimate. The dedicated road corpus has 100 credited photos with frozen selection/calibration/test splits. On the final 40 images, strict-road pixel precision/recall/IoU were .7605/.8091/.6448. The calibrated presence rule produced 17 TP, 1 FP, 3 FN and 19 TN. Its .025 false events per image exceeds the frozen .02 budget, so automatic road narration is OFF and running that model requires explicit diagnostic opt-in. No sidewalk, crosswalk, pedestrian-signal state, stairs or depth capability is inferred from its road/curb/marking labels.

The unchanged object-detector result comes from a separate saved 80-photo held-out COCO subset: Lite2 inspection AP50 .6040, 205 true positives and 11 false positives, operating precision .9491 and recall .3394. It is not a pedestrian segmentation or field object-finding outcome. Earlier fixed-photo emulator timings remain in historical SIGHT reports; the featured metric cards no longer present them as measurements of the new integrated application.

The public source repository is `https://github.com/youssef061204/SIGHT`. The product evidence and media were published at commit `50b83d2cc10e90a320beec712d23ffab4fe87ac1`. Report/validation targets are `docs/product-engineering-report.md` and `evaluation/results/product-validation/summary.json`. The case study deliberately has no web "Live demo" link for the native Android application. Build instructions and a verified [Android preview release](https://github.com/youssef061204/SIGHT/releases/tag/public-preview) are linked instead. Its debug-signed APK is 236,261,986 bytes, with SHA-256 `cf5d8ab8e95fa3e6788d98ac4cbb97b52aaff7b334bc9b631aebcc6ce528c242`; the public asset digest matches the installed/tested APK.

### Integrated-product evidence

The final product-validation manifest reports `passed`: 146 JVM tests (67 core, 59 app, 12 perception and eight Meta), 14 Python checks, 15 native app checks on each of Android 11 and 15, eight official Meta Mock Device Kit checks and two Google offline speech-synthesis checks. Source/artifact freshness and recorded native road, recognition, navigation and camera proofs passed their artifact gates. Android lint reported zero errors and 18 warnings. Synthetic WAV recognition and synthesized PCM are distinct from physical microphone or audible-speaker validation; neither mocks nor the screenshot session establishes real glasses or independent navigation performance.

The genuine silent Android walkthrough and verified APK release are included. Local and public portfolio verification are recorded below; source CI status is tracked in the SIGHT repository rather than inferred from the local app tests.

## Local verification

The final local implementation passed:

- `npm run lint`
- `npm run typecheck`
- `npm run build`, generating `/projects/sight`
- `npm run check:links`: every repository, product documentation and Android preview release link returned HTTP 200. LinkedIn returned its existing HTTP 999 bot block, which the checker reports separately.
- Playwright checks against the local production server at desktop 1440 × 1000 and mobile 390 × 844: six project entries, SIGHT card navigation, case-study title, correct repository target, five decoded portrait gallery images, declared evidence boundary, no console errors and no horizontal overflow.
- The silent walkthrough loaded, decoded as 1280 × 900 / 112.85 seconds, and played at both viewport sizes. Visual review confirmed the fresh route and destination-choice images, responsive actions and portrait gallery.

The project's existing `npm run check:links` covers repository, live and documentation links after publication. The browser check must be repeated after deployment. Evidence is retained in the SIGHT workspace under `.tools/portfolio-verification/local/` and, after public verification, `.tools/portfolio-verification/production/`. A local pass is not a production-deployment verification.

## Existing deployment

The repository is `youssef061204/YoussefElsokkary`; the existing Vercel project is `youssefelsokkary`, with public site `https://youssefelsokkary.vercel.app`. No replacement portfolio or Vercel project is needed. Production publication remains coordinated with the SIGHT source release, followed by public desktop/mobile verification.
