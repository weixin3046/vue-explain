'use strict'
const utils = require('./utils')  //utils提供工具函数，包括生成处理各种样式语言的loader，获取资源文件存放路径的工具函数
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')//将基础配置和开发环境配置或者生产环境配置合并在一起的包管理
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')// 引入基本webpack基本配置
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 在webpack中拷贝文件和文件夹
// 传送门:https://doc.webpack-china.org/plugins/copy-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 文件名及时更改，自动打包并且生成响应的文件在index.html里面
// 传送门:https://webpack.js.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// Friendly-errors-webpack-plugin可识别某些类型的webpack错误并清理，汇总和优先化它们以提供更好的开发者体验。
// 传送门:http://npm.taobao.org/package/friendly-errors-webpack-plugin
const portfinder = require('portfinder')
// 查看空闲端口位置，默认情况下搜索8000这个端口，
// 传送门:https://www.npmjs.com/package/portfinder
const HOST = process.env.HOST
//processs为node的一个全局对象获取当前程序的环境变量，即host，
// 传送门:http://javascript.ruanyifeng.com/nodejs/process.html#toc5
const PORT = process.env.PORT && Number(process.env.PORT)
//processs为node的一个全局对象获取当前程序的环境变量，即host，
// 传送门:http://javascript.ruanyifeng.com/nodejs/process.html#toc5
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    //自动生成了css,postcss,less等规则，并进行模块转换，转换成webpack可识别的文件，进行解析转换
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  // 增加调试信息
  // 传送门:https://doc.webpack-china.org/configuration/devtool
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    // console 控制台显示的消息，可能的值有 none, error, warning 或者 info
    // 在开发工具(DevTools)的控制台将显示消息【如：在重新加载之前，在一个错误之前，或者模块热替换(HMR)启动时，这可能显示得很繁琐】
    // 传送门:https://doc.webpack-china.org/configuration/dev-server/#devserver-clientloglevel
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,// 开启热模块加载
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host, // process.env 优先
    port: PORT || config.dev.port,// process.env 优先
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    // 当出现编译器错误或警告时，在浏览器中显示全屏叠加,覆盖到浏览器的项目页面的上方。{warning:false,errors:true}这个选项为 显示错误不显示警告
    // 传送门:https://doc.webpack-china.org/configuration/dev-server/#devserver-overlay
    publicPath: config.dev.assetsPublicPath,
    // 服务器假设运行在http://localhost:8080并且output.filename被设置为bundle.js默认。publicPath是"/"，所以你的包（束）通过可以http://localhost:8080/bundle.js访问。
    // 比如将config中的index.js dev对象的中的assertsPublicPath设置为"/asserts/"那么文件打开后将通过http://localhost:8080/asserts/来进行访问
    // 传送门:https://doc.webpack-china.org/configuration/dev-server/#devserver-publicpath-
    proxy: config.dev.proxyTable,// 代理设置
    // 如果你有单独的后端开发服务器API，并且希望在同域名下发送API请求，那么代理某些URL将很有用.简称就是API代理,中间件  需引入 http-proxy-middleware
    // 传送门:https://doc.webpack-china.org/configuration/dev-server/#devserver-proxy
    quiet: true, // necessary for FriendlyErrorsPlugin
    // 启用quiet后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自的WebPack的错误或警告在控制台不可见。
    // 传送门:https://doc.webpack-china.org/configuration/dev-server/#devserver-quiet-
    watchOptions: {
      poll: config.dev.poll,
    }
    // webpack使用文件系统（file system）获取文件改动的通知
    // 传送门:https://doc.webpack-china.org/configuration/dev-server/#devserver-watchoptions-
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    // 将DefinePlugin允许您创建可在配置全局常量的编译时间。这对于允许开发构建和发布构建之间的不同行为是有用的
    // 传送门:https://webpack.js.org/plugins/define-plugin/#src/components/Sidebar/Sidebar.jsx
    new webpack.HotModuleReplacementPlugin(),
    // 永远不能用在生产模式，模块热更新,修改文件的内容，允许在运行时更新各种模块，而无需进行完全刷新。
    // 传送门:https://doc.webpack-china.org/guides/hot-module-replacement/
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    // 当进行热更新时，相关文件名会被展示出来
    // 传送门:https://webpack.js.org/plugins/named-modules-plugin/#src/components/Sidebar/Sidebar.jsx
    new webpack.NoEmitOnErrorsPlugin(),
    // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
    // 传送门:https://webpack.js.org/plugins/no-emit-on-errors-plugin/#src/components/Sidebar/Sidebar.jsx
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 该插件可自动生成一个 html5 文件或使用模板文件将编译好的代码注入进去
    // 传送门:https://webpack.js.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx  
    // https://github.com/ampedandwired/html-webpack-plugin
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])

  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  //由于portfinder这个插件本身是从8000开始查找，这里设置查找的默认端口号
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
       // 如果端口被占用就对进程设置端口
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // 如果端口被占用就设置devServer的端口
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        // 添加提示信息，所在域名和端口的提示信息
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))
       // 窗口提示信息,调用utils工具函数的createNotifierCallBack()方法
      resolve(devWebpackConfig)
       // 如果找到能用的端口号，就把配置信息提示抛出去
    }
  })
})
