import {
  getSrcFiles,
  smartOutputFile,
  getPackageJson,
  normalizePath,
  getMyantConfig,
  pascalize,
} from '../common'
import {
  SRC_DIR,
  SITE_DESKTOP_SHARED_FILE,
  MYANT_CONFIG_FILE,
  DOCS_DIR,
  ROOT,
} from '../common/constant'
import { existsSync } from 'fs-extra'
import { join, parse } from 'path'
import glob from 'fast-glob'
import { doc } from 'prettier'

function formatName(component: string, lang?: string) {
  component = pascalize(component)

  if (lang) {
    return `${component}_${lang.replace('-', '_')}`
  }

  return component
}

/**
 * 解析src中的组件和ROOT目录下docs中的*.md组件
 */
type Document = { name: string; path: string }
function resolveComponents(): Document[] {
  let documents: Document[] = []
  getSrcFiles().forEach((file: string) => {
    if (existsSync(join(SRC_DIR, file, 'index.vue'))) {
      documents.push({
        name: file,
        path: join(SRC_DIR, file, 'index.vue'),
      })
    }
  })

  glob.sync(normalizePath(join(DOCS_DIR, '**/*.md'))).forEach((path: string) => {
    const pairs = parse(path).name.split('.'),
      name = formatName(pairs[0], pairs[1])
    if (!documents.find((item) => item.name === name)) {
      documents.push({
        name,
        path,
      })
    }
  })
  return documents
  // return [...files, ...staticDocs.filter((item: {name: string, path: string})=>files.indexOf(item.name) === -1)]
}

function genPackageVersion() {
  return `export const version = '${getPackageJson().version}'`
}

function genImportCode(files: Document[]): string {
  let components: string[] = []
  files.forEach((doc: Document) => {
    // components.push(`import ${doc.name} from '@src/${doc.name}/README.md'`)
    components.push(`import ${doc.name} from '${doc.path}'`)
  })

  return components.join('\n')
}

function genExportCode(components: Document[]) {
  return `export const documents = {${components.map((doc) => doc.name).join(',')}}`
}

function genMyantConfigCode() {
  return `
  import config from '${normalizePath(MYANT_CONFIG_FILE)}'
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

export default genSiteDesktopShared
