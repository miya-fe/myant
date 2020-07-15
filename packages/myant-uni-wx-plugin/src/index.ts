import webpack, { Compiler } from 'webpack'
import minimatch from 'minimatch'

interface Params {
  name: string
  version: string
  provider: string
  usingComponents: { [name: string]: string }
}

interface Options {
  [name: string]: Params
}

class WxPlugin {
  private options: Options
  constructor(options: Options) {
    this.options = options
  }

  /**
   * 自定义插件入口方法
   * @param compiler
   */
  apply(compiler: Compiler): void {
    let rules = Object.keys(this.options)
    compiler.hooks.emit.tap('WxPlugin', (compilation, nmf) => {
      let outputPath = compilation.outputPath

      if (outputPath) {
        rules.forEach((rule) => {
          //挑选符合规则的文件
          if (minimatch(outputPath, rule)) {
            let source = compilation.assets[outputPath].source

            console.log('source', source)

            compilation.assets[outputPath].source = source
          }
        })
      }
    })
  }
}

module.exports = WxPlugin
