const { MyantCliSitePlugin } = require('../../lib/compiler/myant-cli-site-plugin')
const { SITE_MINI_SHARED_FILE } = require('../../lib/common/constant')
const MiniPageWebpackPlugin = require('../../lib/compiler/mini-page-webpack-plugin')

// 自定义vue配置
module.exports = {
  chainWebpack: (config) => {},
  configureWebpack: {
    resolve: {
      alias: {
        // '@/src': SRC_DIR,
        // 'site-mobile-shared': SITE_MOBILE_SHARED_FILE,
        'site-mini-shared': SITE_MINI_SHARED_FILE,
      },
    },
    plugins: [new MyantCliSitePlugin(), new MiniPageWebpackPlugin()],
  },
}
