// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This splits each icon library into its own file
          if (id.includes('lucide-react')) return 'lucide';
          if (id.includes('@heroicons/react')) return 'heroicons';
          if (id.includes('@tabler/icons-react')) return 'tabler'; // <-- ADD THIS LINE
        },
      },
    },
    chunkSizeWarningLimit: 7000,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@icons': '/src/icons',
      '@utils': '/src/utils',
    },
  },
});