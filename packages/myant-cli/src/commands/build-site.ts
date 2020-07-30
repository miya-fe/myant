import { buildMiniSite, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'

export async function buildSite(cmd: Option) {
  if (cmd.target === 'mini') {
    buildMiniSite(cmd)
  } else if (cmd.target === 'site') {
    await compileSite(true)
  } else {
    buildMiniSite(cmd)
    compileSite(true)
  }
}
