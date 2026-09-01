# DESIGN.md — LineClean FBV — SWISS EDITORIAL

Mundo visual: **Editorial Suizo Minimalista** — la web se lee como una revista de diseño arquitectónico de alta gama.

## Dirección

El sitio transmite elegancia y profesionalismo mediante tipografía editorial, rejilla asimétrica y mucho espacio en blanco. Todo elemento visual evoca una publicación de diseño minimalista con enfoque en la calidad del contenido.

- **Concepto**: Editorial suizo minimalista con tipografía serif
- **Paleta**: Gris claro (#f8f8f8), negro editorial (#0a0a0a), dorado sutil (#d4af37), azul profesional (#002b5b)
- **Tipografía**: Playfair Display (display serif elegante), Inter (cuerpo sans-serif limpio)
- **Materiales**: Rejilla asimétrica, espacio en blanco generoso, tipografía como elemento visual principal, líneas finas

## Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `--ink` | `#0a0a0a` | negro editorial / texto |
| `--paper` | `#f8f8f8` | gris claro / fondo |
| `--white` | `#ffffff` | blanco puro / superficies |
| `--yellow` | `#d4af37` | dorado sutil (acentos, CTA) |
| `--blue` | `#002b5b` | azul profesional (acentos) |
| `--border` | `1px solid #0a0a0a` | línea fina editorial |
| `--shadow` | `0 1px 0 #0a0a0a` | sombra plana editorial |

## Estructura

- **Marquee** simple con fondo azul y texto pequeño
- **Header** blanco con línea fina inferior, tipografía serif en logo
- **Hero** con título grande Playfair Display, texto en columna estrecha, foto a la derecha
- **Cards** sin bordes, con línea inferior fina, tipografía serif en títulos
- **Features** con iconos minimalistas y espacio generoso
- **Footer** negro con grid de 4 columnas, tipografía fina

## Reglas

- Tipografía serif (Playfair Display) como elemento distintivo
- Espacio en blanco generoso (padding/margen amplio)
- Líneas finas (1px) en lugar de bordes gruesos
- Sin sombras ni efectos decorativos
- Dorado solo para acentos sutiles
