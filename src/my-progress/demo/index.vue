<template>
  <view class="demo">
    <view>1. 基础样式</view>
    <my-progress :percent="0.4"></my-progress>

    <view>2. 传入更多参数</view>
    <my-progress :percent="0.6" bg-color="#ccc" color="#abc" :width="300" :height="16"
      ><text class="title">已抢2222</text></my-progress
    >
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  }
}
</script>
<style scoped lang="less">
.demo {
  padding: 30rpx;
  .props {
    padding: 20rpx;
    color: #999;
    font-size: 24rpx;
    border: 1rpx solid #ddd;
  }
  .code {
    padding: 20rpx;
    color: #999;
    font-size: 24rpx;
  }
  // 自定义
  .title {
    display: inline-block;
    margin-left: 20rpx;
    font-size: 20rpx;
  }
}
</style>
