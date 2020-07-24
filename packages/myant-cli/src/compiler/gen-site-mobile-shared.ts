import { getPackageJson, getSrcFiles, smartOutputFile } from '../common'
import { SRC_DIR, SITE_MOBILE_SHARED_FILE } from '../common/constant'
import { existsSync } from 'fs-extra'
import { join } from 'path'

function genCode(): string {
  let components: string[] = []
  let files = getSrcFiles().filter((file: string) => {
    return existsSync(join(SRC_DIR, file, 'index.vue'))
  })
  files.forEach((file: string) => {
    components.push(`import ${file} from '@src/${file}/demo'`)
  })
  let packageJson = getPackageJson()

  return `
    ${components.join('\n')}

    const version='${packageJson.version}'

    function install(Vue){
      const components = ${files};

      components.forEach(item => {
        if (item.install) {
          Vue.use(item);
        } else if (item.name) {
          Vue.component(item.name, item);
        }
      });
    }

    export {
      install,
      version,
      ${files.join(',\n')}

    }

    export default {
      install,
      version
    }
  `
}

export function genSiteMobileShared(): void {
  let code = genCode()
  smartOutputFile(SITE_MOBILE_SHARED_FILE, code)
}
