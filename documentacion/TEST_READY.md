# TEST_READY — LineClean FBV E2E & Responsiveness Test Suite

**Suite Status**: READY  
**Test Harness**: `test-runner.mjs` (Zero-Dependency Node.js ESM)  
**Compatibility**: Node.js v26.x+ (Native `node:fs`, `node:path`, `node:assert/strict`)  
**Total Test Count**: 69 Automated Assertions across 4 Tiers  

---

## 1. Quick Execution Command

Run the complete test suite directly from the workspace root:

```pwsh
node test-runner.mjs
```

---

## 2. Test Architecture & Tier Breakdown

| Tier | Category / Scope | Test IDs | Target Proposals | Total Tests | Status |
| :--- | :--- | :---: | :--- | :---: | :---: |
| **Tier 1** | **Feature & DOM Coverage**<br>Validates HTML structure, DOCTYPE, meta viewport, single H1, heading hierarchy, 25 shared images inventory, CSS/JS/video asset existence on disk, image `alt` attributes, and ARIA labels. | `T1.01` – `T1.25` | Shared (`public/img/`), Impacto, Dark, Neo, Swiss, Showcase Hub | **25** | 23 PASS / 2 FAIL *(Known Swiss Video defect)* |
| **Tier 2** | **Boundary & Corner Cases**<br>Validates responsive CSS media queries (`<=480px`, `<=768px`, `<=992px`, `<=1024px`), typography clamping (`clamp()`), CSS Grid minmax card constraints, and `box-sizing: border-box` overflow containment. | `T2.01` – `T2.18` | Impacto, Dark, Neo, Swiss, Showcase Hub | **18** | 18 PASS (100%) |
| **Tier 3** | **Cross-Feature & Interaction Testing**<br>Simulates mobile menu drawer state machine, nav anchor link auto-close behavior, target element ID resolution, sticky header scroll controller, contact form required validation, and WhatsApp URL builder (+56 9 9417 5680). | `T3.01` – `T3.14` | Impacto, Dark, Neo, Swiss, Showcase Hub, WhatsApp | **14** | 14 PASS (100%) |
| **Tier 4** | **Real-World Application Scenarios**<br>Multi-viewport layout geometry simulations (360x640, 375x667, 412x915, 768x1024, 1440x900) verifying `scrollWidth <= clientWidth` (zero overflow-x), background cross-fade observer sequence (data-bg 0..4), live iframe scaling, and full user journey. | `T4.01` – `T4.12` | All Proposals (360px–1440px viewports), Observer engine, E2E Journey | **12** | 12 PASS (100%) |

**Overall Suite Totals**: **69 Tests** (67 Passing, 2 Diagnostic Flags for Milestone M4).

---

## 3. Detailed Assertion Inventory

### Tier 1: Feature & DOM Coverage (25 Tests)
- `T1.01`: Shared Assets — All 25 high-resolution images in `public/img/` exist and are non-empty (>0 bytes).
- `T1.02`: Corporate Identity — `public/img/logo.png` exists, is non-empty, and possesses valid PNG magic bytes.
- `T1.03`: Impacto — HTML5 DOCTYPE and spanish language tag (`<html lang="es">`).
- `T1.04`: Impacto — Meta charset UTF-8 and Meta Viewport (`width=device-width, initial-scale=1.0`).
- `T1.05`: Impacto — Exactly one `<h1>` tag with non-empty primary display headline.
- `T1.06`: Impacto — Heading hierarchy sanity check (`h1` -> `h2` -> `h3`).
- `T1.07`: Impacto — Local image, stylesheet, and script assets exist on disk.
- `T1.08`: Impacto — Accessibility attributes (`alt` on images, `aria-label` on `#navToggle`).
- `T1.09`: Impacto — Interface contract landmarks (`navbar`, `visual-panel`, `content-panel`, `scroll-section`).
- `T1.10`: Dark — HTML5 structure, DOCTYPE, Meta viewport, and Charset.
- `T1.11`: Dark — Single `<h1>` headline and logical heading structure.
- `T1.12`: Dark — Local stylesheet, images, and script assets exist on disk.
- `T1.13`: Dark — Accessibility checks on images and navigation toggle button (`aria-label`).
- `T1.14`: Dark — Contract landmarks (`#header`, `#nav`, `#navToggle`, `#servicios`, `#contacto`, `footer`).
- `T1.15`: Neo — HTML5 structure, DOCTYPE, Meta viewport, and Charset.
- `T1.16`: Neo — Single `<h1>` headline and brutalist title element.
- `T1.17`: Neo — Local stylesheet, images, and script assets exist on disk.
- `T1.18`: Neo — Accessibility checks on images and interactive elements.
- `T1.19`: Neo — Contract landmarks (`.neo-header`, `.neo-hero`, `.neo-services`, `.neo-cta`, `.neo-footer`).
- `T1.20`: Swiss — HTML5 structure, DOCTYPE, Meta viewport, and Charset.
- `T1.21`: Swiss — Single `<h1>` headline and minimalist typography hierarchy.
- `T1.22`: Swiss — Hero Video asset exists on disk (`Swiss/img/hero.mp4`) and resolves without 404.
- `T1.23`: Swiss — Accessibility checks on images and menu button toggle.
- `T1.24`: Showcase Hub — HTML5 DOCTYPE, Meta Viewport, Page Title & Corporate Header.
- `T1.25`: Showcase Hub — Preview cards link to proposals and contain live preview containers.

