import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  base: '/', // ✅ باید از root باشه برای اینکه در Netlify مسیرها درست باشند
});
