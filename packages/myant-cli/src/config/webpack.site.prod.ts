import { merge } from 'webpack-merge'
import { join } from 'path'
import WebpackBar from 'webpackbar'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import { baseConfig } from './webpack.base'
import { MyantCliSitePlugin, Platform } from '../compiler/myant-cli-site-plugin'
import { getMyantConfig, getSiteOutputDir, getSitePublicPath } from '../common'
import { GREEN, SITE_DESKTOP_SHARED_FILE, SRC_DIR } from '../common/constant'
import { get } from 'lodash'

export function getSiteProdWebpackConfig(site: string = 'desktop'): Configuration {
  let myantConfig = getMyantConfig(),
    siteConfig = get(myantConfig, `site.locales['zh-CN']`, {})
  // const outputDir = get(myantConfig, `build.${site}.outputDir`, join(SITE_DIST_DIR, site))
  const outputDir = getSiteOutputDir(site)
  const publicPath = getSitePublicPath()

  let siteProdWebpackConfig = {
    mode: 'production',
    stats: 'none',
    entry: {
      'site-desktop': [join(__dirname, '../../sites/desktop/main.js')],
      // 'site-mobile': [join(__dirname, '../../sites/mobile/main.js')],
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
        // 'site-mobile-shared': SITE_MOBILE_SHARED_FILE,
        'site-desktop-shared': SITE_DESKTOP_SHARED_FILE,
      },
    },
    output: {
      publicPath,
      path: outputDir,
      filename: '[name].[hash:8].js',
      chunkFilename: 'async_[name].[chunkhash:8].js',
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
        chunks: ['chunks', 'site-' + site],
        template: join(__dirname, '../../sites/desktop/index.html'),
        filename: 'index.html',
        baiduAnalytics: siteConfig.baiduAnalytics,
      }),
    ],
  }

  // @ts-ignore
  return merge(baseConfig, siteProdWebpackConfig, get(myantConfig, `build.${site}.webpack`, {}))
}
