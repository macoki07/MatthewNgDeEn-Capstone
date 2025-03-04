import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/MatthewNgDeEn-Capstone/', // Base URL should be your repository name
  root: 'MatthewNgDeEn-Capstone' // Set the root directory for Vite
})



