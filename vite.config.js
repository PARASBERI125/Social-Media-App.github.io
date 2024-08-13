import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify the port you want to use
    strictPort: true, // Optional: ensures Vite fails if the port is in use
  },
  preview: {
    port: 3000, // Specify the port for preview mode
    strictPort: true, // Optional: ensures preview mode fails if the port is in use
  },
});
