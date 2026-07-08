import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "page",
  },
  server: {
    port: 4001, // cambia al puerto que quieras
  },
})
