<template>
  <my-sticky-scroll>
    <view id="sticky1" class="list">
      <view class="tip"> 基础用法 </view>
      <view class="item">
        <my-index-bar>
          <my-index-anchor styles="background-color: red" index="A" />
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <my-index-anchor index="B" />
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <my-index-anchor index="C" />
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
          <text class="text-line">这是一行</text>
        </my-index-bar>
      </view>
    </view>
  </my-sticky-scroll>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  mounted(): void {}
}
</script>

<style lang="less">
.list {
  .item {
    .divClass {
      display: block;
    }
    .hover-btn {
      color: red;
      background-color: #fff;
      border: 2rpx solid red;
    }
  }
}
</style>
<style scoped lang="less">
.list {
  padding: 20rpx 30rpx;
  overflow-y: auto;
  font-size: 24rpx;
  border: 2rpx solid #eee;
  .tip {
    padding: 20rpx 0rpx;
    color: #333;
    font-weight: 600;
  }
  .item {
    height: 600rpx;
    padding-left: 10px;
    text-align: center;

    .text-line {
      display: block;
      margin: 10rpx 0;
      padding: 50rpx;
      text-align: center;
      background-color: #efefef;
    }
  }
}
</style>
