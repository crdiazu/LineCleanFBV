# Plan de Optimización SEO (Chile) y Open Graph
**Proyecto:** Limpio Tu Vidrio SPA
**Dominio Objetivo:** limpiotuvidrio.cl

## 1. Meta Etiquetas Básicas y Localización
Es crucial informar a los motores de búsqueda (principalmente Google Chrome) el foco del negocio en Chile.

- **Title Tag**: `Limpio Tu Vidrio | Especialistas en Limpieza de Altura y Fachadas en Chile`
- **Meta Description**: `Servicio profesional de limpieza de vidrios en altura, paneles solares y mantenimiento de fachadas en Santiago y todo Chile. Personal certificado y equipos de vanguardia. Cotiza tu proyecto hoy.`
- **Geo-Tags**: 
  - `<meta name="geo.region" content="CL" />`
  - `<meta name="geo.placename" content="Santiago" />`

## 2. Open Graph (Facebook, WhatsApp, LinkedIn)
Los tags "OG" (Open Graph) son los responsables de crear la tarjeta visual que ven los usuarios al compartir el enlace por WhatsApp u otra red social. Sin estas etiquetas, plataformas como WhatsApp solo muestran un texto azul básico del hipervínculo.

- **`og:title`**: Título que aparece en la parte inferior de la previsualización.
- **`og:description`**: El breve resumen debajo del título.
- **`og:type`**: `website`.
- **`og:url`**: `https://limpiotuvidrio.cl/` (La URL canónica para unificar tráfico).
- **`og:image`**: Ruta absoluta a una imagen atractiva (dimensiones óptimas: 1200x630px). En este proyecto se alojará en `/og-image.jpg` referenciándola de forma íntegra.
- **`og:locale`**: `es_CL` (Indica abiertamente que está en Español para el territorio Chileno).

## 3. Twitter Cards
Aunque Chile usa más WhatsApp o Instagram, X/Twitter requiere sus propias metas para funcionar al 100%:
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:title" content="...">`
- `<meta name="twitter:description" content="...">`
- `<meta name="twitter:image" content="...">`

## 4. Archivos de Indexación Adicionales
Para asegurar que los robots técnicos entiendan la web rápidamente:

- **`robots.txt`**: Un archivo simple que dicte a Googlebot que tiene acceso completo al contenido público y le señale dónde está el sitemap.
- **`sitemap.xml`**: Un mapa en código XML enumerando las rutas de la web para acelerar la velocidad en la que los sitios aparecen en los resultados de Google (Google Search Console).
