import { getPackageJson, getSrcFiles, smartOutputFile, normalizePath } from '../common'
import { SRC_DIR, SITE_MINI_SHARED_FILE, MYANT_CONFIG_FILE } from '../common/constant'
import { existsSync } from 'fs-extra'
import { join } from 'path'

function genCode(): string {
  let packageJson = getPackageJson()

  return `
    import config from '${normalizePath(MYANT_CONFIG_FILE)}'
    const version='${packageJson.version}'
    export {
      config,
      version
    }
    export default {
      config,
      version
    }
  `
}

export function genSiteMiniShared(): void {
  let code = genCode()
  smartOutputFile(SITE_MINI_SHARED_FILE, code)
}
