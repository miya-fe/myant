<template>
  <div class="app">
    <myant-doc
      :lang="lang"
      :config="config"
      :versions="versions"
      :simulator="simulator"
      :lang-configs="langConfigs"
    >
      <router-view />
    </myant-doc>
  </div>
</template>

<script>
import MyantDoc from './components'
import { config, version } from 'site-desktop-shared'
import { setLang } from '../common/locales'

export default {
  components: {
    MyantDoc,
  },

  data() {
    // const path = location.pathname.replace(/\/index(\.html)?/, '/')

    return {
      packageVersion: version,
      // simulator: `${path}mobile.html${location.hash}`,
      simulator: `http://hh-oss-picture.miyapay.com/box/f8811cbfed3d08e19f9707fabf224510.jpeg`,
    }
  },

  computed: {
    lang() {
      const { lang } = this.$route.meta
      return lang || ''
    },

    langConfigs() {
      const { locales = {} } = config.site
      return Object.keys(locales).map((key) => ({
        lang: key,
        label: locales[key].langLabel || '',
      }))
    },

    config() {
      const { locales } = config.site

      if (locales) {
        return locales[this.lang]
      }

      return config.site
    },

    versions() {
      if (config.site.versions) {
        return [{ label: packageVersion }, ...config.site.versions]
      }

      return null
    },
  },

  watch: {
    lang(val) {
      setLang(val)
      this.setTitle()
    },
  },

  created() {
    this.setTitle()
  },

  methods: {
    setTitle() {
      let { title } = this.config

      if (this.config.description) {
        title += ` - ${this.config.description}`
      }

      document.title = title
    },
  },
}
</script>

<style lang="less">
@import '../common/style/base';
@import '../common/style/highlight';

.myant-doc-intro {
  padding-top: 20px;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