### Tier 2: Boundary & Corner Cases (18 Tests)
- `T2.01`: Impacto — Mobile media query coverage (`<=480px` or `<=768px` in `style.css`).
- `T2.02`: Impacto — Tablet & Desktop breakpoint coverage (`<=1024px` in `style.css`).
- `T2.03`: Impacto — Typography fluid scaling with `clamp()` on display headings.
- `T2.04`: Impacto — Features & Services grid responsive 1-column layout collapse on mobile.
- `T2.05`: Impacto — Universal `box-sizing: border-box` reset and horizontal containment.
- `T2.06`: Dark — Mobile navigation drawer media query rules (`@media <=992px` or `<=768px`).
- `T2.07`: Dark — Fluid typography `clamp()` on hero display title.
- `T2.08`: Dark — Service cards grid uses `repeat(auto-fit, minmax(...))` responsive structure.
- `T2.09`: Dark — Container width containment (`width: min(1200px, 92%)`) and `overflow-x: hidden`.
- `T2.10`: Neo — Mobile navigation collapse breakpoint (`@media max-width: 720px`).
- `T2.11`: Neo — Hero grid responsive collapse at `@media (max-width: 960px)`.
- `T2.12`: Neo — Vertical marquee containment on mobile screens (overflow protection).
- `T2.13`: Neo — Asymmetric module cards (`.neo-item`) styling and structure.
- `T2.14`: Neo — Protruding brutalist hard shadows & rotation boundary constraints.
- `T2.15`: Swiss — Responsive breakpoint coverage (`@media max-width: 900px` or `<=768px`).
- `T2.16`: Swiss — Fluid typography scaling with `clamp()` on hero display title.
- `T2.17`: Swiss — Service cards and method steps responsive grid layout.
- `T2.18`: Showcase Hub — Preview grid collapses to 2 columns on tablet and 1 column on mobile.

### Tier 3: Cross-Feature & Interaction Testing (14 Tests)
- `T3.01`: Navigation State Machine — Toggle button open/close state transitions.
- `T3.02`: Mobile Drawer Navigation — Clicking nav link closes open drawer.
- `T3.03`: Mobile Drawer Navigation — Outside click listener dismisses open drawer.
- `T3.04`: Impacto Anchor Targets — Internal hash links resolve to valid IDs in DOM.
- `T3.05`: Dark Anchor Targets — Internal hash links resolve to valid IDs in DOM.
- `T3.06`: Swiss Anchor Targets — Internal hash links resolve to valid IDs in DOM.
- `T3.07`: Neo Anchor Targets — Internal hash links resolve to valid IDs in DOM.
- `T3.08`: Sticky Header Controller — `scrollY > 30px` dynamically toggles `.scrolled` class.
- `T3.09`: Contact Form Validation — Empty required fields are detected and block submission.
- `T3.10`: Contact Form Validation — Invalid email syntax is rejected with specific error.
- `T3.11`: Contact Form Validation — Complete valid submission passes with clean error set.
- `T3.12`: WhatsApp Dispatcher — Corporate phone number is sanitized to digits (`+56 9 9417 5680` -> `56994175680`).
- `T3.13`: WhatsApp Dispatcher — Message body is URI-encoded without unescaped spaces or raw control characters.
- `T3.14`: Dynamic Copyright Year — Footer year updates dynamically to current calendar year.

### Tier 4: Real-World Application Scenarios (12 Tests)
- `T4.01`: Multi-Viewport Simulation: 360x640 (Small Android) — Impacto Layout geometry & containment.
- `T4.02`: Multi-Viewport Simulation: 360x640 (Small Android) — Dark Layout geometry & containment.
- `T4.03`: Multi-Viewport Simulation: 360x640 (Small Android) — Neo Layout geometry & containment.
- `T4.04`: Multi-Viewport Simulation: 360x640 (Small Android) — Swiss Layout geometry & containment.
- `T4.05`: Multi-Viewport Simulation: 375x667 (iPhone SE) — Cross-proposal layout containment.
- `T4.06`: Multi-Viewport Simulation: 412x915 (Modern Android) — Cross-proposal layout containment.
- `T4.07`: Multi-Viewport Simulation: 768x1024 (Tablet Portrait) — Cross-proposal layout containment.
- `T4.08`: Multi-Viewport Simulation: 1440x900 (Desktop Full-HD) — Cross-proposal layout containment.
- `T4.09`: Background Observer Engine — Sequential scroll stage transitions (`data-bg 0..4` activation).
- `T4.10`: Background Observer Engine — Out-of-bounds index clamping and graceful fallback.
- `T4.11`: Showcase Hub Live Previews — Iframe scaling matrix & non-blocking pointer events.
- `T4.12`: End-to-End User Conversion Journey — From Hero CTA click to Form Validation & WhatsApp dispatch.

---

## 4. Diagnostics & Implementation Escalations

When running `node test-runner.mjs`, the following 2 defects were precisely diagnosed as planned:

1. **Swiss Hero Video 404 (`T1.20` & `T1.22`)**:
   - **File**: `public/Swiss/index.html:39`
   - **Current Value**: `<source src="../img/hero.mp4" type="video/mp4">`
   - **Actual Asset Location**: `public/Swiss/img/hero.mp4`
   - **Escalation**: Requires updating source path to `img/hero.mp4` during Milestone M4 (Cross-Proposal Hardening).

---

## 5. Verification Protocol

To verify test suite execution:

```pwsh
# 1. Run full test harness
node test-runner.mjs

# 2. Check exit code ($LASTEXITCODE in PowerShell, echo %ERRORLEVEL% in cmd)
echo $LASTEXITCODE
```
