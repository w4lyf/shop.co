import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./ecommerce-shop.co/",  // Use relative paths
  plugins: [react()],
  publicDir: "public",
});
