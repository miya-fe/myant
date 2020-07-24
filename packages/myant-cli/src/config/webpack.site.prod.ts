import merge from 'webpack-merge'
import { join } from 'path'
import WebpackBar from 'webpackbar'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import { baseConfig } from './webpack.base'
import { MyantCliSitePlugin } from '../compiler/myant-cli-site-plugin'
import { getMyantConfig } from '../common'
import { GREEN } from '../common/constant'

export function getSiteProdWebpackConfig(): Configuration {
  let myantConfig = getMyantConfig(),
    siteConfig = myantConfig.site || {}

  let siteDevWebpackConfig = {
    entry: {
      'site-desktop': [join(__dirname, '../../sites/desktop/main.js')],
      'site-mobile': [join(__dirname, '../../sites/mobile/main.js')],
    },
    resolve: {
      alias: {
        'site-mobile-shared': SITE_MODILE_SHARED_FILE,
        'site-desktop-shared': SITE_DESKTOP_SHARED_FILE,
      },
    },
    output: {
      chunkFilename: '[name].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunks: {
            chunks: 'all',
            minChunks: 2,
            minSize: 0,
            name: 'chunks',
          },
        },
      },
    },
    plugins: [
      new WebpackBar({
        name: 'myant cli',
        color: GREEN,
      }),
      new MyantCliSitePlugin(),
      new HtmlWebpackPlugin({
        title: siteConfig.title,
        logo: siteConfig.logo,
        description: siteConfig.description,
        chunks: ['chunks', 'site-desktop'],
        template: join(__dirname, '../../sites/desktop/index.html'),
        filename: 'index.html',
        baiduAnalytics: siteConfig.baiduAnalytics,
      }),
      new HtmlWebpackPlugin({
        title: siteConfig.title,
        logo: siteConfig.logo,
        description: siteConfig.description,
        chunks: ['chunks', 'site-mobile'],
        template: join(__dirname, '../../sites/mobile/index.html'),
        filename: 'mobile.html',
        baiduAnalytics: siteConfig.baiduAnalytics,
      }),
    ],
  }

  // @ts-ignore
  return merge(baseConfig, siteDevWebpackConfig)
}
