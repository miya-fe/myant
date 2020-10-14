<template>
  <view>
    <view id="sticky1" class="list">
      <view class="tip"> 基础用法 </view>
      <view class="item">
        <my-sticky top="17">
          <view slot="prev" class="content">
            <text>我是content</text>
          </view>

          <view slot="sticky" class="header">
            <text>我是sticky</text>
          </view>

          <view slot="next" class="next-content">
            <text>我是content</text>
          </view>
        </my-sticky>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      name: ''
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
    height: 400rpx;
    margin-bottom: 20rpx;
    text-align: center;
  }
}

.header {
  color: #fff;
  background-color: #2c405a;
}
.content,
.next-content {
  height: 600rpx;
}
</style>
