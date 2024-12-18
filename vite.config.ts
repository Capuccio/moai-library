import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import dts from 'vite-plugin-dts';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //dts({ rollupTypes: true }),
    dts(),
    nodePolyfills()
  ],
  css: {
    postcss: {
      plugins: [tailwind, autoprefixer]
    }
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'MoaiLibrary',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vm-browserify', 'react', 'react-dom', 'react/jsx-runtime', 'next'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          next: 'Next'
        }
      }
    }
  }
});
