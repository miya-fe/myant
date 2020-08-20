import { buildMiniSite, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'
import { setNodeEnv, getSiteOutputDir } from '../common'
import { remove } from 'fs-extra'
import {
  SITE_MOBILE_SHARED_FILE,
  SITE_MINI_SHARED_FILE,
  MINI_PROD_DIR,
  SITE_DESKTOP_SHARED_FILE,
} from '../common/constant'
import { get } from 'lodash'
import { join } from 'path'

export async function buildSite(cmd: Option) {
  setNodeEnv('production')
  // await Promise.all([remove(LIB_DIR), remove(DIST_DIR), remove(SITE_DIST_DIR)])
  if (cmd.target === 'mini') {
    await Promise.all([remove(cmd.output_dir || MINI_PROD_DIR), remove(SITE_MINI_SHARED_FILE)])
    await buildMiniSite(cmd)
  } else if (cmd.target === 'site') {
    await Promise.all([
      remove(getSiteOutputDir('desktop')),
      remove(SITE_DESKTOP_SHARED_FILE),
      remove(SITE_MOBILE_SHARED_FILE),
    ])
    await compileSite(true)
  } else {
    await Promise.all([
      remove(cmd.output_dir || MINI_PROD_DIR),
      remove(getSiteOutputDir('desktop')),
      remove(SITE_DESKTOP_SHARED_FILE),
      remove(SITE_MOBILE_SHARED_FILE),
      remove(SITE_MINI_SHARED_FILE),
    ])
    await buildMiniSite(cmd)
    await compileSite(true)
  }
}
