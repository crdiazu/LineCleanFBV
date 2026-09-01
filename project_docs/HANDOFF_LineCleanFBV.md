# LineClean FBV — Handoff de Proyecto (Exportar a otra IA)

> **Fecha de exportación:** 08 de Agosto de 2026
> **Propósito:** Este documento resume TODO el estado del proyecto de los 4 diseños web de LineClean FBV, para que otra IA pueda continuar el trabajo sin perder contexto.

---

## 1. CONTEXTO DEL PROYECTO

**Cliente:** LineClean FBV — empresa chilena de trabajos en altura (líneas de vida, redes y mallas, control de plagas, diagnóstico de estructuras, instalación y mantenimiento).

**Objetivo actual:** Crear **4 diseños web radicalmente diferentes entre sí** para mostrar al cliente y que elija uno. La diferencia debe ser en **estructura HTML** (arquitectura), no solo en estilo CSS.

**Ubicación raíz del proyecto:**
```
C:\Users\Cristian\Obsidian\Cristian\CDU\PROYECTOS\LineCleanFBV\
```

**Carpeta de los 4 diseños:**
```
C:\Users\Cristian\Obsidian\Cristian\CDU\PROYECTOS\LineCleanFBV\LineCleanFBV-Previews\
```

---

## 2. LOS 4 DISEÑOS — RESUMEN

| # | Carpeta | Nombre | Concepto | Paleta | Tipografía |
|---|---------|--------|----------|--------|------------|
| 1 | `Industrial/` | Rotulación Industrial | Señalética de obra certificada | Hormigón `#e0e0e0`, acero `#0a0a0a`, amarillo seguridad `#ffc400`, azul OSHA `#002b5b` | Big Shoulders Display + Archivo + Fragment Mono |
| 2 | `Dark/` | Dark Cyberpunk | Panel de control de megaciudad | Negro `#050505`, neón cian `#00f0ff`, neón dorado `#ffd700` | Orbitron + Inter + Fira Code |
| 3 | `Neo/` | Neo Brutalism | Neo-brutalismo geométrico | Blanco `#ffffff`, negro `#1a1a1a`, rojo coral `#ff5e5b`, cian `#00d2ff` | Archivo Black + Archivo |
| 4 | `Swiss/` | Swiss Editorial | Editorial suizo minimalista | Gris claro `#f8f8f8`, negro `#0a0a0a`, dorado `#d4af37`, azul `#002b5b` | Playfair Display + Inter |

Cada carpeta contiene: `index.html`, `servicios.html`, `empresa.html`, `proyectos.html`, `contacto.html`, `css/style.css`, `js/main.js`, `img/`, `DESIGN.md`.

---

## 3. ESTADO ACTUAL (QUÉ ESTÁ HECHO)

### ✅ HECHO — CSS de los 4 diseños reescritos
Los `css/style.css` de los 4 diseños ya fueron reescritos con estilos radicalmente diferentes:
- **Industrial:** franjas hazard diagonales, bordes 3px, sombras duras 0-blur, placas esténcil
- **Dark:** efectos glow neón, glassmorphism, bordes finos luminosos
- **Neo:** bordes 4px, sombras duras 8px, esquinas cortadas, formas geométricas
- **Swiss:** líneas finas 1px, espacio en blanco generoso, tipografía serif protagonista

### ✅ HECHO DESIGN.md de los 4 diseños
Cada carpeta tiene su `DESIGN.md` con: dirección, paleta, tokens CSS, estructura y reglas de diseño.

### ✅ HECHO — Portal de presentación para el cliente
Creado `LineCleanFBV-Previews/index.html` — página con tarjetas de los 4 diseños, botones "Ver Diseño" y "Ver Especificaciones". Es la página de entrada para mostrar al cliente.

### ✅ HECHO — Industrial HTML reestructurado (arquitectura nueva)
`Industrial/index.html` fue reescrito con una arquitectura de **PANEL DE CONTROL DE SEGURIDAD INDUSTRIAL**:
- `dashboard` (main) en lugar de hero tradicional
- `indicators` — tablero de indicadores en tiempo real (incidentes, equipos, cumplimiento, monitoreo)
- `procedures` — protocolos certificados con pasos numerados (PROC-001, PROC-002, PROC-003)
- `report` — formulario de reporte de condiciones/emergencia
- Footer con estado de sistema y normativa

### ✅ HECHO — Industrial reparado con fotos reales
- Corregidas rutas rotas: `assets/img/` → `img/` y `assets/js/` → `js/` (el logo y el JS ahora cargan)
- Añadidas las fotos reales de la carpeta `img/`:
  - `hero.jpg` en la cabecera del panel (foto principal con tag "CERTIFICADO · PREVENCIÓN DE RIESGOS")
  - `servicio-lineas-vida.png` → PROC-001
  - `servicio-redes-mallas.png` → PROC-002
  - `servicio-diagnostico.jpg` → PROC-003
  - `inspeccion.png` → sección de reporte
- Añadidos los estilos CSS del panel (dashboard, indicators, procedures, report) al `css/style.css`
- Verificado en navegador: todas las imágenes cargan, CSS aplica, JS funciona (año 2026, menú móvil)

