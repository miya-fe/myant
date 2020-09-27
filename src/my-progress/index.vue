<template>
  <view class="progress-container">
    <view class="outer" :style="outerStyle">
      <view class="inner" :style="innerStyle"></view>
    </view>
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
      validator(value: number): boolean {
        return value >= 0 && value <= 1
      }
    },
    width: {
      type: Number,
      default: 160,
      validator(value: number): boolean {
        return value <= 750
      }
    },
    height: {
      type: Number,
      default: 12
    },
    bgColor: {
      type: String,
      default: '#FFE7D2'
    },
    color: {
      type: String,
      default: 'linear-gradient(270deg, rgba(255,175,0,1) 0%, rgba(255,119,0,1) 100%)'
    }
  },
  data: (): object => {
    return {}
  },
  computed: {
    outerStyle(): string {
      const ret = []
      ret.push(`background: ${this.bgColor}`)
      ret.push(`width: ${this.width}rpx`)
      ret.push(`height: ${this.height}rpx`)
      ret.push(`border-radius: ${this.height / 2}rpx`)
      return ret.join(';')
    },
    innerStyle(): string {
      const ret = []
      ret.push(`background: ${this.color}`)
      ret.push(`width: ${(this.percent * 100).toFixed(2)}%`)
      ret.push(`border-radius: ${this.height / 2}rpx`)
      return ret.join(';')
    }
  }
}
</script>
<style scoped lang="less">
.progress-container {
  display: inline-block;
  .outer {
    position: relative;
    display: inline-block;
    .inner {
      position: absolute;
      height: 100%;
    }
  }
  // 自定义
  .title {
    display: inline-block;
    margin-left: 20rpx;
    font-size: 20rpx;
  }
}
</style>
