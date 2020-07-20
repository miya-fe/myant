import { setNodeEnv } from '../common'
import { compileMini } from '../compiler/compile-mini'

export async function devMini() {
  setNodeEnv('development')

  await compileMini(true)
}

export async function devVue() {}
export async function devReact() {}
