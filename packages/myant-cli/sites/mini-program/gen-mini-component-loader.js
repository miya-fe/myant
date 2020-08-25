const { getSrcFiles, pascalize } = require('../../lib/common')
const { SRC_DIR, TPl_MINI_COMPONENT_DIR, TPl_MINI_SRC_DIR } = require('../../lib/common/constant')
const { join } = require('path')
const { outputFileSync, existsSync } = require('fs-extra')
const mainFile = join(__dirname, 'src', 'main.ts')

module.exports = function () {
  let components = [],
    files = getSrcFiles().filter((file) => {
      return existsSync(join(SRC_DIR, file, 'index.vue'))
    }),
    componentPath = TPl_MINI_COMPONENT_DIR.replace(TPl_MINI_SRC_DIR, '')
  files.forEach((file) => {
    let name = pascalize(file)
    components.push(`
    import ${name} from '@${componentPath}/${file}/index'
    Vue.component('${file}', ${name})
    `)
  })

  outputFileSync(
    mainFile,
    `
import Vue from 'vue'
import App from './App'
// import { install } from 'site-mini-shared'
Vue.config.productionTip = false
// install(Vue)
${components.join('\n')}
const app = new Vue({
  ...App,
})
app.$mount()
`
  )
}
