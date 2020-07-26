<template>
  <section class="myant-doc-demo-section" :class="demoName">
    <slot />
  </section>
</template>

<script>
import { decamelize } from '../../common'

export default {
  name: 'demo-section',

  computed: {
    demoName() {
      const { meta } = this.$route || {}
      if (meta && meta.name) {
        return `demo-${decamelize(meta.name)}`
      }

      return ''
    },
  },
}
</script>

<style lang="less">
.myant-doc-demo-section {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
}
</style>
