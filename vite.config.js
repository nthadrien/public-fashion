import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    solid(),
    Icons({ autoInstall: true, compiler : 'solid' })
  ],
  server:{
    port: 4000,
    proxy: {
      'api': {
        target: 'http:http://127.0.0.1:3000',
        changeOrigin: true
      }
    }
  },
  base: "/public-fashion"
})
