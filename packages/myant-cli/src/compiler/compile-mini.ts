import {
  MINI_DEV_DIR,
  MINI_PROD_DIR,
  TPl_MINI_DIR,
  TPl_MINI_SRC_DIR,
  SRC_DIR,
  LIB_DIR,
  TPl_MINI_COMPONENT_DIR,
} from '../common/constant'
import {
  getSrcFiles,
  copySrcDir,
  copyDemoDir,
  hasYarn,
  isTestDir,
  isDemoDir,
  isComponentEntry,
  isWin,
} from '../common'
import execa from 'execa'
import {
  emptyDirSync,
  existsSync,
  copyFile,
  removeSync,
  createReadStream,
  createWriteStream,
} from 'fs-extra'
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

function runMiniCommand(cmd: string) {
  if (!existsSync(join(TPl_MINI_DIR, 'node_modules'))) {
    consola.info('检测到未安装小程序依赖模块，现在开始安装')
    if (hasYarn()) {
      execa.commandSync('yarn install', {
        preferLocal: true,
        cwd: TPl_MINI_DIR,
        localDir: TPl_MINI_DIR,
        execPath: TPl_MINI_DIR,
        stdout: process.stdout,
      })
    } else {
      execa.commandSync('npm install', {
        preferLocal: true,
        cwd: TPl_MINI_DIR,
        localDir: TPl_MINI_DIR,
        execPath: TPl_MINI_DIR,
        stdout: process.stdout,
      })
    }
  } else {
    consola.success('小程序依赖模块已安装')
  }

  execa.command(cmd, {
    preferLocal: true,
    cwd: TPl_MINI_DIR,
    localDir: TPl_MINI_DIR,
    execPath: TPl_MINI_DIR,
    stdout: process.stdout,
  })
}

function runMiniServer(option: Option = { platform: 'mp-weixin' }) {
  option.platform = option.platform || 'mp-weixin'
  let command = `cross-env NODE_ENV=development UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_DEV_DIR
  } vue-cli-service uni-build --watch`
  runMiniCommand(command)
  consola.success('小程序开发服务已启动')
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
  copySrcDir(SRC_DIR, TPl_MINI_COMPONENT_DIR, true)
}

function watchFileChange() {
  copyMiniDemo()
  copyMiniComponent()

  const DemoTplDir = join(TPl_MINI_SRC_DIR, 'demos')
  const SrcTplDir = TPl_MINI_COMPONENT_DIR
  consola.info(`开启文件监听： ${SRC_DIR}`)
  chokidar.watch(SRC_DIR).on('change', async (path) => {
    consola.info(`监听到文件变动，开始检测: ` + path)
    if (isTestDir(path)) {
      consola.info('当前文件为单元测试，放弃拷贝')
      return
    }

    let miniPath
    //path = path.replace(/\\/g, '/')
    if (isDemoDir(path)) {
      miniPath = path.replace(SRC_DIR, DemoTplDir).replace(/(\/|\\)demo(\/|\\)/, '$1')
    } else {
      miniPath = path.replace(SRC_DIR, SrcTplDir)
    }
    consola.info(`开始拷贝文件: ${path}`)
    const spinner = ora('File changed, start copy...').start()
    try {
      if (isComponentEntry(path)) {
        if (isWin()) {
          miniPath = miniPath.replace(/\\([^\\]+)\\index.vue$/, '\\$1\\$1.vue')
        } else {
          miniPath = miniPath.replace(/\/([^\/]+)\/index.vue$/, '/$1/$1.vue')
        }
      }
      await copyFile(path, miniPath)
      // createReadStream(path).pipe(createWriteStream(miniPath))
      spinner.succeed('Compiled: ' + miniPath)
      consola.success('拷贝成功')
    } catch (err) {
      spinner.fail('Compile failed: ' + miniPath)
      consola.success('拷贝失败', err)
    }
  })

  consola.success('文件监听已启动')
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
 * 编译小程序
 * @param cmd
 */
export async function compileMini(isProduction: boolean = false, cmd?: Option) {
  if (isProduction) {
    buildComponent()
  } else {
    watchFileChange()
    runMiniServer(cmd)
  }
}
