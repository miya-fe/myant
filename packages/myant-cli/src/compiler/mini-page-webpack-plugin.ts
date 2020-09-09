import webpack, { Compiler } from 'webpack'
import { RawSource } from 'webpack-sources'
import { getMyantConfig, smartOutputFile } from '../common'
import { get, difference } from 'lodash'
import { TPl_MINI_SRC_DIR } from '../common/constant'
import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs-extra'

type NavItem = {
  title: string
  path: string
}
type PageItem = {
  path: string
  style?: any
}

const PLUGIN_NAME = 'gen-mini-page-entry'

function isModified(oldPages: PageItem[], newPages: PageItem[]) {
  let modified = false
  for (let op of oldPages) {
    if (!newPages.find((p) => p.path === op.path)) {
      modified = true
      break
    }
  }

  return modified
}

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

  genSubPackages() {
    /*let pagesJsonPath = 'app.json'
    // 更新page.json里面的页面配置
    if (!compilation.assets[pagesJsonPath]) {
      return
    }*/
    let pagesJsonPath = join(TPl_MINI_SRC_DIR, 'pages.json')

    let locales = get(getMyantConfig(), `site.locales`, {}),
      pages: NavItem[] = []

    for (let lang of Object.keys(locales)) {
      //TODO: 目前只支持中文版
      if (lang.toLowerCase() === 'zh-cn') {
        let navs = get(locales[lang], `nav`, [])
        // let navs = get(config, `site.locales['zh-CN'].nav`, [])
        pages = pages.concat(
          navs.reduce((list: NavItem[], nav: { items: NavItem[] }) => {
            return list.concat(
              nav.items.map((item: NavItem) => {
                return {
                  title: item.title,
                  // path: `${lang}/${item.path}`,
                  path: item.path,
                }
              })
            )
          }, [])
        )
      }
    }

    // 更新page.json里面的页面配置
    // let content = this.toJson(compilation.assets[pagesJsonPath])
    let content = JSON.parse(readFileSync(pagesJsonPath).toString()) as any,
      subPages = pages.map((page: NavItem) => {
        return {
          path: join(page.path, 'index').replace(/\\/g, '/'),
          style: {
            navigationBarTitleText: page.title,
          },
        }
        // return `${page.path}/index`
      }),
      subPackages = [
        {
          root: 'demos',
          pages: subPages,
        },
      ]

    if (
      content.subPackages[0].pages.length !== subPages.length ||
      isModified(content.subPackages[0].pages, subPages)
    ) {
      content.subPackages = subPackages
      writeFileSync(pagesJsonPath, JSON.stringify(content, null, 2))
    }
  }

  /**
   * 自定义插件入口方法
   * @param compiler
   */
  apply(compiler: Compiler): void {
    /*compiler.hooks.emit.tap(PLUGIN_NAME, (compilation, nmf) => {
      this.genSubPackages(compilation)
    })*/
    if (process.env.NODE_ENV === 'production') {
      // Executes a plugin after compilation parameters are created.
      compiler.hooks.beforeCompile.tap(PLUGIN_NAME, this.genSubPackages)
    } else {
      // Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started
      compiler.hooks.watchRun.tap(PLUGIN_NAME, this.genSubPackages)
    }
  }
}

module.exports = MiniPageWebpackPlugin

export default MiniPageWebpackPlugin
