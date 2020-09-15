<template>
  <view class="progress-container">
    <view class="outer"
      :style="{
        background: bgColor,
        width: width + 'rpx',
        height: height + 'rpx',
        borderRadius: height / 2 + 'rpx'
      }">
      <view class="inner"
        :style="{
          background: color,
          width: percent > 1 ? '100%' : (percent * 100).toFixed(2) + '%',
          borderRadius: height / 2 + 'rpx'
        }"></view>
    </view>
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'my-icon',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 160,
    },
    height: {
      type: Number,
      default: 12,
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
  data: () => {
    return {}
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
    font-size: 20rpx;
    margin-left: 20rpx;
  }
}
</style>
