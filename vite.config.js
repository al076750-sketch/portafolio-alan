import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" permite publicar tanto en Vercel como en GitHub Pages
export default defineConfig({ plugins: [react()], base: "./" });
