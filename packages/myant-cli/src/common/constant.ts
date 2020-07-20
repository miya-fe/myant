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

// 项目根目录
export const CWD = process.cwd()
export const ROOT = findRootDir(CWD)
export const ES_DIR = join(ROOT, 'es')
export const LIB_DIR = join(ROOT, 'lib')
export const DOCS_DIR = join(ROOT, 'docs')
export const SITE_DIST_DIR = join(ROOT, 'site')
export const MYANT_CONFIG_FILE = join(ROOT, 'myant.config.js')
export const PACKAGE_JSON_FILE = join(ROOT, 'package.json')
export const CACHE_DIR = join(ROOT, 'node_modules/.cache')

// cli 相对目录
export const DIST_DIR = join(__dirname, '../../dist')
export const CONFIG_DIR = join(__dirname, '../config')

// 默认的postcss配置信息
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js')

export const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx']
export const STYLE_EXTS = ['.css', '.less', '.scss']
