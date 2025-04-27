import { defineConfig } from 'vite'

export default defineConfig({
  base: '/TravelFlipCardApp/',
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
})
