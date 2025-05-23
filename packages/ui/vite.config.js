import { defineConfig } from 'vite';
import getRootPath from '@kiwi/common/src/getRootPath.js';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import griffel from '@griffel/vite-plugin';

const buildOutputPath = getRootPath('dist');

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: buildOutputPath,
    manifest: true,
  },
  plugins: [react(), viteSingleFile(), griffel()],
});
