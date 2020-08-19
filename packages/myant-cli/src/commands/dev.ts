import { setNodeEnv } from '../common'
import { compileMini, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'

export async function devMini(cmd: Option) {
  setNodeEnv('development')

  if (cmd.target === 'mini') {
    compileMini(false, cmd)
  } else if (cmd.target === 'site') {
    await compileSite(false)
  } else {
    compileMini(false, cmd)
    await compileSite(false)
  }
}

//TODO
export async function devVue() {
  console.warn('dev vue is building')
}
//TODO
export async function devReact() {
  console.warn('dev react is building')
}
