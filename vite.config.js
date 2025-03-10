import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api': 'http://localhost:8000',
      '/api': {
        target: 'https://coursebackend-8urz.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
