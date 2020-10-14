<template>
  <scroll-view class="container">
    <slot></slot>
  </scroll-view>
</template>

<script lang="ts">
export default {
  name: 'MyStickyScroll',
  props: {},
  data: () => {
    return {}
  },
  computed: {
    stickyParent() {
      let parent = this.$parent

      while (parent) {
        if (parent.$data._sticky_) {
          break
        } else if (parent.$parent) {
          parent = parent.$parent
        } else {
          parent = null
        }
      }

      return parent as any
    }
  },
  mounted(): void {
    if (!this.stickyParent) {
      throw Error('my-sticky-scroll 需要放置于 my-sticky 组件中')
    }
    // this.$parent.onParentScroll(this.onParentScroll)
  },
  methods: {
    onParentScroll({ scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY }) {
      console.log({ scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY })
    }
  }
}
</script>
<style scoped lang="less">
.container {
  height: 1000rpx;
}
</style>
