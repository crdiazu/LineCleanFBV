# DESIGN.md — LineClean FBV — NEO BRUTALISM

Mundo visual: **Neo-Brutalismo Geométrico** — la web se lee como una obra de arte constructivista con colores vibrantes y formas geométricas.

## Dirección

El sitio transmite energía y modernidad mediante geometría audaz, colores saturados y tipografía impactante. Todo elemento visual evoca un mural de arte urbano con estructura matemática.

- **Concepto**: Neo-brutalismo geométrico con energía visual
- **Paleta**: Blanco puro (#ffffff), negro profundo (#1a1a1a), rojo coral (#ff5e5b), cian brillante (#00d2ff)
- **Tipografía**: Archivo Black (display, pesada y contundente), Archivo (cuerpo)
- **Materiales**: Bordes de 4px, sombras duras 8px, formas geométricas, ángulos cortados

## Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `--ink` | `#1a1a1a` | negro profundo / bordes / sombras |
| `--paper` | `#ffffff` | fondo base / superficies |
| `--white` | `#ffffff` | blanco puro |
| `--yellow` | `#ff5e5b` | rojo coral (CTA, acentos) |
| `--blue` | `#00d2ff` | cian brillante (acentos) |
| `--border` | `4px solid #1a1a1a` | borde grueso geométrico |
| `--shadow` | `8px 8px 0 #1a1a1a` | sombra dura grande |
| `--shadow-sm` | `6px 6px 0 #1a1a1a` | sombra dura mediana |

## Estructura

- **Marquee** con fondo cian y texto negro
- **Header** blanco con bordes gruesos y esquina cortada
- **Hero** con título gigante Archivo Black, strike diagonal, foto en marco con esquina cortada
- **Cards** con bordes de 4px, esquinas cortadas, sombra dura 8px
- **Features** con iconos grandes y fondo degradado
- **Footer** negro con grid de 4 columnas

## Reglas

- Bordes siempre de 4px (más gruesos que los otros diseños)
- Sombras duras de 8px (más grandes)
- Hover: translate(4px, 4px) + sombra a 0
- Formas geométricas: esquinas cortadas, triángulos decorativos
