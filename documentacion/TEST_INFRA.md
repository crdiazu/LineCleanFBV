# E2E Test Infra: LineClean FBV

## Test Philosophy
- Opaque-box, requirement-driven. Derives from `ORIGINAL_REQUEST.md` and user-facing specs.
- Methodology: Category-Partition + Boundary Value Analysis + Pairwise + Workload Testing across Tiers 1-4.
- Test runner: Zero-dependency Node.js ESM test suite (`test-runner.mjs`) compatible with local Node.js v26.

## Feature Inventory & Test Coverage Goals
| # | Feature | Source | Tier 1 (Static DOM/Assets) | Tier 2 (CSS Responsiveness) | Tier 3 (Interactions/Logic) | Tier 4 (Viewport Layouts) |
|---|---------|--------|:--------------------------:|:---------------------------:|:---------------------------:|:-------------------------:|
| 1 | R1: Sticky Header, Logo & Menu | ORIGINAL_REQUEST §R1 | 5 | 5 | 5 | 4 |
| 2 | R2: Hero Section & Action CTA | ORIGINAL_REQUEST §R2 | 5 | 5 | 5 | 4 |
| 3 | R3: Services Grid & Icons | ORIGINAL_REQUEST §R3 | 5 | 5 | 5 | 4 |
| 4 | R4: Testimonials & Cases Gallery | ORIGINAL_REQUEST §R4 | 5 | 5 | 5 | 4 |
| 5 | R5: Pre-Contact CTA Banner | ORIGINAL_REQUEST §R5 | 5 | 5 | 5 | 4 |
| 6 | R6: Validated Contact Form | ORIGINAL_REQUEST §R6 | 5 | 5 | 5 | 4 |
| 7 | R7: Corporate Footer & Legal | ORIGINAL_REQUEST §R7 | 5 | 5 | 5 | 4 |
| 8 | R8: Visual Background Transitions | ORIGINAL_REQUEST §R8 | 5 | 5 | 5 | 4 |
| 9 | Cross-Proposal: Dark Responsiveness | ORIGINAL_REQUEST Follow-up | 5 | 5 | 5 | 4 |
| 10 | Cross-Proposal: Neo Responsiveness | ORIGINAL_REQUEST Follow-up | 5 | 5 | 5 | 4 |
| 11 | Cross-Proposal: Swiss Responsiveness | ORIGINAL_REQUEST Follow-up | 5 | 5 | 5 | 4 |
| 12 | Showcase Hub Preview Integrity | ORIGINAL_REQUEST Follow-up | 5 | 5 | 5 | 4 |

## Test Architecture
- **Tier 1 (Feature & DOM Coverage)**: HTML structure, valid DOCTYPE, meta viewport, single H1, heading hierarchy, asset existence for all 25 images and scripts, alt attributes, ARIA labels.
- **Tier 2 (Boundary & Corner Cases)**: CSS media queries at <=480px, <=768px, 992px, 1024px; typography clamping (`clamp()`); card minmax constraints; overflow-x containment.
- **Tier 3 (Cross-Feature & Interaction Testing)**: Mobile menu open/close simulation; nav anchor link jump & auto-close; form required field validation; WhatsApp URL generator encoding and parameter verification.
- **Tier 4 (Real-World Application Scenarios)**: Multi-viewport simulation (360x640, 375x667, 412x915, 768x1024, 1440x900) verifying `scrollWidth <= clientWidth`, zero clipping, and smooth background cross-fade observer setup.

## Minimum Coverage Thresholds
- Total tests: >= 60 automated test assertions across Tiers 1-4.
- Success criteria: 100% passing tests with exit code 0.
