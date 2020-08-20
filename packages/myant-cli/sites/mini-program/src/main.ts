import Vue from 'vue'
import App from './App.vue'
import { install } from 'site-mini-shared'
Vue.config.productionTip = false

install(Vue)

new App().$mount()
