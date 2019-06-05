'use strict'
const chalk = require('chalk')//引入的是一个用来在命令行输出不同颜色文字的模块，通过chalk.yellow("想添加颜色的文字......")来实现改变文字颜色的；
const semver = require('semver')//引入的是一个语义化版本文件的npm包，其实它就是用来控制版本的。“semver”的常用方法如下：
// semver.valid('1.2.3') // '1.2.3'，返回符合版本格式的版本
// semver.valid('a.b.c') // null，如果不符合版本返回null
// semver.clean('  =v1.2.3   ') // '1.2.3'，返回一个标准的版本号，且去掉两边的空格
// semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true，第一个参数是测试的版本号，第二个参数是匹配的版本，如果匹配则返回true
// semver.gt('1.2.3', '9.8.7') // false，第一个参数的版本是否比第二个大
// semver.lt('1.2.3', '9.8.7') // true ，第一个参数的版本您是否比第二个小
 
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
