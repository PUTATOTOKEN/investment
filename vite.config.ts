// vite.config.ts - فایل کامل و اصلاح‌شده برای جلوگیری از ارور Netlify

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist', // Netlify expects this folder
    rollupOptions: {
      external: [] // اگر پکیج خاصی مشکل داشت، اینجا مشخص کن
    }
  },
  server: {
    port: 5173, // پورت پیش‌فرض Vite
    open: true
  },
  base: './' // این مورد برای Netlify حیاتی‌ست که مسیرها را نسبی کند
});
