import { buildH5Demo, buildMiniSite, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'
import { setNodeEnv, getSiteOutputDir } from '../common'
import { remove } from 'fs-extra'
import { SITE_MOBILE_SHARED_FILE, SITE_MINI_SHARED_FILE, MINI_PROD_DIR, SITE_DESKTOP_SHARED_FILE } from '../common/constant'

/**
 * 支持打包：demo小程序 | demo H5站点 | PC官网使用说明
 * @param cmd
 */
export async function buildSite(cmd: Option) {
  setNodeEnv('production')
  // await Promise.all([remove(LIB_DIR), remove(DIST_DIR), remove(SITE_DIST_DIR)])
  if (cmd.target === 'mini') {
    await Promise.all([remove(cmd.output_dir || MINI_PROD_DIR), remove(SITE_MINI_SHARED_FILE)])
    await buildMiniSite(cmd)
  } else if (cmd.target === 'h5') {
    await Promise.all([remove(getSiteOutputDir('h5'))])
    await buildH5Demo(cmd)
  } else if (cmd.target === 'site') {
    await Promise.all([remove(getSiteOutputDir('desktop')), remove(SITE_DESKTOP_SHARED_FILE), remove(SITE_MOBILE_SHARED_FILE)])
    await compileSite(true)
  } else {
    await Promise.all([
      remove(cmd.output_dir || MINI_PROD_DIR),
      remove(getSiteOutputDir('desktop')),
      remove(SITE_DESKTOP_SHARED_FILE),
      remove(SITE_MOBILE_SHARED_FILE),
      remove(SITE_MINI_SHARED_FILE),
      remove(getSiteOutputDir('h5'))
    ])
    await buildMiniSite(cmd)
    await compileSite(true)
    await buildH5Demo(cmd)
  }
}
