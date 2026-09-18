import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const PAGES = [
  'index.html',
  'servicios.html',
  'empresa.html',
  'proyectos.html',
  'certificaciones.html',
  'contacto.html'
];

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✔ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✖ FAIL: ${message}`);
  }
}

console.log('================================================================');
console.log('VERIFICACIÓN TÉCNICA Y RESPONSIVA — SITIO LINECLEAN FBV (IMPACTO)');
console.log('================================================================\n');

// 1. Verificar existencia de páginas HTML
console.log('1. Existencia y estructura de páginas HTML:');
for (const page of PAGES) {
  const filePath = path.join(PUBLIC_DIR, page);
  const exists = fs.existsSync(filePath);
  assert(exists, `Página ${page} existe en public/`);
  
  if (exists) {
    const html = fs.readFileSync(filePath, 'utf-8');
    
    // DOCTYPE y lang="es"
    assert(html.includes('<!DOCTYPE html>') && html.includes('<html lang="es">'), `${page}: DOCTYPE HTML5 y lang="es" presentes`);
    
    // Viewport meta tag
    assert(html.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0">'), `${page}: Meta viewport responsivo configurado`);
    
    // Single H1 check
    const h1Matches = html.match(/<h1[\s>]/gi) || [];
    assert(h1Matches.length === 1, `${page}: Contiene exactamente un único <h1> (encontrados: ${h1Matches.length})`);
    
    // Correo oficial javier@linecleanfbv.cl
    assert(html.includes('javier@linecleanfbv.cl'), `${page}: Contiene el correo oficial javier@linecleanfbv.cl`);
    
    // Teléfono / WhatsApp oficial +56 9 9417 5680
    assert(html.includes('56994175680'), `${page}: Contiene el WhatsApp comercial +56 9 9417 5680`);
    
    // Verificación de imágenes locales referenciadas
    const imgMatches = [...html.matchAll(/src=["'](img\/[^"']+)["']/g)];
    for (const match of imgMatches) {
      const imgRelPath = match[1];
      const imgFullPath = path.join(PUBLIC_DIR, imgRelPath);
      assert(fs.existsSync(imgFullPath), `${page}: Imagen referenciada existe en disco (${imgRelPath})`);
    }
    
    // Verificación de enlaces internos a otras páginas
    const hrefMatches = [...html.matchAll(/href=["']([a-zA-Z0-9_-]+\.html)(#[^"']*)?["']/g)];
    for (const match of hrefMatches) {
      const linkedPage = match[1];
      const pageFullPath = path.join(PUBLIC_DIR, linkedPage);
      assert(fs.existsSync(pageFullPath), `${page}: Enlace interno apunta a archivo existente (${linkedPage})`);
    }
  }
}

// 2. Verificar CSS y Responsividad
console.log('\n2. Verificación de Reglas CSS y Responsividad en style.css:');
const cssPath = path.join(PUBLIC_DIR, 'css', 'style.css');
assert(fs.existsSync(cssPath), 'El archivo public/css/style.css existe');

if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf-8');
  
  assert(css.includes("'Bebas Neue'"), 'Tipografía Bebas Neue declarada en tokens');
  assert(css.includes("'Inter'"), 'Tipografía Inter declarada en tokens');
  assert(css.includes('--grad-start: #FFC400'), 'Color primario amarillo seguridad #FFC400 presente');
  
  // Breakpoints responsivos
  assert(css.includes('@media (max-width: 992px)'), 'Breakpoint Tablet/Desktop 992px configurado');
  assert(css.includes('@media (max-width: 768px)'), 'Breakpoint Tablet Portrait 768px configurado');
  assert(css.includes('@media (max-width: 480px)'), 'Breakpoint Mobile 480px configurado');
  assert(css.includes('.form-row-2col'), 'Clase utilitaria .form-row-2col configurada para colapsar en móviles');
  assert(css.includes('.table-responsive'), 'Contenedor .table-responsive con desplazamiento touch configurado');
}

// 3. Resumen
console.log('\n================================================================');
console.log(`RESULTADO DE LAS PRUEBAS: ${passedTests}/${totalTests} aprobadas (${failedTests} fallidas)`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
}
