// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/rr-student-platform/",
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // ⚠️ هادا هو الساروت! تأكد أنه كاين
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})