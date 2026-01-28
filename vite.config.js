import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize for better initial render and code splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching and smaller initial bundle
          if (id.includes('node_modules')) {
            // Critical: React core (loads first) - smallest possible chunk
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            // Router (loads early but separate for better caching)
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // Defer: Animation library (can load later)
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // Defer: Icons (can load later)
            if (id.includes('lucide-react')) {
              return 'lucide-react';
            }
            // Defer: UI components (can load later) - split Radix UI components
            if (id.includes('@radix-ui')) {
              // Split Radix UI into smaller chunks
              if (id.includes('react-dialog') || id.includes('react-alert-dialog')) {
                return 'radix-dialog';
              }
              if (id.includes('react-dropdown-menu') || id.includes('react-tabs')) {
                return 'radix-menu';
              }
              return 'radix-ui';
            }
            // Defer: Helmet (SEO) - loads when needed
            if (id.includes('react-helmet')) {
              return 'react-helmet';
            }
            // Other node_modules
            return 'vendor';
          }
          // Split large data files
          if (id.includes('data/services.js')) {
            return 'data-services';
          }
          if (id.includes('data/blogPosts.js')) {
            return 'data-blog';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Fix Safari 10 issues
      },
    },
    // Optimize chunk size - warn if chunks exceed 500KB
    chunkSizeWarningLimit: 500,
    // Enable source maps only in development
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Target modern browsers for smaller bundles
    target: 'esnext',
  },
  // Pre-optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: [],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  // Server configuration for development
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
    fs: {
      strict: false,
    },
  },
  // Optimize for faster response times
  esbuild: {
    target: 'esnext',
    format: 'esm',
  },
})
