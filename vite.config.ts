import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import path from 'path'

export default defineConfig({
  plugins: [react(), eslint(), sentryVitePlugin({
    org: "monitoreo-xochicalli",
    project: "xochicalli_monitoreo"
  })],

  server: {
    watch: {
      usePolling: true,
    },
  },

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },

  build: {
    sourcemap: true
  }
});