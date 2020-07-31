import { remove } from 'fs-extra'
import { LIB_DIR, DIST_DIR, SITE_DIST_DIR } from '../common/constant'

export async function clean() {
  await Promise.all([remove(LIB_DIR), remove(DIST_DIR), remove(SITE_DIST_DIR)])
}
