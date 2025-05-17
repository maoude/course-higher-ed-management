import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    // This base path is crucial for GitHub Pages deployment to a subdirectory
    base: '/course-higher-ed-management/',
    plugins: [react()],
});
