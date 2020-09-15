<template>
  <view class="demo">
    <view>1. 基础样式</view>
    <text class="code">{{ basicString }}</text>
    <my-progress :percent="0.4"></my-progress>

    <view>2. 传入更多参数</view>
    <text class="code">{{ strings }}</text>
    <my-progress
      :percent="0.6"
      bgColor="#ccc"
      color="#abc"
      :width="300"
      :height="16"
    ><text class="title">已抢2222</text></my-progress>

    <view>3. props参数支持：</view>
    <view class="props">
      <view>bgColor: 外层进度条背景颜色</view>
      <view>color: 内层进度条背景颜色</view>
      <view>width：进度条总长度</view>
      <view>height：进度条总高度</view>
      <view>插槽：位置位于右侧用于添加文字说明</view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      basicString: '<my-progress :percent="0.4"></my-progress>',
      strings:
        `<my-progress
          :percent="0.6"
          bgColor="#ccc"
          color="#abc"
          :width="300"
          :height="16"
        >
          <text class="title">已抢2222</text>
        </my-progress>
      `
    }
  }
}
</script>
<style scoped lang="less">
.demo {
  padding: 30rpx;
  .props {
    color: #999;
    font-size: 24rpx;
    border: 1rpx solid #ddd;
    padding: 20rpx;
  }
  .code {
    padding: 20rpx;
    color: #999;
    font-size: 24rpx;
  }
  // 自定义
  .title {
    display: inline-block;
    font-size: 20rpx;
    margin-left: 20rpx;
  }
}
</style>
