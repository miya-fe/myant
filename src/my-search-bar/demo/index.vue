<template>
  <my-sticky-scroll>
    <view id="sticky1" class="list">
      <view class="tip"> 基础用法 </view>
      <view class="item">
        <my-search-bar placeholder="请输入城市名称" />
      </view>
      <view class="tip"> 禁止输入 </view>
      <view class="item">
        <my-search-bar disabled placeholder="请输入城市名称" @click="handleClick" />
      </view>
    </view>
  </my-sticky-scroll>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  mounted(): void {},
  methods: {
    handleClick() {
      uni.showToast({ title: '你点击了' })
    }
  }
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
