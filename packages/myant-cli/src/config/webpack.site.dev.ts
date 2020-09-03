import { merge } from 'webpack-merge'
import { join } from 'path'
import WebpackBar from 'webpackbar'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import { baseConfig } from './webpack.base'
import { MyantCliSitePlugin, Platform } from '../compiler/myant-cli-site-plugin'
import { getMyantConfig, getSiteOutputDir } from '../common'
import {
  SRC_DIR,
  GREEN,
  SITE_MOBILE_SHARED_FILE,
  SITE_DESKTOP_SHARED_FILE,
} from '../common/constant'
import { get } from 'lodash'

export function getSiteDevWebpackConfig(site: string = 'desktop'): Configuration {
  let myantConfig = getMyantConfig(),
    siteConfig = get(myantConfig, `site`, {})

  let siteDevWebpackConfig = {
    entry: {
      'site-desktop': [join(__dirname, '../../sites/desktop/main.js')],
      // 'site-mobile': [join(__dirname, '../../sites/mobile/main.js')],
    },
    devServer: {
      port: 8080,
      quiet: true,
      host: '0.0.0.0',
      stats: 'errors-only',
      publicPath: '/',
      disableHostCheck: true,
    },
    resolve: {
      alias: {
        '@/src': SRC_DIR,
        // 'site-mobile-shared': SITE_MOBILE_SHARED_FILE,
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
      new MyantCliSitePlugin({ platform: [Platform.mobile, Platform.desktop] }),
      new HtmlWebpackPlugin({
        title: siteConfig.title,
        logo: siteConfig.logo,
        description: siteConfig.description,
        chunks: ['chunks', 'site-desktop'],
        template: join(__dirname, '../../sites/desktop/index.html'),
        filename: 'index.html',
        baiduAnalytics: siteConfig.baiduAnalytics,
      }),
    ],
  }

  // @ts-ignore
  return merge(baseConfig, siteDevWebpackConfig)
}