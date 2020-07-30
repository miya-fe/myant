import MiniPageWebpackPlugin from '../../src/compiler/mini-page-webpack-plugin'

// 自定义vue配置
module.exports = {
  chainWebpack: (config) => {},
  configureWebpack: {
    plugins: [new MiniPageWebpackPlugin()],
  },
}
