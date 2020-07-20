import webpackDevServer from 'webpack-dev-server'
import { ROOT } from '../common/constant'

/**
 * 打包组件
 */
async function build() {}

function watch() {}

export async function compileMini(isDevelop: boolean = true) {
  // 不是开发模式
  if (!isDevelop) {
    await build()
  } else {
    watch()
  }
}
