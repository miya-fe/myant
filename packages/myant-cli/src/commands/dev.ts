import { setNodeEnv } from '../common'
import { compileMini, Option } from '../compiler/compile-mini'
import { compileSite } from '../compiler/compile-site'
import consola from 'consola'

export async function devMini(cmd: Option) {
  setNodeEnv('development')

  if (cmd.target === 'mini') {
    await compileMini(false, cmd)
  } else if (cmd.target === 'site') {
    await compileSite(false)
  } else {
    await compileMini(false, cmd)
    await compileSite(false)
  }
}

//TODO
export async function devVue() {
  consola.info('dev vue is building')
}
//TODO
export async function devReact() {
  consola.info('dev react is building')
}
