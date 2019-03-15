# 详解

 dependencies 是运行时依赖（生产环境）       npm install --save  **(package name)
 devDependencies 是开发时的依赖（开发环境）  npm install --save-dev  **(package name)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
```

# 文件解释
.gitattribute 用于设置文件的对比方式（常用非文本文件）
.gitigonre 你想要忽略的文件或者目录
.postcssrc.js或者postcss.config.js 自动前缀插件
Autoprefixer是一款自动管理浏览器前缀的插件
.babelrc babel之配置文件
.eslintignore ESLint忽略指定文件夹/忽略ESLINT校验
.eslintrc.js 规则整理/代码规范
EditorConfig 编辑器格式统一配置