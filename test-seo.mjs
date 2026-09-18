import fs from 'fs';

let passes = 0;
let fails = 0;
function assert(cond, msg) {
  if (cond) {
    console.log('✔ PASS: ' + msg);
    passes++;
  } else {
    console.error('✖ FAIL: ' + msg);
    fails++;
  }
}

console.log('\n--- 1. VERIFICACIÓN VERCEL.JSON ---');
const vercelRaw = fs.readFileSync('vercel.json', 'utf8');
const vercel = JSON.parse(vercelRaw);
assert(vercel.cleanUrls === true, 'cleanUrls está activo');
assert(Array.isArray(vercel.redirects) && vercel.redirects.length >= 20, 'Array de redirects contiene ' + vercel.redirects.length + ' reglas');
const testRedirects = ['/servicios/', '/trabajos-verticales/', '/mantenimiento-en-alturas/', '/contacto/', '/quienes-somos/', '/lineas-de-vida/'];
testRedirects.forEach(src => {
  const found = vercel.redirects.find(r => r.source === src);
  assert(found && found.permanent === true, 'Regla 301 encontrada para ' + src + ' -> ' + (found ? found.destination : 'N/A'));
});

console.log('\n--- 2. VERIFICACIÓN METADATOS HTML ---');
const pages = ['index.html', 'servicios.html', 'empresa.html', 'proyectos.html', 'certificaciones.html', 'contacto.html'];
pages.forEach(file => {
  const html = fs.readFileSync('public/' + file, 'utf8');
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  assert(titleMatch && titleMatch[1].includes('LineClean FBV'), file + ': <title> optimizado con marca (' + (titleMatch ? titleMatch[1] : '') + ')');
  
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/);
  assert(descMatch && descMatch[1].length <= 155 && descMatch[1].length > 50, file + ': <meta description> longitud ' + (descMatch ? descMatch[1].length : 0) + ' chars (máx 155)');
  
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](https:\/\/linecleanfbv\.cl\/[^"']*)["']/);
  assert(canonMatch && canonMatch[1].startsWith('https://linecleanfbv.cl/'), file + ': canonical URL absoluta (' + (canonMatch ? canonMatch[1] : '') + ')');
});

console.log('\n--- 3. VERIFICACIÓN JSON-LD SCHEMA (INDEX.HTML) ---');
const indexHtml = fs.readFileSync('public/index.html', 'utf8');
const jsonLdMatch = indexHtml.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/);
assert(jsonLdMatch, 'index.html contiene bloque <script type="application/ld+json">');
if (jsonLdMatch) {
  const schema = JSON.parse(jsonLdMatch[1]);
  const graph = schema['@graph'] || [schema];
  const hasLocalBusiness = graph.some(item => item['@type'] === 'LocalBusiness');
  const hasService = graph.some(item => item['@type'] === 'Service');
  assert(hasLocalBusiness, 'Schema contiene LocalBusiness');
  assert(hasService, 'Schema contiene Service');
}

console.log('\n--- 4. VERIFICACIÓN SITEMAP.XML & ROBOTS.TXT ---');
['public/sitemap.xml', 'sitemap.xml'].forEach(sm => {
  assert(fs.existsSync(sm), sm + ' existe');
  const content = fs.readFileSync(sm, 'utf8');
  assert(content.includes('https://linecleanfbv.cl/'), sm + ' contiene URLs absolutas');
});

['public/robots.txt', 'robots.txt'].forEach(rb => {
  assert(fs.existsSync(rb), rb + ' existe');
  const content = fs.readFileSync(rb, 'utf8');
  assert(content.includes('Allow: /'), rb + ' contiene Allow: /');
  assert(content.includes('Sitemap: https://linecleanfbv.cl/sitemap.xml'), rb + ' referencia sitemap.xml');
});

console.log('\n========================================');
console.log('RESULTADOS: ' + passes + ' aprobadas, ' + fails + ' fallidas.');
console.log('========================================\n');

if (fails > 0) process.exit(1);
