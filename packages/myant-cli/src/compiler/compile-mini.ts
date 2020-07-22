import { MINI_DIST_DIR, TPl_MINI_DIR } from '../common/constant'
import execa from 'execa'

export type Option = {
  platform: 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-qq' | 'mp-toutiao'
  output_dir?: string
  target?: 'all' | 'mini' | 'site'
}

/**
 * 打包组件
 */
function build(cmd: Option) {}

function runMiniServer(option: Option = { platform: 'mp-weixin' }) {
  let command = `cross-env NODE_ENV=production UNI_PLATFORM=${option.platform} UNI_OUTPUT_DIR=${
    option.output_dir || MINI_DIST_DIR
  } vue-cli-service uni-build`
  let subProcess = execa.command(command, {
    localDir: TPl_MINI_DIR,
    execPath: TPl_MINI_DIR,
  })

  ;(subProcess as any).stdout.pipe(process.stdout)

  process.on('beforeExit', (code) => {
    console.log('miniServer will exit')
    subProcess.kill(code)
  })
}

export function buildMiniSite(cmd: Option) {}

/**
 * 编译小程序
 * @param cmd
 */
export function compileMini(isProduction: boolean = false, cmd: Option) {
  if (isProduction) {
    build(cmd)
  } else {
    runMiniServer(cmd)
  }
}
