import { defineConfig } from 'vite';

export default defineConfig({
  base: '/TravelFlipCardApp/',
  server: {
    proxy: {
      '/api': 'http://localhost:8081', // 后端代理
    },
  },
});
