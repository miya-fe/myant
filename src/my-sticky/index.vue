<template>
  <scroll-view scroll-y class="scroll" :style="divStyle" @scroll="handleScroll">
    <slot name="prev"></slot>

    <view class="sticky" :style="stickyStyle">
      <view class="sticky-inner" :style="fixedStickyStyle">
        <slot name="sticky"></slot>
      </view>
    </view>
    <slot name="next"></slot>
  </scroll-view>
</template>

<script lang="ts">
export default {
  name: 'MySticky',
  props: {
    // 自定义样式
    style: {
      type: [Object, String],
      default: () => {
        return {
          height: '100%'
        }
      }
    },
    // 距离顶部 固定的距离
    top: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => {
    return {
      sticky: false,
      visible: false,
      scrollPosition: {},
      transform: 0,
      stickPosition: {}
    }
  },
  computed: {
    divStyle() {
      this.style = this.style || { height: '100%' }
      if (typeof this.style === 'string') {
        return this.style
      }
      let styles: string[] = [],
        keys: Array<string | number> = Object.keys(this.style)

      keys.forEach((key: string | number) => {
        styles.push(`${key}: ${this.style[key]}`)
      })
      return styles.join(';')
    },
    isFixedSticky() {
      return this.sticky
    },
    fixedStickyStyle() {
      if (this.isFixedSticky) {
        let styles = [
          `position: fixed;top:${this.scrollPosition.top + parseFloat(this.top)}px;left:${this.stickPosition.left}px;width:${this.stickPosition.width}px;height:${this.stickPosition.height}px`
        ]
        /* if (this.transform) {
          styles.push(`transform: translate3d(0, ${this.transform}px, 0)`)
        } */
        return styles.join(';')
      }
      return ''
    },
    stickyStyle() {
      if (typeof this.stickPosition.width !== 'undefined') {
        return [`width:${this.stickPosition.width}px`, `height:${this.stickPosition.height}px`].join(';')
      }
      return ''
    }
  },
  mounted(): void {
    if (!uni.createIntersectionObserver) {
      return
    }
    // 获取 sticky 位置信息
    this.getStickyRect()
    // 检测是否可见
    // this.checkIsVisible()

    this.intersectionObserver = uni.createIntersectionObserver(this)
    this.intersectionObserver.relativeTo('.scroll', { top: -this.top }).observe(`.sticky`, (res) => {
      if (res.intersectionRect.top > 0) {
        this.visible = true
      } else {
        this.visible = false
      }
    })
  },
  beforeDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
      this.intersectionObserver = null
    }
  },
  methods: {
    getStickyRect() {
      const query = uni.createSelectorQuery()
      query.in(this).select('.scroll').boundingClientRect()
      query.in(this).select('.sticky').boundingClientRect()
      query.exec(([scrollRect, clientRect]) => {
        this.scrollPosition = scrollRect
        this.stickPosition = clientRect
      })
    },
    checkIsVisible() {
      const query = uni.createSelectorQuery()
      query.in(this).select('.sticky').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(([clientRect, offset]) => {
        this.sticky = clientRect.top - offset.scrollTop <= this.top
      })
    },
    handleScroll(e) {
      const { detail } = e
      // let top = detail.scrollTop - (this.stickPosition.top - this.scrollPosition.top) + parseFloat(this.top)
      // let maxTop = detail.scrollHeight - this.stickPosition.height
      // this.transform = top > maxTop ? maxTop : top
      // this.transform = 0
      if (!this.visible) {
        return
      }

      if (this.stickPosition.top - this.scrollPosition.top < detail.scrollTop + parseFloat(this.top)) {
        this.sticky = true
        this.$emit('scroll', {
          isFixed: true,
          detail
        })
      } else {
        this.sticky = false
        this.$emit('scroll', {
          isFixed: false,
          detail
        })
      }
    }
  }
}
</script>
<style scoped lang="less">
.scroll {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  border: 1rpx solid red;
}
</style>
