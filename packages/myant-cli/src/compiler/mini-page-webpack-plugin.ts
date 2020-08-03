import webpack, { Compiler } from 'webpack'
import { RawSource } from 'webpack-sources'
import { getMyantConfig } from '../common'
import { get } from 'lodash'

type NavItem = {
  title: string
  path: string
}

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
      let pagesJsonPath = 'pages.json'
      // 更新page.json里面的页面配置
      if (!compilation.assets[pagesJsonPath]) {
        return
      }

      let locales = get(getMyantConfig(), `site.locales`, {}),
        pages: NavItem[] = []

      for (let lang of Object.keys(locales)) {
        let navs = get(locales[lang], `nav`, [])
        pages = pages.concat(
          navs.reduce((list: NavItem[], nav: { items: NavItem[] }) => {
            return list.concat(
              nav.items.map((item: NavItem) => {
                return {
                  title: item.title,
                  path: `${lang}/${item.path}/index`,
                }
              })
            )
          }, [])
        )
      }

      // 更新page.json里面的页面配置
      let content = this.toJson(compilation.assets[pagesJsonPath])
      content.subPackages = {
        root: 'demos',
        pages: pages.map((page: NavItem) => {
          return {
            path: page.path,
            style: {
              navigationBarTitleText: page.title,
            },
          }
        }),
      }
      compilation.assets[pagesJsonPath] = new RawSource(JSON.stringify(content, null, 2))
    })
  }
}

export default MiniPageWebpackPlugin
