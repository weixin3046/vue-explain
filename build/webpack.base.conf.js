'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// vue-loader.conf配置文件是用来解决各种css文件的，定义了诸如css,less,sass之类的和样式有关的loader
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// 此函数是用来返回当前目录的平行目录的路径，因为有个'..'
// const createLintingRule = () => ({
//   test: /\.(js|vue)$/,
//   loader: 'eslint-loader',
//   enforce: 'pre',
//   include: [resolve('src'), resolve('test')],
//   options: {
//     formatter: require('eslint-friendly-formatter'),
//     emitWarning: !config.dev.showEslintErrorsInOverlay
//   }
// })
//定义一下代码检测的规则 

module.exports = {
  context: path.resolve(__dirname, '../'),
   //基础目录（绝对路径），用于从配置中解析入口点和加载程序
  // 传送门:https://webpack.js.org/configuration/entry-context/#contex
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
    // 项目上线地址，也就是真正的文件引用路径，如果是production环境，其实这里都是'/'
    // path和publicPath的区别传送门:https://www.webpackjs.com/concepts/output/
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // 省略扩展名，比方说import index from '../js/index'会默认去找index文件，然后找index.js,index.vue,index.json文件
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
    // 使用别名  使用上面的resolve函数，意思就是用@代替src的绝对路径
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
