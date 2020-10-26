<template>
  <view>
    <view class="list">
      <view class="tip">默认加载</view>
      <view class="item">
        <my-loading></my-loading>
      </view>
    </view>
    <view class="list">
      <view class="tip">不带文字提示的小号加载</view>
      <view class="item">
        <my-loading :show-text="false" size="40"></my-loading>
      </view>
    </view>
    <view class="list">
      <view class="tip">固定在全屏的加载</view>
      <view class="item">
        <my-loading type="fixed"></my-loading>
      </view>
    </view>
    <view class="list"></view>
    <view class="list"></view>
    <view class="list"></view>
    <view class="list">
      <view class="tip">文字提示横向排列的加载</view>
      <view class="item">
        <my-loading layout="row"></my-loading>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="less">
.list {
  padding: 20rpx 30rpx;
  font-size: 24rpx;
  .tip {
    padding: 20rpx 0rpx;
    color: #333;
    font-weight: 600;
  }
  .item {
    margin-bottom: 20rpx;
    text-align: center;
  }
}
</style>
