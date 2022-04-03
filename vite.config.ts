/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    Components({
      resolvers: [ArcoResolver()],
      dts: './src/types/global-components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          '@/plugins/request': [
            'request', // import { request } from '@/plugins/request',
            'callApi', // import { callApi } from '@/plugins/request',
          ],
          '@/store': ['useUserStore'],
          '@arco-design/web-vue': ['Message'],
        },
      ],
      dts: './src/types/auto-imports.d.ts',
    }),
  ],

  define: {
    'process.env': {},
  },

  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },

  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },

  // vitest 配置
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
