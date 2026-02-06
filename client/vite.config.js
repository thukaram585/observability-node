import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // During local development, forward `/api` calls to the Node server.
      // This keeps `localhost` out of your React code and only in dev tooling.
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    }
  }
});

