import Vue from 'vue'
import App from './App'
// import { install } from 'site-mini-shared'
Vue.config.productionTip = false
// install(Vue)

const app = new Vue({
  ...App,
})
app.$mount()
