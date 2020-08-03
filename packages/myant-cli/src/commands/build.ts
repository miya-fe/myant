import { setNodeEnv } from '../common'
import { compileMini, Option } from '../compiler/compile-mini'
import { remove } from 'fs-extra'
import { LIB_DIR } from '../common/constant'

export async function build(cmd?: Option) {
  setNodeEnv('production')
  await Promise.all([remove(LIB_DIR)])
  await compileMini(true)
}
