import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//'esnext' means using the latest ECMAScript features,allows modern JavaScript features like top-level await
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  },
  //controls how Vite pre-bundles dependencies
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  }
})
