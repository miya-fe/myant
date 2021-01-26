<template>
  <view class="wrapper">
    <view class="list">
      <view class="tip">
        通用徽标
      </view>
      <view class="item">
        <my-badge></my-badge>
      </view>
    </view>
    <view class="list">
      <view class="tip">
        带数字的徽标
      </view>
      <view class="item">
        <my-badge text="9"></my-badge>
      </view>
      <view class="item">
        <my-badge text="99+"></my-badge>
      </view>
      <view class="item">
        <my-badge text="999+"></my-badge>
      </view>
    </view>
    <view class="list">
      <view class="tip">
        不通颜色的徽标
      </view>
      <view class="item">
        <my-badge color="#ccc" text="99+"></my-badge>
      </view>
    </view>
    <view class="list">
      <view class="tip">
        自定义字号的徽标
      </view>
      <view class="item">
        <my-badge font-size="36" text="80"></my-badge>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  onLoad() {}
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
.wrapper {
  height: 100%;
  background-color: #eee;
}
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
