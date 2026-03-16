import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE TO THIS:
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/TraditionalVillage/' : '/',
  }
})