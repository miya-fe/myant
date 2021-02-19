import Vue from 'vue'
import App from './App'
// import { install } from 'site-mini-shared'
Vue.config.productionTip = false
// install(Vue)

// #ifdef H5
window.syncH5Path = function (hash) {
  // http://localhost:8081/#/demos/my-badge/index
  let url = `/pages/home/index`
  if (hash.indexOf('my-') > -1) {
    url = `/demos/${hash}/index`
  }
  uni.redirectTo({
    url
  })
}
// #endif

const app = new Vue({
  ...App
})
app.$mount()
