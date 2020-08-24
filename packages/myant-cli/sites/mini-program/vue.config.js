const { MyantCliSitePlugin, Platform } = require('../../lib/compiler/myant-cli-site-plugin')
const { SITE_MINI_SHARED_FILE } = require('../../lib/common/constant')
const MiniPageWebpackPlugin = require('../../lib/compiler/mini-page-webpack-plugin')
const genMiniComponentLoader = require('../../lib/compiler/gen-mini-component-loader')
const { join } = require('path')
const { outputFileSync, readFileSync } = require('fs-extra')
const mainFile = join(__dirname, 'src', 'main.ts')
console.log(genMiniComponentLoader(''))
outputFileSync(
  mainFile,
  `
import Vue from 'vue'
import App from './App'
// import { install } from 'site-mini-shared'
Vue.config.productionTip = false
// install(Vue)
${genMiniComponentLoader('')}
const app = new Vue({
  ...App,
})
app.$mount()
`
)

// 自定义vue配置
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('site-mini-shared', SITE_MINI_SHARED_FILE)

    /*config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('gen-mini-component-loader')
      .loader('../../lib/compiler/gen-mini-component-loader')
      .tap((options) => {
        return {
          ...options,
        }
      })*/
  },
  configureWebpack: {
    /*resolve: {
      alias: {
        // '@/src': SRC_DIR,
        // 'site-mobile-shared': SITE_MOBILE_SHARED_FILE,
        'site-mini-shared': SITE_MINI_SHARED_FILE,
      },
    },*/
    plugins: [new MyantCliSitePlugin({ platform: [Platform.mini] }), new MiniPageWebpackPlugin()],
  },
}
