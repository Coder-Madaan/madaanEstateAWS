import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://http://65.1.246.161:3000', // Replace with your EC2 public IP or domain
        secure: false,
      },
    },
  },

  plugins: [react()],
});
