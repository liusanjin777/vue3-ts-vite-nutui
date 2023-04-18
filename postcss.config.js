/*module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      // rootValue: 75, // 设计稿宽度的1/ 10 例如设计稿按照 1920设计 此处就为192
      rootValue({ file }) {  // 如果是vant的就按照375 尺寸， 如果是其他的就是按照750
        console.log('rootValue:',file.indexOf('nut') !== -1 ? 37.5 : 75)
        return file.indexOf('nut-') !== -1 ? 37.5 : 75;   // rootValue 的值一般是 设计稿  1/10
      },
      propList: ["*", "!border"], // 除 border 外所有px 转 rem
      selectorBlackList: [], // 过滤掉.el-开头的class，不进行rem转换
      unitPrecision: 3, //最多小数位数;
      minPixelValue: 2, //设置要替换的最小像素值
    }
  },
};*/
module.exports = {
  'plugins': {
    'autoprefixer': {
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
    'postcss-pxtorem': {
      rootValue:37.5,
      unitPrecision: 6, // 计算结果保留 6 位小数
      selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px。
      propList: ['*',"!border"], // 可以从px更改为rem的属性  感叹号开头的不转换
      replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
      mediaQuery: true, // 允许在媒体查询中转换px。
      minPixelValue: 2, // 设置要替换的最小像素值。
      exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)
    }
  }
}
