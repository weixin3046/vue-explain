'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//webpack-merge提供了一个合并函数，它将连接数组并合并对象。有点儿类似于es6的object.assign(); https://www.npmjs.com/package/webpack-merge
//merge(
//     {a : [1],b:5,c:20},
//     {a : [2],b:10, d: 421}
// )
//合并后的结果
//{a : [1,2] ,b :10 , c : 20, d : 421}
//如果遇到函数，它将执行它们，通过算法运行结果，然后再次将返回的值封装在函数中.这边将dev和prod进行合并


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
