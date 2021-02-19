<template>
  <view class="sticky" :class="randomClassName" :style="divStyle">
    <view v-if="!sticky" :style="stickyStyle">
      <slot></slot>
    </view>
    <view v-if="sticky" :style="stickyStyle">
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
      default: 0
    },
    zIndex: {
      type: Number,
      default: 9
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
      let styles = [`z-index:${this.zIndex}`],
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
        let top = this.offsetTop
        // #ifdef H5
        top += 44 // H5有一个默认的头部
        // #endif
        let styles = [this.divStyle, `position: fixed;top:${parseFloat(top)}px;left:${this.stickPosition.left}px`]

        return styles.join(';')
      }
      return ''
    },
    randomClassName() {
      return `sticky-${Math.floor(Math.random() * 100000)}`
    }
  },
  mounted() {
    if (!uni.createIntersectionObserver) {
      return
    }
    // 获取 sticky 位置信息
    this.setStickyPosition()

    // #ifdef H5
    this.intersectionObserver = new IntersectionObserver(
      ([res]) => {
        if (res.intersectionRect.top > 0) {
          this.visible = true
        } else {
          this.visible = false
        }
      },
      {
        root: document.querySelector('.__sticky_scroll__'),
        rootMargin: `${-(this.offsetTop || 0) - 1}px 0px 0px 0px`
      }
    )
    this.intersectionObserver.observe(document.querySelector(`.${this.randomClassName}`))
    // #endif

    // #ifndef H5
    this.intersectionObserver = uni.createIntersectionObserver(this)
    this.intersectionObserver.relativeToViewport({ top: -this.offsetTop - 1 }).observe(`.sticky`, (res) => {
      if (res.intersectionRect.top > 0) {
        this.visible = true
      } else {
        this.visible = false
      }
    })
    // #endif

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
        .then(({ scrollTop, scrollLeft, offsetTop, offsetLeft }) => {
          const query = uni.createSelectorQuery()
          query.in(this).select(`.${this.randomClassName}`).boundingClientRect()

          query.exec(([clientRect]) => {
            this.stickPosition = {
              ...clientRect,
              // top: clientRect.top + scrollTop,
              // left: clientRect.left + scrollLeft
              top: clientRect.top - offsetTop + scrollTop,
              left: clientRect.left - offsetLeft + scrollLeft
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
        this.$emit('change', {
          isFixed: true,
          detail
        })
      } else {
        this.sticky = false
        this.$emit('change', {
          isFixed: false,
          detail
        })
      }
    }
  }
}
</script>
