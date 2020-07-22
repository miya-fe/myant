import { Compiler } from 'webpack'

type Option = {}
class MyantCliSitePlugin {
  private option: Option
  constructor(option?: Option) {
    this.option = option || {}
  }

  apply(compiler: Compiler) {}
}

export { MyantCliSitePlugin }
