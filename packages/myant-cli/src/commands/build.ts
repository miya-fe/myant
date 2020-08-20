import { setNodeEnv } from '../common'
import { compileMini, Option } from '../compiler/compile-mini'
import { remove } from 'fs-extra'
import { LIB_DIR } from '../common/constant'
import consola from 'consola'

export async function build(cmd?: Option) {
  setNodeEnv('production')
  consola.info('开始清除缓存')
  await Promise.all([remove(LIB_DIR)])
  await compileMini(true)
}
