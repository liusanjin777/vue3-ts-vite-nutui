import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import { createStyleImportPlugin } from "vite-plugin-style-import"
import postCssPxToRem from 'postcss-pxtorem'
import autoPrefixer from 'autoprefixer'

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
        autoPrefixer(
          {
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'not ie <= 11',  //不考虑IE浏览器
              'ff >= 30', //仅新版本用“ff>=30
              '> 1%',//  全球统计有超过1%的使用率使用“>1%”;
              'last 2 versions', // 所有主流浏览器最近2个版本
            ],
            grid: true ,// 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
          },
        ),
        postCssPxToRem({
          rootValue: 100,
          unitPrecision: 5,
          propList: ['*', '!letter-spacing'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 1,
          exclude: /node_modules/i,
        }),
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
