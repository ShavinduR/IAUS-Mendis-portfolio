import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this site from /IAUS-Mendis-portfolio/, so the deploy
// workflow sets BASE_PATH. Locally and on Vercel the site lives at the root.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
