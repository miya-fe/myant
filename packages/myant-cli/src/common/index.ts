import execa from 'execa'
import consola from 'consola'
import { MYANT_CONFIG_FILE } from './constant'

export type NODE_ENV = 'production' | 'development' | 'test'
export type MODULE_ENV = 'esmodule' | 'commonjs'

export function setNodeEnv(env: NODE_ENV) {
  process.env.NODE_ENV = env
}

export function setModuleEnv(env: MODULE_ENV) {
  process.env.MODULE_ENV = env
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

export function getMyantConfig() {
  delete require.cache[MYANT_CONFIG_FILE]

  try {
    return require(MYANT_CONFIG_FILE)
  } catch (err) {
    return {}
  }
}
