import {
  MINI_DEV_DIR,
  MINI_PROD_DIR,
  TPl_MINI_DIR,
  TPl_MINI_SRC_DIR,
  SRC_DIR,
  LIB_DIR,
} from '../common/constant'
import { getSrcFiles, copySrcDir, copyDemoDir, isDemoDir, isTestDir } from '../common'
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
function build() {
  let dirs = getSrcFiles()
  emptyDirSync(LIB_DIR)

  dirs.forEach((dirName: string) => {
    if (existsSync(join(SRC_DIR, dirName, 'index.vue'))) {
      copySrcDir(join(SRC_DIR, dirName), join(LIB_DIR, dirName))
    }
  })
}

async function runMiniCommand(cmd: string) {
  let subProcess = execa.command(cmd, {
    localDir: TPl_MINI_DIR,
    execPath: TPl_MINI_DIR,
  })

  ;(subProcess as any).stdout.pipe(process.stdout)

  await new Promise((resolve, reject) => {
    process.on('beforeExit', (code) => {
      console.log('miniServer will exit')
      subProcess.kill(code)
    })

    process.on('exit', (code) => {
      resolve(code)
    })
  })
}

function runMiniServer(option: Option = { platform: 'mp-weixin' }) {
  let command = `cross-env NODE_ENV=development UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_DEV_DIR
  } vue-cli-service uni-build`
  runMiniCommand(command)
}

export async function buildMiniSite(option: Option) {
  let command = `cross-env NODE_ENV=production UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_PROD_DIR
  } vue-cli-service uni-build`
  await runMiniCommand(command)
}

function watchFileChange() {
  const DemoTplDir = join(TPl_MINI_SRC_DIR, 'demo')
  removeSync(DemoTplDir)
  copyDemoDir(SRC_DIR, DemoTplDir)

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
    build()
  } else {
    runMiniServer(cmd)
    watchFileChange()
  }
}
