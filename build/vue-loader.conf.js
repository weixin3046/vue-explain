'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
//不同环境为sourceMapEnabled 赋值: 这里都为true 
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
// 导出vue-loader的配置，这里我们用了utils文件中的cssLoaders()来返回配置好的css-loader和vue-style-loader
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction //这一项是自定义配置项，设置为true表示生成单独样式文件
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  //transformToRequire的作用是在模板编译的过程中，编译器可以将某些属性，如src转换为require调用
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
