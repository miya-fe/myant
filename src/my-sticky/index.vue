<template>
  <view class="sticky" :style="divStyle">
    <view class="sticky-inner" :style="stickyStyle">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MySticky',
  props: {
    // 自定义样式
    styles: {
      type: [Object, String],
      default: () => {
        return {}
      }
    },
    // 距离顶部 固定的距离
    offsetTop: {
      type: Number,
      default: 1
    }
  },
  data: () => {
    return {
      sticky: false,
      visible: false,
      // scrollPosition: {},
      transform: 0,
      stickPosition: {}
    }
  },
  computed: {
    divStyle() {
      let styles = [],
        keys = []
      if (typeof this.styles === 'string') {
        styles.push(this.styles)
      } else {
        keys = Object.keys(this.styles)
      }

      if (this.sticky && typeof this.stickPosition.width !== 'undefined') {
        styles.push(`width:${this.stickPosition.width}px;height:${this.stickPosition.height}px`)
      }

      keys.forEach((key) => {
        styles.push(`${key}: ${this.styles[key]}`)
      })

      return styles.join(';')
    },
    stickyStyle() {
      if (this.sticky) {
        let styles = [this.divStyle, `position: fixed;top:${parseFloat(this.offsetTop)}px;left:${this.stickPosition.left}px`]

        return styles.join(';')
      }
      return ''
    }
  },
  mounted() {
    if (!uni.createIntersectionObserver) {
      return
    }
    // 获取 sticky 位置信息
    this.setStickyPosition()
    // 检测是否可见
    // this.checkIsVisible()
    this.intersectionObserver = uni.createIntersectionObserver(this)
    this.intersectionObserver.relativeToViewport({ top: -this.offsetTop }).observe(`.sticky`, (res) => {
      if (res.intersectionRect.top > 0) {
        this.visible = true
      } else {
        this.visible = false
      }
    })

    this.getStickyParent().onParentScroll(({ detail }) => {
      this.handleScroll({ detail })
    })
  },
  beforeDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
      this.intersectionObserver = null
    }
  },
  methods: {
    getStickyParent() {
      if (this.stickyParent) {
        return this.stickyParent
      }

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
      this.stickyParent = parent
      return parent
    },
    setStickyPosition() {
      this.getStickyParent()
        .getScrollOffset()
        .then(({ scrollTop, scrollLeft }) => {
          const query = uni.createSelectorQuery()
          query.in(this).select('.sticky').boundingClientRect()

          query.exec(([clientRect]) => {
            this.stickPosition = {
              ...clientRect,
              top: clientRect.top + scrollTop,
              left: clientRect.left + scrollLeft
            }
          })
        })
    },
    handleScroll(e) {
      const { detail } = e
      if (!this.visible) {
        return
      }

      if (this.stickPosition.top <= detail.scrollTop + parseFloat(this.offsetTop)) {
        this.sticky = true
        this.$emit('onChange', {
          isFixed: true,
          detail
        })
      } else {
        this.sticky = false
        this.$emit('onChange', {
          isFixed: false,
          detail
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.sticky {
  overflow-y: auto;
}

.sticky-inner {
  overflow-y: auto;
}
</style>
