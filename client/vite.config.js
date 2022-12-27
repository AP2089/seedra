import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { imagetools } from 'vite-imagetools';
import path from 'path';

const {VITE_APP_SERVER_URL, VITE_APP_CLIENT_PORT} = process.env;

export default defineConfig({
  server: {
    host: 'localhost',
    port: VITE_APP_CLIENT_PORT,
    proxy: {
      '/uploads': {
        target: VITE_APP_SERVER_URL
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'node_modules')
    },
    extensions: ['.js', '.vue', '.json', '.scss']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/config.scss";
          @import "@/styles/mixins.scss";
        `
      }
    }
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/sprites')],
      symbolId: '[name]',
      inject: 'body-first',
      customDomId: 'sprite-svg'
    }),
    imagetools()
  ]
})
