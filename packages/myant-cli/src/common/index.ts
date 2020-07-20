export type NODE_ENV = 'production' | 'development' | 'test'
export type MODULE_ENV = 'esmodule' | 'commonjs'

export function setNodeEnv(env: NODE_ENV) {
  process.env.NODE_ENV = env
}

export function setModuleEnv(env: MODULE_ENV) {
  process.env.MODULE_ENV = env
}
