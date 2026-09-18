import os
from datetime import datetime

# Configuración
PUBLIC_DIR = './public'
DOMAIN = 'https://linecleanfbv.cl'
OUTPUT_FILE = 'sitemap.xml'
PUBLIC_OUTPUT_FILE = './public/sitemap.xml'

def generate_sitemap():
    if not os.path.exists(PUBLIC_DIR):
        print(f"Error: El directorio {PUBLIC_DIR} no existe.")
        return

    html_files = [f for f in os.listdir(PUBLIC_DIR) if f.endswith('.html')]
    
    today = datetime.today().strftime('%Y-%m-%d')
    
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for file in html_files:
        if file == 'index.html':
            url = f"{DOMAIN}/"
        else:
            clean_name = file.replace('.html', '')
            url = f"{DOMAIN}/{clean_name}"
            
        xml_content += '  <url>\n'
        xml_content += f'    <loc>{url}</loc>\n'
        xml_content += f'    <lastmod>{today}</lastmod>\n'
        xml_content += '  </url>\n'
        
    xml_content += '</urlset>'
    
    # Guardar en la raíz y en public por si Vercel lo sirve desde public
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(xml_content)
        
    with open(PUBLIC_OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(xml_content)
        
    print(f"[OK] sitemap.xml generado exitosamente con {len(html_files)} URLs.")

if __name__ == "__main__":
    generate_sitemap()
