import {
  MINI_DEV_DIR,
  MINI_PROD_DIR,
  TPl_MINI_DIR,
  TPl_MINI_SRC_DIR,
  SRC_DIR,
  LIB_DIR,
} from '../common/constant'
import { getSrcFiles, copySrcDir, copyDemoDir, hasYarn, isTestDir } from '../common'
import execa from 'execa'
import { emptyDirSync, existsSync, copySync, removeSync } from 'fs-extra'
import { join } from 'path'
import chokidar from 'chokidar'
import ora from 'ora'

export type Option = {
  platform?: 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-qq' | 'mp-toutiao'
  output_dir?: string
  target?: 'all' | 'mini' | 'site'
}

/**
 * 打包组件
 */
function buildComponent() {
  let dirs = getSrcFiles()
  emptyDirSync(LIB_DIR)

  dirs.forEach((dirName: string) => {
    if (existsSync(join(SRC_DIR, dirName, 'index.vue'))) {
      copySrcDir(join(SRC_DIR, dirName), join(LIB_DIR, dirName))
    }
  })
}

async function runMiniCommand(cmd: string) {
  if (!existsSync(join(TPl_MINI_DIR, 'node_modules'))) {
    if (hasYarn()) {
      execa.commandSync('yarn install')
    } else {
      execa.commandSync('npm install')
    }
  }

  /*let args = cmd.split(' ')
  await execa('cross-env', args.slice(1), {
    preferLocal: true,
    localDir: TPl_MINI_DIR,
    execPath: TPl_MINI_DIR,
    stdout: process.stdout,
  })*/

  execa.commandSync(cmd, {
    preferLocal: true,
    cwd: TPl_MINI_DIR,
    localDir: TPl_MINI_DIR,
    execPath: TPl_MINI_DIR,
    stdout: process.stdout,
  })
}

async function runMiniServer(option: Option = { platform: 'mp-weixin' }) {
  let command = `cross-env NODE_ENV=development UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_DEV_DIR
  } vue-cli-service uni-build`
  await runMiniCommand(command)
}

export async function buildMiniSite(option: Option) {
  copyMiniDemo()
  let command = `cross-env NODE_ENV=production UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_PROD_DIR
  } vue-cli-service uni-build`
  await runMiniCommand(command)
}

function copyMiniDemo() {
  const DemoTplDir = join(TPl_MINI_SRC_DIR, 'demos')
  removeSync(DemoTplDir)
  copyDemoDir(SRC_DIR, DemoTplDir)
}

function watchFileChange() {
  copyMiniDemo()
  const DemoTplDir = join(TPl_MINI_SRC_DIR, 'demos')

  chokidar.watch(SRC_DIR).on('change', async (path) => {
    if (!isTestDir(path)) {
      return
    }

    const miniPath = path.replace(SRC_DIR, DemoTplDir)

    const spinner = ora('File changed, start copy...').start()
    try {
      await copySync(path, miniPath)
      spinner.succeed('Compiled: ' + miniPath)
    } catch (err) {
      spinner.fail('Compile failed: ' + path)
    }
  })
}

/**
 * 编译小程序
 * @param cmd
 */
export function compileMini(isProduction: boolean = false, cmd?: Option) {
  if (isProduction) {
    buildComponent()
  } else {
    watchFileChange()
    runMiniServer(cmd)
  }
}