### ✅ HECHO — Servidor local
Servidor HTTP corriendo en `http://localhost:8080` (desde `LineCleanFBV-Previews/`).

---

## 4. PENDIENTE (QUÉ FALTA)

### ❌ NO HECHO — Reestructurar HTML de Dark, Neo y Swiss
Los `index.html` de **Dark**, **Neo** y **Swiss** TODAVÍA tienen la estructura original idéntica:
```
marquee → header → hero → servicios (cards) → proceso (features) → CTA → footer → whatsapp-float
```

**El objetivo es que cada uno tenga una arquitectura HTML radicalmente diferente**, por ejemplo:

| Diseño | Arquitectura propuesta |
|--------|----------------------|
| **Industrial** | ✅ YA HECHO: Panel de control de seguridad (dashboard + indicadores + procedimientos + reporte) |
| **Dark** | Terminal cyberpunk / sistema de monitoreo (consola de comandos, monitores de seguridad, alertas) |
| **Neo** | Brutalismo asimétrico (grids desplazados, secciones superpuestas, marquee vertical, números gigantes) |
| **Swiss** | Editorial/tipográfico (portada de revista, índice de contenidos, artículos, grid editorial) |

### ❌ NO HECHO — Actualizar CSS de los HTML reestructurados
Cuando se reestructuren los HTML, el CSS debe actualizarse para que coincida con las nuevas clases y arquitectura.

### ❌ NO HECHO — Verificar visualmente los 4 diseños
El modelo actual no soporta entrada de imágenes, así que la verificación visual debe hacerla el usuario en el navegador.

---

## 5. INSTRUCCIONES PARA LA OTRA IA

1. **Leer este documento completo** antes de tocar nada.
2. **Leer los DESIGN.md** de cada diseño para respetar su mundo visual.
3. **Reestructurar `Dark/index.html`** como sistema de monitoreo cyberpunk (consola, monitores, alertas).
4. **Reestructurar `Neo/index.html`** como layout neo-brutalista asimétrico.
5. **Reestructurar `Swiss/index.html`** como página editorial suiza.
6. **Actualizar el CSS** de cada uno para que coincida con la nueva estructura HTML.
7. **NO cambiar** el contenido de negocio (servicios, teléfono +56 9 9417 5680, WhatsApp, email linecleanchile@gmail.com).
8. **NO romper** los enlaces a las otras páginas (`servicios.html`, `empresa.html`, `proyectos.html`, `contacto.html`).
9. **Mantener** el botón flotante de WhatsApp y el script `assets/js/main.js`.
10. **Verificar en el navegador** en `http://localhost:8080` (o levantar el servidor con `python -m http.server 8080` desde `LineCleanFBV-Previews/`).

---

## 6. DATOS DE CONTACTO DEL CLIENTE (NO CAMBIAR)

- **Teléfono:** +56 9 9417 5680
- **Email:** linecleanchile@gmail.com
- **WhatsApp:** `https://api.whatsapp.com/send?phone=56994175680&text=Bienvenido%20a%20LineClean%2C%20%C2%BFEn%20qu%C3%A9%20te%20podemos%20ayudar`
- **Presupuesto:** gratuito dentro de la Región Metropolitana
- **Sitios de interés:** actachile.cl, ist.cl, sence.cl, isl.gob.cl

---

## 7. ESTRUCTURA DE ARCHIVOS RELEVANTE

```
LineCleanFBV/
├── LineCleanFBV-Previews/
│   ├── index.html                  ← PORTAL para el cliente (4 tarjetas)
│   ├── Industrial/
│   │   ├── index.html              ← ✅ REESTRUCTURADO (panel de control)
│   │   ├── css/style.css           ← ✅ CSS reescrito
│   │   └── DESIGN.md               ← ✅ Documento de diseño
│   ├── Dark/
│   │   ├── index.html              ← ❌ estructura original (falta reestructurar)
│   │   ├── css/style.css           ← ✅ CSS reescrito
│   │   └── DESIGN.md               ← ✅ Documento de diseño
│   ├── Neo/
│   │   ├── index.html              ← ❌ estructura original (falta reestructurar)
│   │   ├── css/style.css           ← ✅ CSS reescrito
│   │   └── DESIGN.md               ← ✅ Documento de diseño
│   └── Swiss/
│       ├── index.html              ← ❌ estructura original (falta reestructurar)
│       ├── css/style.css           ← ✅ CSS reescrito
│       └── DESIGN.md               ← ✅ Documento de diseño
```

---

## 8. NOTAS IMPORTANTES

- El modelo de IA actual (`opencode/big-pickle`) **no soporta entrada de imágenes**, por lo que la verificación visual debe hacerla el humano.
- El servidor local se levanta con: `python -m http.server 8080` dentro de `LineCleanFBV-Previews/`.
- El portal del cliente está en `http://localhost:8080/` y muestra los 4 diseños.
- Los 4 diseños comparten las mismas imágenes (`img/`) y el mismo `js/main.js` (menú móvil, año dinámico).
- El objetivo final es que el cliente vea 4 propuestas **radicalmente diferentes** y elija una.