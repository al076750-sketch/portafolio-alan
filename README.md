# Portafolio del semestre (React + Vite)

## Personalizar
Edita `src/data.js` (nombre, bio, proyectos, enlaces). Los colores y tipografías están en `src/index.css`.

## Correr en local
```bash
npm install
npm run dev
```

## Publicar
**Vercel (recomendado):** sube el repo a GitHub → vercel.com → *Add New Project* → importa el repo → *Deploy*. Vercel detecta Vite solo.

**GitHub Pages:**
```bash
npm run build
```
Sube la carpeta `dist` a la rama `gh-pages` (por ejemplo con `npx gh-pages -d dist`) y activa Pages en *Settings → Pages*.
