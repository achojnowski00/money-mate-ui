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
        api: path.resolve('./src/', 'api'),
        assets: path.resolve('./src/', 'assets'),
        common: path.resolve('./src/components/', 'common'),
        components: path.resolve('./src/', 'components'),
        hooks: path.resolve('./src/', 'hooks'),
        js: path.resolve('./src/', 'js'),
        src: path.resolve('./', 'src'),
        views: path.resolve('./src/', 'views'),
        utils: path.resolve('./src/', 'utils'),
        testUtils: path.resolve('./src/', 'testUtils'),
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
