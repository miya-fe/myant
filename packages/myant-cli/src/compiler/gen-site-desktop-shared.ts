import {
  getSrcFiles,
  smartOutputFile,
  getPackageJson,
  pascalize,
  getMyantConfig,
  formatPlatformOutputPath,
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
import { get } from 'lodash'

function formatName(component: string, lang?: string) {
  component = pascalize(component)

  if (lang) {
    return `${component}_${lang.replace('-', '_')}`
    // return `${component}_${lang}`
  }

  return component
}

/**
 * 解析src中的组件和ROOT目录下docs中的*.md组件
 */
type Document = { name: string; path: string }
function resolveComponents(): Document[] {
  let documents: Document[] = [],
    locales = get(getMyantConfig(), 'site.locales', {})

  getSrcFiles().forEach((file: string) => {
    for (let lang of Object.keys(locales)) {
      if (existsSync(join(SRC_DIR, file, `README.${lang}.md`))) {
        documents.push({
          name: formatName(file, lang),
          path: formatPlatformOutputPath(join(SRC_DIR, file, `README.${lang}.md`)),
        })
      }
    }
  })

  glob.sync(join(DOCS_DIR, '**/*.md')).forEach((path: string) => {
    const pairs = parse(path).name.split('.'),
      name = formatName(pairs[0], pairs[1])
    if (!documents.find((item) => item.name === name)) {
      documents.push({
        name,
        path: formatPlatformOutputPath(path),
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
    // let url = doc.path.replace(SRC_DIR, '@')
    components.push(`import ${doc.name} from '${formatPlatformOutputPath(doc.path)}'`)
  })

  return components.join('\n')
}

function genExportCode(components: Document[]) {
  return `export const documents = {${components.map((doc) => doc.name).join(',')}}`
}

function genMyantConfigCode() {
  return `
  import config from '${formatPlatformOutputPath(MYANT_CONFIG_FILE)}'
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
