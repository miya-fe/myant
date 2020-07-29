import config from '/jobdoc/miyaworkspace/myant/myant.config.js'
import button from '@src/button/demo'

const version = '0.1.0'

function install(Vue) {
  const components = [button]

  components.forEach((item) => {
    if (item.install) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

const demos = { button }
export { config, install, version, demos }

export default {
  install,
  version,
}
