
    import config from '/jobdoc/miyaworkspace/myant/myant.config.js'
    const version='0.1.0'
    import MyButton from '@/my-components/my-button/index.vue'
import MyIcon from '@/my-components/my-icon/index.vue'
    function install(Vue) {
      Vue.component('my-button', MyButton)
Vue.component('my-icon', MyIcon)
      /*const components = [
        MyButton,MyIcon
      ];

      components.forEach(item => {
        if (item.install) {
          Vue.use(item);
        } else if (item.name) {
          Vue.component(item.name, item);
        }
      });*/
    }

    export {
      config,
      install,
      version,
      MyButton,MyIcon
    }
    export default {
      version,
      install
    }
  