import webpack, { Compiler } from 'webpack'
import minimatch from 'minimatch'
import { RawSource } from 'webpack-sources'

interface Params {
  name: string
  version: string
  provider: string
  usingComponents: { [name: string]: string }
}

interface Options {
  [name: string]: Params
}
const PLUGIN_NAME = 'wx-plugin'

class WxPlugin {
  private options: Options
  constructor(options: Options) {
    this.options = options
  }

  toJson(asset: any) {
    let content = asset.source()
    try {
      content = JSON.parse(content)
    } catch (e) {
      content = {}
    }

    return content
  }

  /**
   * 自定义插件入口方法
   * @param compiler
   */
  apply(compiler: Compiler): void {
    let rules = Object.keys(this.options)
    compiler.hooks.emit.tap(PLUGIN_NAME, (compilation, nmf) => {
      let appJson = {} as any,
        appJsonPath = 'app.json'

      rules.forEach((pattern) => {
        let item = this.options[pattern],
          matchedFiles = minimatch.match(Object.keys(compilation.assets), pattern, { matchBase: true })

        matchedFiles.forEach((file) => {
          let fileJson = this.toJson(compilation.assets[file])
          fileJson.usingComponents = {
            ...(fileJson.usingComponents || {}),
            ...(item.usingComponents || {}),
          }

          compilation.assets[file] = new RawSource(JSON.stringify(fileJson, null, 2))
        })

        // 组装app.json的数据
        appJson[item.name] = {
          version: item.version,
          provider: item.provider,
        }
      })

      // 更新app.json里面的插件配置
      if (compilation.assets[appJsonPath]) {
        let content = this.toJson(compilation.assets[appJsonPath])
        content.plugins = {
          ...(content.plugins || {}),
          ...appJson,
        }

        compilation.assets[appJsonPath] = new RawSource(JSON.stringify(content, null, 2))
      }
    })
  }
}

export default WxPlugin
