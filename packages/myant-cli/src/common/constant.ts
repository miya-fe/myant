import fse from 'fs-extra'
import { join, dirname, isAbsolute } from 'path'

function findRootDir(dir: string): string {
  if (dir === '/') {
    return '/'
  }

  if (fse.existsSync(join(dir, 'myant.config.js'))) {
    return dir
  }

  return findRootDir(dirname(dir))
}

export const GREEN = '#eaa130'

// 项目根目录
export const CWD = process.cwd()
export const ROOT = findRootDir(CWD)
export const SRC_DIR = join(ROOT, 'src')
// export const ES_DIR = join(ROOT, 'es')
export const LIB_DIR = join(ROOT, 'lib')
export const DOCS_DIR = join(ROOT, 'docs')
export const SITE_DIST_DIR = join(ROOT, 'dist')
export const MINI_DEV_DIR = join(SITE_DIST_DIR, 'dev', 'mini-program')
export const MINI_PROD_DIR = join(SITE_DIST_DIR, 'prod', 'mini-program')
export const MYANT_CONFIG_FILE = join(ROOT, 'myant.config.js')
export const PACKAGE_JSON_FILE = join(ROOT, 'package.json')
export const CACHE_DIR = join(ROOT, 'node_modules', '.cache')

export const SITE_MINI_SHARED_FILE = join(SITE_DIST_DIR, 'site-mini-shared.js')
export const SITE_MOBILE_SHARED_FILE = join(SITE_DIST_DIR, 'site-mobile-shared.js')
export const SITE_DESKTOP_SHARED_FILE = join(SITE_DIST_DIR, 'site-desktop-shared.js')
export const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js')

console.log('__dirname', __dirname)
console.log('CWD', CWD)
console.log('ROOT', ROOT)
// cli 相对目录
export const DIST_DIR = join(__dirname, '../../dist')
export const CONFIG_DIR = join(__dirname, '../config')
export const TPl_MINI_DIR = join(__dirname, '../../sites/mini-program')
export const TPl_MINI_SRC_DIR = join(TPl_MINI_DIR, 'src')
export const TPl_MINI_COMPONENT_DIR = join(TPl_MINI_SRC_DIR, 'components')

console.log('DIST_DIR', DIST_DIR)
console.log('CONFIG_DIR', CONFIG_DIR)
console.log('TPl_MINI_DIR', TPl_MINI_DIR)
console.log('TPl_MINI_SRC_DIR', TPl_MINI_SRC_DIR)
console.log('TPl_MINI_COMPONENT_DIR', TPl_MINI_COMPONENT_DIR)

// 默认的postcss配置信息
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js')

export const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx']
export const STYLE_EXTS = ['.css', '.less', '.scss']
