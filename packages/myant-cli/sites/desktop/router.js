import Vue from 'vue'
import VueRouter from 'vue-router'
import { isMobile, decamelize } from '../common'
import { config, documents } from 'site-desktop-shared'
import { getLang, setDefaultLang } from '../common/locales'
// import '../common/iframe-router'

/*if (isMobile) {
  location.replace('mobile.html' + location.hash)
}*/
console.log('config', config)
console.log('documents', documents)
const { locales, defaultLang } = config.site

setDefaultLang(defaultLang)

function parseName(name) {
  if (name.indexOf('_') !== -1) {
    const pairs = name.split('_')
    const component = pairs.shift()

    return {
      component: `${decamelize(component)}`,
      lang: pairs.join('-'),
    }
  }

  return {
    component: `${decamelize(name)}`,
    lang: '',
  }
}

function getLangFromRoute(route) {
  const lang = route.path.split('/')[1]
  const langs = Object.keys(locales)

  if (langs.indexOf(lang) !== -1) {
    return lang
  }

  return getLang()
}

function getRoutes() {
  const routes = []
  const names = Object.keys(documents)

  if (locales) {
    routes.push({
      path: '*',
      redirect: (route) => `/${getLangFromRoute(route)}/`,
    })
  } else {
    routes.push({
      path: '*',
      redirect: '/',
    })
  }

  function addHomeRoute(Home, lang) {
    routes.push({
      name: lang,
      path: `/${lang || ''}`,
      component: Home,
      meta: { lang },
    })
  }

  console.log('names', names)
  names.forEach((name) => {
    const { component, lang } = parseName(name)

    if (component === 'home') {
      addHomeRoute(documents[name], '')
    }

    routes.push({
      name: `${component}`,
      path: `/${component}`,
      component: documents[name],
      meta: {
        name: component,
      },
    })
  })

  return routes
}

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'hash',
  routes: getRoutes(),
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 }
  },
})

/*router.afterEach(() => {
  Vue.nextTick(() => window.syncPath())
})*/

window.vueRouter = router
