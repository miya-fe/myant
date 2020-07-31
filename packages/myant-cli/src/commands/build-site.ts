import { buildMiniSite, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'
import { setNodeEnv } from '../common'

export async function buildSite(cmd: Option) {
  setNodeEnv('production')
  if (cmd.target === 'mini') {
    buildMiniSite(cmd)
  } else if (cmd.target === 'site') {
    await compileSite(true)
  } else {
    buildMiniSite(cmd)
    compileSite(true)
  }
}
