import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('lucide-react')) return 'lucide';
          if (id.includes('@heroicons/react')) return 'heroicons';
          if (id.includes('@tabler/icons-react')) return 'tabler';
        },
      },
    },
    chunkSizeWarningLimit: 7000,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Added .js and .jsx for safety
  },
  optimizeDeps: {
    exclude: ['lucide-react', '@heroicons/react', '@tabler/icons-react'],
  },
});