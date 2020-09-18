import execa from 'execa'
import consola from 'consola'
import { platform } from 'os'
import {
  PACKAGE_JSON_FILE,
  MYANT_CONFIG_FILE,
  SRC_DIR,
  ROOT_POSTCSS_CONFIG_FILE,
  SITE_DIST_DIR,
} from './constant'
import {
  readFileSync,
  outputFileSync,
  readdirSync,
  existsSync,
  lstatSync,
  copySync,
} from 'fs-extra'
import { join, basename } from 'path'
import { get } from 'lodash'

export type NODE_ENV = 'production' | 'development' | 'test'
export type MODULE_ENV = 'esmodule' | 'commonjs'

export function setNodeEnv(env: NODE_ENV) {
  process.env.NODE_ENV = env
}

export function setModuleEnv(env: MODULE_ENV) {
  process.env.MODULE_ENV = env
}

export function getSiteOutputDir(site: string) {
  return join(get(getMyantConfig(), `site.outputDir`, SITE_DIST_DIR), site)
}

export function getSitePublicPath() {
  return get(getMyantConfig(), `site.publicPath`, '')
}

export function isDemoDir(dirName: string) {
  return /(\/|\\|\.)demo\/?/g.test(dirName)
}

export function isTestDir(dirName: string) {
  return /(\/|\\|\.)test\/?/g.test(dirName)
}

export function isMDFile(dirName: string) {
  return /\.md$/.test(dirName.toLowerCase())
}

export function isSrcFiles(file: string) {
  return !isTestDir(file) && !isDemoDir(file) && !isMDFile(file)
}

export function getSrcFiles() {
  return readdirSync(SRC_DIR)
}

export function isComponentEntry(filePath: string): boolean {
  let fileName = basename(filePath),
    dirs = filePath
      .replace(SRC_DIR, '')
      .replace(/\\/g, '/')
      .split('/')
      .filter((dir) => dir !== '')

  if (fileName === 'index.vue' && dirs.length === 2) {
    return true
  } else {
    return false
  }
}

export function copySrcDir(fromDir: string, toDir: string, isDemo?: boolean) {
  if (isTestDir(fromDir) || isDemoDir(fromDir)) {
    return
  }
  let files = readdirSync(fromDir)
  files.forEach((file: string) => {
    let srcPath = join(fromDir, file),
      destPath = join(toDir, file)
    let stat = lstatSync(srcPath)

    if (stat.isDirectory()) {
      copySrcDir(srcPath, destPath, isDemo)
    } else {
      //拷贝mini开发包，需要个是如下：<路径>/<组价名>/<组件名>.vue
      if (isDemo && isComponentEntry(srcPath)) {
        if (!existsSync(join(fromDir, `${fromDir}.vue`))) {
          copySync(srcPath, join(toDir, `${basename(fromDir)}.vue`))
        } else {
          copySync(srcPath, destPath)
        }
      } else {
        copySync(srcPath, destPath)
      }
    }
  })
}

export function copyDemoDir(fromDir: string, toDir: string, demo: string = 'demo') {
  if (isTestDir(fromDir)) {
    return
  }
  let files = readdirSync(fromDir)
  files.forEach((file: string) => {
    let srcPath = join(fromDir, file, demo),
      destPath = join(toDir, file)

    if (existsSync(srcPath)) {
      let stat = lstatSync(srcPath)

      if (stat.isDirectory()) {
        copyDemoDir(srcPath, destPath, '')
      } else {
        copySync(srcPath, destPath)
      }
    }
  })
}

let installedYarn: boolean
export function hasYarn() {
  if (installedYarn === undefined) {
    try {
      execa.sync('yarn', ['--version'], { stdio: 'ignore' })
      installedYarn = true
    } catch (e) {
      installedYarn = false
    }
  }
  return installedYarn
}

export async function installDependencies() {
  consola.info('Install Dependencies\n')

  try {
    const manager = hasYarn() ? 'yarn' : 'npm'

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit',
    })

    consola.log('')
  } catch (err) {
    consola.log(err)
    throw err
  }
}

export function getPackageJson() {
  delete require.cache[PACKAGE_JSON_FILE]

  return require(PACKAGE_JSON_FILE)
}

export function getMyantConfig() {
  delete require.cache[MYANT_CONFIG_FILE]

  try {
    return require(MYANT_CONFIG_FILE)
  } catch (err) {
    return {}
  }
}

export function getPostcssConfig(): object {
  if (existsSync(ROOT_POSTCSS_CONFIG_FILE)) {
    return require(ROOT_POSTCSS_CONFIG_FILE)
  }

  return {}
}

export function smartOutputFile(filePath: string, content: string) {
  if (existsSync(filePath)) {
    const previousContent = readFileSync(filePath, 'utf-8')

    if (previousContent === content) {
      return
    }
  }

  outputFileSync(filePath, content)
}

export function normalizePath(path: string) {
  return path.replace(/\\/, '/')
}

const camelizeRE = /-(\w)/g
const pascalizeRE = /(\w)(\w*)/g

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

export function pascalize(str: string): string {
  return camelize(str).replace(pascalizeRE, (_, c1, c2) => c1.toUpperCase() + c2)
}

export function isWin() {
  if (/^win/.test(platform())) {
    return true
  } else {
    return false
  }
}

export function formatPlatformOutputPath(path: string): string {
  if (isWin()) {
    return path.replace(/\\/g, '\\\\')
  } else {
    return path
  }
}
