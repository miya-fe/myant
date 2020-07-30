import webpack, { Compiler } from 'webpack'
import { RawSource } from 'webpack-sources'
import { getMyantConfig } from '../common'
import { get } from 'lodash'

const PLUGIN_NAME = 'gen-mini-page-entry'
class MiniPageWebpackPlugin {
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
    compiler.hooks.emit.tap(PLUGIN_NAME, (compilation, nmf) => {
      let pagesJsonPath = 'pages.json',
        navs = get(getMyantConfig(), 'site.nav', []),
        pages = navs.reduce((list: any[], nav: { items: any[] }) => {
          return list.concat(nav.items)
        }, [])

      // 更新page.json里面的页面配置
      if (compilation.assets[pagesJsonPath]) {
        let content = this.toJson(compilation.assets[pagesJsonPath])
        content.subPackages = {
          root: 'demos',
          pages: pages.map((page: { path: string; title?: string }) => {
            return {
              path: page.path,
              style: {
                navigationBarTitleText: page.title,
              },
            }
          }),
        }

        compilation.assets[pagesJsonPath] = new RawSource(JSON.stringify(content, null, 2))
      }
    })
  }
}

export default MiniPageWebpackPlugin
