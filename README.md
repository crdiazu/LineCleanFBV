# LineCleanFBV

## 📁 Resumen del proyecto
Este repositorio contiene los **4 diseños web** para el cliente **LineClean FBV** (empresa chilena de trabajos en altura). Cada propuesta está en su propia carpeta bajo `LineCleanFBV-Previews/`:

- `Industrial/` – Panel de control de seguridad industrial.
- `Dark/` – Tema cyber‑punk (pendiente de reestructurar).
- `Neo/` – Neo‑brutalismo asimétrico (pendiente).
- `Swiss/` – Editorial suizo minimalista (pendiente).

El proyecto está configurado actualmente para **Firebase Hosting** (archivo `firebase.json`).

## 🚀 Objetivo de la migración
Mover el sitio a **GitHub Pages** (o a cualquier repositorio Git) manteniendo la misma estructura y sin perder funcionalidades.

## 📂 Propuesta de organización de carpetas
```
LineCleanFBV/
├── src/                     # Código fuente del sitio
│   ├── Industrial/
│   ├── Dark/
│   ├── Neo/
│   └── Swiss/
├── public/                  # Recursos estáticos (imágenes, fuentes, etc.)
│   └── img/
├── .github/                 # Workflows de CI/CD (opcional)
│   └── workflows/
│       └── gh-pages.yml
├── .gitignore               # Archivos a excluir del repositorio
├── README.md                # Este archivo
├── firebase.json            # Conservado solo como referencia
└── docs/ (opcional)        # Si se usa GitHub Pages con carpeta docs
```

### Pasos para re‑organizar
1. **Crear la nueva estructura** (puedes hacerlo manualmente o con los comandos que aparecen más abajo).
2. **Mover los diseños**:
   ```bash
   mv LineCleanFBV-Previews/* src/
   rm -r LineCleanFBV-Previews
   ```
3. **Mover recursos estáticos** (imágenes, videos, etc.) a `public/`:
   ```bash
   mkdir -p public/img
   mv src/*/img/* public/img/
   # Opcional: eliminar carpetas vacías de img dentro de cada diseño
   find src -type d -name img -empty -delete
   ```
4. **Actualizar rutas** en los archivos HTML/CSS/JS para que apunten a `../public/...` o a la ruta relativa correcta.
5. **Eliminar `firebase.json`** del flujo de despliegue (puedes conservarlo como referencia).
6. **Crear `.gitignore`** (ver archivo adjunto).
7. **Inicializar Git** y crear el repositorio remoto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit – reorganized for GitHub Pages"
   git remote add origin https://github.com/TU_USUARIO/LineCleanFBV.git
   git push -u origin main
   ```
8. **Configurar GitHub Pages**:
   - En la configuración del repo, habilita **GitHub Pages** y selecciona la rama `main` y la carpeta `/docs` (si usas `docs/`) o `/` (si usas la raíz).
   - Si prefieres usar la carpeta `docs/`, copia el contenido de `src/` a `docs/` y actualiza los enlaces.

## 📄 .gitignore sugerido
```
# Node / npm
node_modules/
package-lock.json

# IDE / editor
.vscode/
.idea/
*.sublime-workspace

# Sistema
.DS_Store
Thumbs.db

# Backups y temporales
backup_*/
*.log

# Firebase
.firebase/
.firebase/**

# Obsidian vault metadata
.obsidian/
```

## 🛠️ Herramientas útiles
- **Git** – control de versiones.
- **GitHub Actions** – automatizar despliegue a GitHub Pages.
- **Live Server** (VS Code) – previsualizar localmente antes de subir.

---

Con esta organización el proyecto quedará listo para ser versionado en GitHub y desplegado mediante GitHub Pages, manteniendo una estructura clara y fácil de mantener.
