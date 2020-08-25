
import Vue from 'vue'
import App from './App'
// import { install } from 'site-mini-shared'
Vue.config.productionTip = false
// install(Vue)

    import Icon from '@/components/icon/index'
    Vue.component('icon', Icon)
    

    import MyButton from '@/components/my-button/index'
    Vue.component('my-button', MyButton)
    
const app = new Vue({
  ...App,
})
app.$mount()
