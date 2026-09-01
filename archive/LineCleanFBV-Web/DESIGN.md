# DESIGN.md — LineClean FBV

Mundo visual: **Rotulación Industrial** (brutalismo industrial profesional 2026).
Este documento es la fuente de verdad de las decisiones de diseño durables. El detector `impeccable` lo lee como contexto de diseño.

## Dirección

El sitio se lee como un **edificio certificado**: la señalética de seguridad industrial (rotulación) es el sistema completo, no un texto corporativo. Rechaza el hero azul con tarjetas redondeadas.

- Candidato: **5** de la lista fundamentada (`concept-seed`).
- Seed key: `310b777a`.
- Fusión ganadora de challenger `streetwear` en 2 ejes: identificación de audiencia + claridad de producto.

## Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `--ink` | `#0b0b0b` | tinta / bordes / sombras |
| `--paper` | `#f4f4f0` | fondo base |
| `--white` | `#ffffff` | superficies / placas |
| `--yellow` | `#ffc400` | amarillo seguridad (CTA, hazard) |
| `--yellow-dark` | `#d9a800` | hover amarillo |
| `--blue` | `#002b5b` | azul corporativo (acentos, page-hero) |
| `--blue-dark` | `#001a38` | secciones oscuras |
| `--hazard` | `repeating-linear-gradient(45deg, #0b0b0b 0 14px, #ffc400 14px 28px)` | franjas hazard |
| `--hazard-thin` | `... 0 8px, #ffc400 8px 16px` | hazard fino (tachado) |
| `--border` | `3px solid #0b0b0b` | borde grueso |
| `--border-thin` | `2px solid #0b0b0b` | borde fino |
| `--shadow` | `6px 6px 0 #0b0b0b` | sombra dura 0-blur |
| `--shadow-sm` | `4px 4px 0 #0b0b0b` | sombra dura pequeña |

## Tipografía

| Rol | Fuente | Uso |
|-----|--------|-----|
| Display | **Big Shoulders Display** (700–900) | títulos, nav, botones, rótulos |
| Cuerpo | **Archivo** (400–700) | párrafos, formularios |
| Mono | **Fragment Mono** | etiquetas, placas, leyendas, marquee |

## Materiales / gramática visual

- **Franjas hazard** diagonales 45° (marquee superior, tachado del título, esquina del hero).
- **Etiquetas zip-tie / placas** con comillas rectas `"…"` (`.label`).
- **Sombra dura 0-blur** (offset 6px/4px) — sin difuminado.
- **Bordes 3px** negros en tarjetas, marcos, botones, formularios.
- **Hover**: desplazamiento duro `translate(4px,4px)` + sombra a 0 (efecto "presionado").
- **Marquee** hazard a sangre en todas las páginas.
- **Page-hero** azul `#002B5B` con breadcrumb y título display.
- **Checklist** con marcadores cuadrados amarillos y sombra dura.
- **Lightbox** de galería con fondo azul oscuro.

## Estructura de página

Todas las páginas comparten: `marquee` hazard → `header` sticky papel → contenido → `cta` amarillo → `footer` tinta. La home añade `hero` con grid 2 col (texto + foto en marco con tag colgante).

## Reglas de uso

- El amarillo `#ffc400` es **solo** para acción primaria (CTA, WhatsApp) y acentos de seguridad — no para fondos de sección de contenido.
- El azul `#002B5B` es para page-hero y acentos de título.
- Nunca usar sombras difuminadas ni bordes redondeados (excepto el ojal del tag del hero).
- El marquee hazard es obligatorio en todas las páginas.

## Estado

- **Build**: 5 páginas HTML reconstruidas + `style.css` reescrito + `main.js` compatible.
- **Detector**: `impeccable detect --json .` → `[]` (limpio).
- **Verificación**: render DOM OK en las 5 páginas; assets OK (23 refs únicas); año 2026.
- **Pendiente**: optimizar `hero.jpg` (2.5 MB); confirmar email oficial; plan de despliegue; decidir migración de blog (20 posts).