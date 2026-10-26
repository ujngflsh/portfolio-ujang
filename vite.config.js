import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ... konfigurasi lainnya
  closeBundle() {
    // Paksa proses keluar setelah build selesai
    setTimeout(() => process.exit(0), 0);
  }
})