# DESIGN.md — LineClean FBV — DARK CYBERPUNK

Mundo visual: **Cyberpunk Dark Tech** — la web se lee como un panel de control de alta seguridad en una megaciudad.

## Dirección

El sitio transmite tecnología avanzada y seguridad mediante efectos de neón, fondos oscuros y una estética de "interfaz de control". Todo elemento visual evoca un sistema de monitoreo industrial de alta tecnología.

- **Concepto**: Panel de control cyberpunk de seguridad vertical
- **Paleta**: Negro profundo (#050505), neón cian (#00f0ff), neón dorado (#ffd700), gris oscuro (#0a0a0a)
- **Tipografía**: Orbitron (display, estilo tecnológico), Inter (cuerpo), Fira Code (rótulos)
- **Materiales**: Efectos de glow neón, bordes finos luminosos, sombras difuminadas, transparencias

## Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `--ink` | `#050505` | negro profundo / fondo base |
| `--paper` | `#0a0a0a` | gris oscuro / superficies |
| `--white` | `#ffffff` | texto / superficies claras |
| `--yellow` | `#ffd700` | neón dorado (CTA, acentos) |
| `--blue` | `#00f0ff` | neón cian (acentos, enlaces) |
| `--border` | `2px solid #00f0ff` | borde neón cian |
| `--shadow` | `0 0 12px #00f0ff, 4px 4px 0 #050505` | sombra con glow |
| `--glow` | `0 0 15px #00f0ff, 0 0 30px #00f0ff` | efecto neón intenso |

## Estructura

- **Marquee** con efecto de texto parpadeante y glow
- **Header** semi-transparente con efecto glassmorphism
- **Hero** con video/gif de fondo oscuro, texto con glow neón
- **Cards** con efecto hover de glow y transparencia
- **Features** con iconos neón y efectos de brillo
- **Footer** negro con grid de 4 columnas y glow sutil

## Reglas

- Todo acento usa neón cian o dorado
- Hover: efecto de glow + brillo
- Sombras con difuminado para efecto de luz
- Glassmorphism en header y cards
