import { Compiler } from 'webpack'
// import { genSiteMobileShared } from './gen-site-mobile-shared'
import { genSiteDesktopShared } from './gen-site-desktop-shared'

type Option = {}
const PLUGIN_NAME = 'myant-cli-site-plugin'

async function genSiteEntry() {
  // await genSiteMobileShared()
  await genSiteDesktopShared()
}

class MyantCliSitePlugin {
  private option: Option
  constructor(option?: Option) {
    this.option = option || {}
  }

  apply(compiler: Compiler) {
    if (process.env.NODE_ENV === 'production') {
      // Executes a plugin after compilation parameters are created.
      compiler.hooks.beforeCompile.tapPromise(PLUGIN_NAME, genSiteEntry)
    } else {
      // Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry)
    }
  }
}

export { MyantCliSitePlugin }
