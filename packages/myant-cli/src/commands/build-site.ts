import { buildMiniSite, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'
import { setNodeEnv, getSiteOutputDir } from '../common'
import { remove } from 'fs-extra'
import { DIST_DIR, LIB_DIR, SITE_DIST_DIR } from '../common/constant'
import { get } from 'lodash'
import { join } from 'path'

export async function buildSite(cmd: Option) {
  setNodeEnv('production')
  // await Promise.all([remove(LIB_DIR), remove(DIST_DIR), remove(SITE_DIST_DIR)])
  if (cmd.target === 'mini') {
    await buildMiniSite(cmd)
  } else if (cmd.target === 'site') {
    await Promise.all([remove(getSiteOutputDir('desktop'))])
    await compileSite(true)
  } else {
    await buildMiniSite(cmd)
    await compileSite(true)
  }
}
