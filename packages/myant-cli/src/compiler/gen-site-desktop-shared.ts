import { getSrcFiles, smartOutputFile, getPackageJson, normalizePath } from '../common'
import { SRC_DIR, SITE_DESKTOP_SHARED_FILE, MYANT_CONFIG_FILE } from '../common/constant'
import { existsSync } from 'fs-extra'
import { join } from 'path'

function resolveComponents(): string[] {
  let files = getSrcFiles().filter((file: string) => {
    return existsSync(join(SRC_DIR, file, 'index.vue'))
  })
  return files
}

function genPackageVersion() {
  return `export const version = '${getPackageJson().version}'`
}

function genImportCode(files: string[]): string {
  let components: string[] = []
  files.forEach((file: string) => {
    components.push(`import ${file} from '@src/${file}/README.MD'`)
  })

  return components.join('\n')
}

function genExportCode(components: string[]) {
  return `export const documents = {${components.join(',')}}`
}

function genMyantConfigCode() {
  return `
  import config from '${normalizePath(MYANT_CONFIG_FILE)}';
  export {config}`
}

export function genSiteDesktopShared(): void {
  let components = resolveComponents()
  let code = `
    ${genImportCode(components)}
    ${genExportCode(components)}
    ${genPackageVersion()}
    ${genMyantConfigCode()}
  `
  smartOutputFile(SITE_DESKTOP_SHARED_FILE, code)
}
