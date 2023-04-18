import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import { createStyleImportPlugin } from "vite-plugin-style-import"
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [{
        libraryName: '@nutui/nutui',
        libraryNameChangeCase: 'pascalCase',
        resolveStyle: (name:any) => {
          return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`
        },
      }]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    
    postcss:{
      plugins:[
        postCssPxToRem({
          rootValue: 100,
          unitPrecision: 5,
          propList: ['*', '!letter-spacing'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 1,
          exclude: /node_modules/i,
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      },
      less: {
        // charset: false,
        // additionalData: '@import "./src/assets/style/global.less";',
      }
    },
  }
});
