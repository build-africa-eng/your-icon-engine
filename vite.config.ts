// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('lucide-react')) return 'lucide';
          if (id.includes('@heroicons')) return 'heroicons';
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to reduce warnings (optional)
  },
});