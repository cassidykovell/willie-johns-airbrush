import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg'],
  server: {
    port: 3000,
    open: true
  }
})

