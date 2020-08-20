import {
  MINI_DEV_DIR,
  MINI_PROD_DIR,
  TPl_MINI_DIR,
  TPl_MINI_SRC_DIR,
  SRC_DIR,
  LIB_DIR,
  TPl_MINI_COMPONENT_DIR,
} from '../common/constant'
import { getSrcFiles, copySrcDir, copyDemoDir, hasYarn, isTestDir, isDemoDir } from '../common'
import execa from 'execa'
import { emptyDirSync, existsSync, copySync, removeSync } from 'fs-extra'
import { join } from 'path'
import chokidar from 'chokidar'
import ora from 'ora'
import consola from 'consola'

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
  consola.success('组件打包已完成')
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
  option.platform = option.platform || 'mp-weixin'
  let command = `cross-env NODE_ENV=development UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_DEV_DIR
  } vue-cli-service uni-build --watch`
  await runMiniCommand(command)
  consola.success('小程序开发服务已启动')
}

export async function buildMiniSite(option: Option) {
  consola.info('开始拷贝目标文件')
  copyMiniDemo()
  copyMiniComponent()
  consola.success('完成拷贝目标文件')
  option.platform = option.platform || 'mp-weixin'
  let command = `cross-env NODE_ENV=production UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_PROD_DIR
  } vue-cli-service uni-build`
  await runMiniCommand(command)
  consola.success('小程序打包已完成')
}

/**
 * 拷贝组件demo
 */
function copyMiniDemo() {
  const DemoTplDir = join(TPl_MINI_SRC_DIR, 'demos')
  removeSync(DemoTplDir)
  copyDemoDir(SRC_DIR, DemoTplDir)
}

/**
 * 拷贝组件
 */
function copyMiniComponent() {
  removeSync(TPl_MINI_COMPONENT_DIR)
  copySrcDir(SRC_DIR, TPl_MINI_COMPONENT_DIR)
}

function watchFileChange() {
  copyMiniDemo()
  copyMiniComponent()

  const DemoTplDir = join(TPl_MINI_SRC_DIR, 'demos')
  const SrcTplDir = TPl_MINI_COMPONENT_DIR

  chokidar.watch(SRC_DIR).on('change', async (path) => {
    consola.info('监听到文件变动，开始检测')
    if (isTestDir(path)) {
      consola.info('当前文件为单元测试，放弃拷贝')
      return
    }
    let miniPath
    if (isDemoDir(path)) {
      miniPath = path.replace(SRC_DIR, DemoTplDir)
    } else {
      miniPath = path.replace(SRC_DIR, SrcTplDir)
    }

    consola.info(`开始拷贝文件: ${miniPath}`)
    const spinner = ora('File changed, start copy...').start()
    try {
      await copySync(path, miniPath)
      spinner.succeed('Compiled: ' + miniPath)
      consola.success('拷贝成功')
    } catch (err) {
      spinner.fail('Compile failed: ' + path)
      consola.success('拷贝失败', err)
    }
  })

  consola.success('文件监听已启动')
}

/**
 * 编译小程序
 * @param cmd
 */
export async function compileMini(isProduction: boolean = false, cmd?: Option) {
  if (isProduction) {
    buildComponent()
  } else {
    watchFileChange()
    await runMiniServer(cmd)
  }
}
