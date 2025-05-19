import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/course-higher-ed-management/',
  plugins: [react()],
});