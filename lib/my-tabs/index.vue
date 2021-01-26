<template>
  <view class="tabs-wrap">
    <view class="tabs-title" :style="heightStyle">
      <slot></slot>
      <view class="tabs-title--line" :style="lineStyle"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyTabs',
  props: {
    height: {
      type: Number,
      default: 80
    },
    active: {
      type: [String, Number]
    },
    lineColor: {
      type: String,
      default: '#f70'
    }
  },
  options: { styleIsolation: 'shared' },
  data() {
    return {
      isInit: true,
      curIdx: 0,
      elWidth: null
    }
  },
  computed: {
    heightStyle() {
      return `height: ${this.height}rpx; line-height: ${this.height}rpx;`
    },
    lineStyle() {
      let styles = [`background:${this.lineColor}`]
      if (!this.isInit) {
        styles.push('transition-duration: 0.3s')
      }
      let linePos = this.elWidth / this.$children.length / 2
      let pos = (this.elWidth / this.$children.length) * this.curIdx
      styles.push(`transform: translateX(${pos + linePos}px) translateX(-50%)`)
      return styles.join(';')
    },
    currentName() {
      return this.active
    }
  },
  watch: {
    active() {
      this.isInit = false
      this.getActiveIndex()
    }
  },
  mounted() {
    this.init()
    this.getActiveIndex()
  },
  methods: {
    init() {
      const query = uni.createSelectorQuery()
      // TODO: 支付宝in无效
      query.in(this).select('.tabs-title').boundingClientRect()

      query.exec(([res]) => {
        this.elWidth = res.width
      })
    },
    getActiveIndex() {
      this.$children.forEach((item, index) => {
        if (item.isActive) this.curIdx = index
      })
    },
    updateName(name) {
      this.$emit('change', name)
    }
  }
}
</script>

<style scoped lang="less">
.tabs-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &--line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80rpx;
    height: 8rpx;
    border-radius: 8rpx;
  }
}
</style>

<style lang="less">
.tabs-item {
  flex: 1;
  height: 100%;
}
</style>
