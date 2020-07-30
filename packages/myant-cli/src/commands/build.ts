import { setNodeEnv } from '../common'
import { compileMini, Option } from '../compiler/compile-mini'

export async function build(cmd?: Option) {
  setNodeEnv('production')
  await compileMini(true)
}
