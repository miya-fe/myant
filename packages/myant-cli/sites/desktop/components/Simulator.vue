<template>
  <div :class="['myant-doc-simulator', { 'myant-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
    <!--    <img :src="src" />-->
  </div>
</template>

<script>
export default {
  name: 'myant-doc-simulator',

  props: {
    src: String
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    }
  },

  watch: {
    '$route.path'(path, oldVal) {
      let paths = path.split('/')
      this.$nextTick(() => {
        this.$refs.iframe.contentWindow.syncH5Path(paths[paths.length - 1] || '')
      })
    }
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90)
      return {
        height: height + 'px'
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY
    })
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
    })
  }
}
</script>

<style lang="less">
@import '../../common/style/var';

.myant-doc-simulator {
  position: absolute;
  top: @myant-doc-padding + @myant-doc-header-top-height;
  right: @myant-doc-padding;
  z-index: 1;
  box-sizing: border-box;
  width: @myant-doc-simulator-width;
  min-width: @myant-doc-simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: @myant-doc-border-radius;
  box-shadow: #ebedf0 0 4px 12px;

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: @myant-doc-row-max-width) {
    right: 50%;
    margin-right: -@myant-doc-row-max-width / 2 + 40px;
  }

  &-fixed {
    position: fixed;
    top: @myant-doc-padding;
  }

  iframe {
    display: block;
    width: 100%;
  }

  img {
    width: 100%;
  }
}
</style>
