# Project: LineClean FBV Landing Page & Multi-Proposal Responsiveness

## Architecture
- **Static Frontend Architecture**: Pure semantic HTML5, modern CSS3 (Custom properties, CSS Grid, Flexbox, Fluid Typography with `clamp()`), and Vanilla JavaScript (ES6+, IntersectionObserver, DOM manipulation, Form validation, URL formatting).
- **Core Presentation Proposals**:
  1. `public/Impacto/`: Primary landing page featuring a split visual panel with dynamic scroll cross-fades (`.visual-panel__bg`) and high-impact industrial branding (`Bebas Neue` + `Inter`).
  2. `public/Dark/`: Cyberpunk / modern industrial rope access theme with high-contrast orange accents.
  3. `public/Neo/`: Neo-brutalist aesthetic with bold borders, hard shadows, offset cards, and vivid yellow accents.
  4. `public/Swiss/`: Minimalist apex facade theme with video hero, structured grid methodology, and clean typography.
  5. `public/index.html`: Central showcase hub with interactive iframe previews for all 4 design proposals.
- **Shared Assets**: `public/img/` (25 high-resolution images + corporate logo) and `public/Swiss/img/hero.mp4`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F01 | Sticky Header & Logo (R1) | Fixed sticky navbar with corporate logo `../img/logo.png`, brand title, smooth scroll anchors (`#hero`, `#servicios`, `#testimonios`, `#contacto`), WhatsApp link, and mobile drawer. | M1 | survey |
| F02 | Mobile Nav Drawer (R1) | Responsive hamburger toggle and collapsible navigation drawer for viewports <= 768px with auto-close on link tap. | M1 | survey |
| F03 | High-Impact Hero Section (R2) | Hero section with display typography, value proposition badges, and prominent CTA button linked to `#contacto`. | M1 | survey |
| F04 | Technical Services Catalog (R3) | Interactive grid with 6 core capabilities (Líneas de Vida, Redes y Mallas, Acceso por Cuerdas, Diagnóstico NDT, Limpieza Técnica, Control de Plagas) with icons and hover effects. | M2 | survey |
| F05 | Testimonials & Cases Gallery (R4) | Showcase gallery/carousel of industrial projects (Mining, Energy, Construction) utilizing `public/img/galeria-*.jpg` & `proyecto-*.jpeg`. | M2 | survey |
| F06 | Multi-Section Background Transitions (R8) | Fixed visual panel on the right with smooth `IntersectionObserver` fade transitions across 5 distinct background images on vertical scroll. | M2 | survey |
| F07 | Conversion CTA Banner (R5) | High-contrast pre-contact banner with free quote offer in Región Metropolitana and instant WhatsApp trigger. | M3 | survey |
| F08 | Validated Contact Form (R6) | Interactive form with required fields (Nombre, Email, Teléfono, Servicio, Mensaje), error validation, and structured WhatsApp dispatch. | M3 | survey |
| F09 | Corporate Footer (R7) | Comprehensive footer with logo, contact channels (+56 9 9417 5680, linecleanchile@gmail.com, contacto@linecleanfbv.cl), quick links, legal/copyright 2026, and normative bodies. | M3 | survey |
| F10 | Cross-Proposal Responsiveness (Follow-up) | Fix mobile menu toggle, grid collapses, vertical marquee overflow, and video paths across Dark, Neo, Swiss, and Showcase Hub. | M4 | survey |
| F11 | E2E Automated Test Suite | 4-Tier test harness (HTML/DOM integrity, CSS responsiveness, Interactive navigation/forms, Layout/scroll overflow). | M5 | survey |
| F12 | Adversarial Hardening & Forensic Audit | White-box stress testing, extreme viewport edge cases (320px–2560px), and anti-cheating forensic verification. | M6 | survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Impacto Header, Navigation & Hero | Implement R1 & R2 in `public/Impacto/`: Sticky navbar, logo `../img/logo.png`, anchor links, mobile hamburger drawer, hero typography & CTA button. | none | DONE |
| M2 | Impacto Services, Gallery & Bg Transitions | Implement R3, R4 & R8 in `public/Impacto/`: 6-service technical grid, testimonials/project gallery with real images, and 5-stage background cross-fade. | M1 | DONE |
| M3 | Impacto CTA Banner, Form & Footer | Implement R5, R6 & R7 in `public/Impacto/`: High-contrast conversion banner, validated contact form with WhatsApp dispatch, and corporate footer. | M2 | DONE |
| M4 | Cross-Proposal Responsiveness Hardening | Fix Neo mobile menu & hero grid, Swiss video path & menu close, Dark link auto-close & card wrapping, and update Showcase Hub. | M3 | DONE |
| M5 | E2E Test Suite Execution & Verification | Run zero-dependency Node.js automated test runner across all 4 tiers (100% pass on all criteria). | M1, M2, M3, M4 | DONE |
| M6 | Adversarial Hardening & Forensic Integrity Audit | Tier 5 white-box stress testing with Challengers, Reviewers, and Forensic Auditor verification. | M5 | DONE |

## Interface Contracts
### Impacto DOM & CSS Contracts
- Header: `<header class="navbar">` with `<img src="../img/logo.png" class="navbar__logo">`, `<nav class="navbar__nav">`, `<button class="nav-toggle" id="navToggle">`.
- Visual Panel: `<div class="visual-panel">` containing `<img class="visual-panel__bg" src="../img/...">` elements with active class `.active`.
- Content Panel: `<div class="content-panel">` containing sections `#hero`, `#servicios`, `#testimonios`, `#cta-banner`, `#contacto`, and `footer.footer`.
- Scroll sections: Each `<section class="scroll-section" data-bg="0..4">`.
- Contact Form: `<form id="contactForm">` with fields `nombre`, `email`, `telefono`, `servicio`, `mensaje` triggering WhatsApp `https://api.whatsapp.com/send?phone=56994175680&text=...`.

### Peer Proposals Contracts
- `public/Neo/`: `<button class="nav-toggle" id="navToggle">` in `.header__inner`, `.neo-hero__inner` 1-column collapse at `@media (max-width: 960px)`, marquee hidden on mobile.
- `public/Swiss/`: `<source src="img/hero.mp4" type="video/mp4">`, mobile menu auto-close on `.nav__link` click.
- `public/Dark/`: mobile drawer auto-close on `.nav__link` click, responsive minmax on service cards.
- `public/index.html`: 4 preview cards (Impacto, Dark, Neo, Swiss).

## Code Layout
- `public/Impacto/index.html`: Semantic HTML5 landing page
- `public/Impacto/css/style.css`: Impacto stylesheet with fluid typography, split layout, responsive grid
- `public/Impacto/js/main.js`: Main JavaScript module (IntersectionObserver, Mobile menu, Form validation)
- `public/Dark/index.html`, `public/Dark/css/style.css`, `public/Dark/js/main.js`
- `public/Neo/index.html`, `public/Neo/css/style.css`, `public/Neo/js/main.js`
- `public/Swiss/index.html`, `public/Swiss/css/style.css`, `public/Swiss/js/main.js`
- `public/index.html`: Showcase hub
- `test-runner.mjs`: E2E Automated Test Suite runner
