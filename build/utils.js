'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
/*
 *assetsPath方法
 *接受一个_path参数
 *返回static目录位置拼接的路径。
 *它根据nodejs的proccess.env.NODE_ENV变量，来判断当前运行的环境。返回不同环境下面的不同static目录位置拼接给定的_path参数。
 *
 */
/**
 cssLoaders方法
接受一个options参数，参数还有的属性：sourceMap、usePostCSS。

同时，这里用到了我们之前提到的extract-text-webpack-plugin插件，来分离出js中的css代码，然后分别进行打包。同时，它返回一个对象，其中包含了css预编译器(less、sass、stylus)loader生成方法等。如果你的文档明确只需要一门css语言，那么可以稍微清楚一些语言，同时可以减少npm包的大小(毕竟这是一个令人烦躁的东西)。
 */
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = { //加载.css文件css-loader用于将css文件打包到js中
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader', //自动添加浏览器前缀 ，
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  // 生成要与提取文本插件一起使用的加载程序字符串
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
// 为独立样式文件（在.vue之外）生成加载程序
// 接受的options对象和上面的方法一致。该方法只是根据cssLoaders中的方法配置，生成不同loaders。然后将其返回。
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}
// 此处调用了一个模块，可以在GitHub上找到，它是一个原生的操作系统上发送通知的nodeJS模块。用于返回脚手架错误的函数
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
