import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/ecommerce-shop.co/",  // Ensure app loads at root
  plugins: [react()],
  publicDir: "public",
});
