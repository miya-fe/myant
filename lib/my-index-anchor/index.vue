<template>
  <block>
    <view class="index-anchor" :style="divStyle">
      <view v-if="!sticky" :style="stickyStyle">
        <text>{{ index }}</text>
      </view>
    </view>
    <view v-if="sticky" class="index-anchor" :style="stickyStyle">
      <text>{{ index }}</text>
    </view>
  </block>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'MyIndexAnchor'
})
export default class IndexAnchor extends Vue {
  @Prop({ type: Number, default: 0 }) readonly offsetTop: number
  @Prop({ type: String, default: 0 }) readonly index: string
  @Prop({
    type: [Object, String],
    default: ''
  })
  readonly style: string | object
  sticky = false
  visible = false
  anchorPosition = {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    offsetLeft: 0,
    offsetTop: 0
  }
  stickyParent: any
  intersectionObserver: any
  get divStyle() {
    let styles = [],
      keys = []

    if (typeof this.style === 'string') {
      styles.push(this.style)
    } else {
      keys = Object.keys(this.style)
    }

    if (this.sticky && typeof this.anchorPosition.width !== 'undefined') {
      styles.push(`width:${this.anchorPosition.width}px;height:${this.anchorPosition.height}px`)
    }

    keys.forEach((key) => {
      styles.push(`${key}: ${this.style[key]}`)
    })

    return styles.join(';')
  }
  get stickyStyle() {
    if (this.sticky) {
      let top = this.offsetTop + this.anchorPosition.offsetTop,
        left = this.anchorPosition.offsetLeft

      let styles = [this.divStyle, `position: fixed;top:${top}px;left:${left}px`]

      return styles.join(';')
    }
    return ''
  }

  mounted() {
    if (!uni.createIntersectionObserver) {
      return
    }
    // 获取 sticky 位置信息
    this.setStickyPosition()
    // 检测是否可见
    // this.checkIsVisible()
    this.intersectionObserver = uni.createIntersectionObserver(this)
    this.intersectionObserver.relativeToViewport({ top: -this.offsetTop - 1 }).observe(`.index-anchor`, (res) => {
      if (res.intersectionRect.top > 0) {
        this.visible = true
      } else {
        this.visible = false
      }
    })

    let parent = this.getStickyParent()
    parent.onParentScroll(({ detail }) => {
      this.handleScroll({ detail })
    })
  }
  beforeDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
      this.intersectionObserver = null
    }
  }
  getStickyParent() {
    if (this.stickyParent) {
      return this.stickyParent
    }

    let parent = this.$parent

    while (parent) {
      if (parent.$data._index_bar_) {
        break
      } else if (parent.$parent) {
        parent = parent.$parent
      } else {
        parent = null
      }
    }
    this.stickyParent = parent
    return parent
  }
  setStickyPosition() {
    let parent = this.getStickyParent()

    parent.getScrollOffset().then(({ scrollTop, scrollLeft, offsetTop, offsetLeft }: { [key: string]: number }) => {
      const query = uni.createSelectorQuery()
      query.in(this).select('.index-anchor').boundingClientRect()

      query.exec(([clientRect]) => {
        this.anchorPosition = {
          ...clientRect,
          top: clientRect.top - offsetTop + scrollTop,
          left: clientRect.left - offsetLeft + scrollLeft,
          offsetTop,
          offsetLeft
        }

        parent.addAnchor(this.index, clientRect.top - offsetTop + scrollTop)
      })
    })
  }
  handleScroll(e) {
    const { detail } = e
    if (!this.visible) {
      return
    }
    if (this.anchorPosition.top < detail.scrollTop + this.offsetTop) {
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
</script>

<style lang="less">
.index-anchor {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 10rpx 30rpx;
  font-weight: bold;
  font-size: 28rpx;
  text-align: left;
  background-color: #f9f9f9;
}
</style>
