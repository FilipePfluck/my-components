/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
  },
  resolve: {
    alias: {
      '@/styled-system': path.resolve(__dirname, './styled-system'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
