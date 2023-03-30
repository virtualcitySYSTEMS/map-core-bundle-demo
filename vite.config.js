import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'vcmap-core',
      fileName: 'vcmap-core',
    },
  },
});