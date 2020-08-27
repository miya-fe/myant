import { Compiler } from 'webpack'
import { genSiteMobileShared } from './gen-site-mobile-shared'
import { genSiteDesktopShared } from './gen-site-desktop-shared'
import { genSiteMiniShared } from './gen-site-mini-shared'

enum Platform {
  mini = 'mini',
  desktop = 'desktop',
  mobile = 'mobile',
}
type Option = {
  platform?: Platform[]
}
const PLUGIN_NAME = 'myant-cli-site-plugin'

function genSiteEntry(option: Option) {
  return async () => {
    if (!option.platform) {
      await genSiteMobileShared()
      await genSiteDesktopShared()
      await genSiteMiniShared()
    } else if (option.platform.indexOf(Platform.mini) > -1) {
      await genSiteMiniShared()
    } else if (option.platform.indexOf(Platform.desktop) > -1) {
      await genSiteDesktopShared()
    } else if (option.platform.indexOf(Platform.mobile) > -1) {
      await genSiteMobileShared()
    }
  }
}

class MyantCliSitePlugin {
  private option: Option
  constructor(option?: Option) {
    this.option = option || {}
  }

  apply(compiler: Compiler) {
    if (process.env.NODE_ENV === 'production') {
      // Executes a plugin after compilation parameters are created.
      compiler.hooks.beforeCompile.tapPromise(PLUGIN_NAME, genSiteEntry(this.option))
    } else {
      // Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry(this.option))
    }
  }
}

export { MyantCliSitePlugin, Platform }
