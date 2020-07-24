import execa from 'execa'
import consola from 'consola'
import { PACKAGE_JSON_FILE, MYANT_CONFIG_FILE, SRC_DIR } from './constant'
import {
  readFileSync,
  outputFileSync,
  readdirSync,
  existsSync,
  lstatSync,
  copyFileSync,
} from 'fs-extra'
import { join } from 'path'

export type NODE_ENV = 'production' | 'development' | 'test'
export type MODULE_ENV = 'esmodule' | 'commonjs'

export function setNodeEnv(env: NODE_ENV) {
  process.env.NODE_ENV = env
}

export function setModuleEnv(env: MODULE_ENV) {
  process.env.MODULE_ENV = env
}

export function isDemoDir(dirName: string) {
  return /(\/|\.)demo\/?/g.test(dirName)
}

export function isTestDir(dirName: string) {
  return /(\/|\.)test\/?/g.test(dirName)
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

export function copySrcDir(fromDir: string, toDir: string) {
  if (isTestDir(fromDir) || isDemoDir(fromDir)) {
    return
  }
  let files = readdirSync(fromDir)
  files.forEach((file: string) => {
    let stat = lstatSync(file)

    if (stat.isDirectory()) {
      copySrcDir(join(fromDir, file), join(toDir, file))
    } else {
      copyFileSync(join(fromDir, file), join(toDir, file))
    }
  })
}

let installedYarn: boolean
function hasYarn() {
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
