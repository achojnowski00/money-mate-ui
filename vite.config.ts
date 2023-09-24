import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import pkg from './package.json';

export default defineConfig(() => {
  return {
    root: path.resolve(__dirname, './'),
    base: '/',
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `
          // @import "assets/styles/colors";
          // @import "assets/styles/sizes";
          // @import "assets/styles/mixins";
          // `,
        },
      },
    },
    resolve: {
      alias: {
        components: path.resolve('./src/', 'components'),
        testUtils: path.resolve('./src/', 'testUtils'),
        src: path.resolve('./', 'src'),
      },
    },
    plugins: [react(), createHtmlPlugin()],
    build: {
      outDir: path.resolve(__dirname, 'build'),
    },
    define: {
      __VERSION__: JSON.stringify(pkg.version),
    },
    server: {
      port: 8888,
    },
  };
});
