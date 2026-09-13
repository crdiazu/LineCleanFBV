# Original User Request

## Initial Request — 2026-09-01T23:59:43Z

Reestructuración y desarrollo completo de la landing page "Impacto" para LineClean FBV (empresa de ingeniería en altura, acceso por cuerdas y seguridad industrial), dotándola de una estructura completa y profesional adaptada a dispositivos móviles y escritorio.

Working directory: c:/Users/Cristian/Obsidian/Cristian/CDU/PROYECTOS/LineCleanFBV

## Requirements

### R1. Navegación e Identidad de Marca (Header Sticky & Logo)
Incorporar un menú superior fijo (sticky) con el logo corporativo (`../img/logo.png`) y el nombre "Line Clean FBV", con enlaces ancla que se deslicen suavemente a cada sección (#hero, #servicios, #testimonios, #contacto) y botón de acceso rápido / WhatsApp. Menú adaptable (hamburguesa) en móviles.

### R2. Hero Section de Alto Impacto y Botón de Acción
Sección principal destacada que transmita ingeniería y seguridad en altura, con llamada a la acción clara mediante un botón principal anclado al formulario de contacto o cotización.

### R3. Catálogo de Servicios y Diferenciadores
Grilla interactiva con los servicios y capacidades clave (Trabajos en Altura, Acceso por Cuerdas, Personal Certificado y Confianza Industrial) utilizando iconografía técnica y tarjetas con efectos visuales.

### R4. Sección de Testimonios y Casos de Éxito
Galería/carrusel de testimonios y proyectos utilizando los recursos visuales disponibles en `public/img/` (`galeria-*.jpg`), destacando la experiencia en sectores industriales (Minería, Energía, Construcción).

### R5. Banner de Llamada a la Acción (CTA) Final
Bloque de conversión de alto contraste previo al contacto, incentivando la solicitud de inspección o visita técnica en terreno.

### R6. Formulario de Contacto Funcional
Formulario estándar con campos obligatorios (Nombre, Email, Teléfono, Mensaje) preparado para recepción de cotizaciones.

### R7. Pie de Página (Footer) Completo
Footer corporativo con logotipo, datos de contacto oficiales (teléfono, WhatsApp, email), enlaces rápidos y avisos legales / copyright.

### R8. Transición Fluida de Imágenes de Fondo y Responsividad Total
Garantizar que el panel visual lateral cambie de imagen de fondo suavemente (fade transition) al hacer scroll por cada sección, manteniendo un diseño 100% responsive en smartphones, tablets y pantallas de escritorio.

## Acceptance Criteria

### Estructura y Navegación
- [ ] El menú de navegación superior incluye el logo `../img/logo.png`, enlaces ancla funcionales a todas las secciones y botón de contacto.
- [ ] En pantallas móviles (<= 768px), el menú se colapsa y despliega de manera fluida y accesible.

### Secciones Completas
- [ ] La landing page cuenta con Hero, Servicios, Testimonios/Galería, Banner CTA, Formulario de Contacto y Footer.
- [ ] Los testimonios muestran imágenes existentes de `public/img/` con citas de clientes del rubro industrial/minero.
- [ ] El formulario de contacto valida los campos requeridos antes de procesar el envío.

### Experiencia Visual y Transiciones
- [ ] El scroll vertical activa la transición de imágenes de fondo (`.visual-panel__bg`) sin saltos bruscos ni desbordes horizontales.
- [ ] Todos los botones de acción (`Solicitar Visita`, `Cotizar`, etc.) dirigen correctamente al formulario de contacto.

## Follow-up — 2026-09-02T00:00:19Z

Actualización de requerimientos del usuario:
Asegurar la total responsividad (móviles, tablets y pantallas de escritorio) no solo para la propuesta 'Impacto', sino también para las otras propuestas presentes en el proyecto (`public/Dark`, `public/Neo` y `public/Swiss`), verificando menús colapsables, layouts fluidos, tamaños de tipografía y visualización sin desbordes.
