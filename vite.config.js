import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Continue on build errors (not recommended for production)
    // This allows the build to continue even if there are errors.
    // It suppresses error messages during the build.
    // Use with caution.
    continueOnError: true,

    // Suppress error logging during build (not recommended for production)
    // This suppresses error messages from being displayed in the console.
    // Use with caution, as it can make debugging issues more challenging.
    silent: true,
  },
})
