import { MINI_DEV_DIR, MINI_PROD_DIR, TPl_MINI_DIR, SRC_DIR, LIB_DIR } from '../common/constant'
import { getSrcFiles, copySrcDir } from '../common'
import execa from 'execa'
import { emptyDirSync, existsSync } from 'fs-extra'
import { join } from 'path'

export type Option = {
  platform: 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-qq' | 'mp-toutiao'
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

function runMiniCommand(cmd: string) {
  let subProcess = execa.command(cmd, {
    localDir: TPl_MINI_DIR,
    execPath: TPl_MINI_DIR,
  })

  ;(subProcess as any).stdout.pipe(process.stdout)

  process.on('beforeExit', (code) => {
    console.log('miniServer will exit')
    subProcess.kill(code)
  })
}

function runMiniServer(option: Option = { platform: 'mp-weixin' }) {
  let command = `cross-env NODE_ENV=development UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_DEV_DIR
  } vue-cli-service uni-build`
  runMiniCommand(command)
}

export function buildMiniSite(option: Option) {
  let command = `cross-env NODE_ENV=production UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_PROD_DIR
  } vue-cli-service uni-build`
  runMiniCommand(command)
}

/**
 * 编译小程序
 * @param cmd
 */
export function compileMini(isProduction: boolean = false, cmd: Option) {
  if (isProduction) {
    build()
  } else {
    runMiniServer(cmd)
  }
}
