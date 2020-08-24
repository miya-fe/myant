import { getPackageJson, getSrcFiles, smartOutputFile, normalizePath } from '../common'
import {
  SRC_DIR,
  SITE_MINI_SHARED_FILE,
  MYANT_CONFIG_FILE,
  TPl_MINI_COMPONENT_DIR,
} from '../common/constant'
import { existsSync } from 'fs-extra'
import { join } from 'path'

function genCode(): string {
  let components: string[] = []
  let files = getSrcFiles().filter((file: string) => {
    return existsSync(join(SRC_DIR, file, 'index.vue'))
  })
  files.forEach((file: string) => {
    let name = file.replace(/-/g, '_')

    components.push(`import ${name} from '${TPl_MINI_COMPONENT_DIR}/${file}/index'`)
  })
  let packageJson = getPackageJson()

  return `
    import config from '${normalizePath(MYANT_CONFIG_FILE)}'
    ${components.join('\n')}

    const version='${packageJson.version}'

    function install(Vue){
      const components = [${files.map((file) => file.replace(/-/g, '_')).join(',')}];

      components.forEach(item => {
        if (item.install) {
          Vue.use(item);
        } else if (item.name) {
          Vue.component(item.name, item);
        }
      });
    }

    export {
      config,
      install,
      version
    }
    export default {
      install,
      version
    }
  `
}

export function genSiteMiniShared(): void {
  let code = genCode()
  smartOutputFile(SITE_MINI_SHARED_FILE, code)
}
