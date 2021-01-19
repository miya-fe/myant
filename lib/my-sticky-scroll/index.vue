<template>
  <scroll-view scroll-y :scroll-top="scrollTop" :scroll-left="scrollLeft" class="container" @scroll="handleScroll">
    <slot></slot>
  </scroll-view>
</template>

<script>
export default {
  name: 'MyStickyScroll',
  props: {
    scrollTop: {
      type: [Number, String]
    },
    scrollLeft: {
      type: [Number, String]
    }
  },
  data: () => {
    return {
      _sticky_: true,
      stickyList: []
    }
  },
  computed: {},
  methods: {
    onParentScroll(fn) {
      this.stickyList.push(fn)
      return () => {
        this.stickyList = this.stickyList.filter((_fn) => fn !== _fn)
      }
    },
    getScrollOffset() {
      return new Promise((resolve, reject) => {
        try {
          const query = uni.createSelectorQuery()
          query.in(this).select('.container').scrollOffset()

          query.exec(([offset]) => {
            resolve({ scrollTop: offset.scrollTop, scrollLeft: offset.scrollLeft })
          })
        } catch (e) {
          resolve({ scrollTop: 0, scrollLeft: 0 })
        }
      })
    },
    handleScroll(e) {
      // eslint-disable-next-line array-callback-return
      this.stickyList.map((fn) => {
        fn(e)
      })
    }
  }
}
</script>
<style scoped lang="less">
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
