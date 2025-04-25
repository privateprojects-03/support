import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        'custom-color': '#122620', // Add your custom color here
      },
    },
  },
  plugins: [
    react(),  
    tailwindcss(),
  ],
})
