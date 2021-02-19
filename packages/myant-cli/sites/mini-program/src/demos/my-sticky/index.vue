<template>
  <my-sticky-scroll>
    <view id="sticky1" class="list">
      <view class="tip"> 基础用法 </view>
      <view class="item">
        <view class="content">
          <text>我是content</text>
        </view>
        <my-sticky>
          <view class="header">
            <text>我是sticky1</text>
          </view>
        </my-sticky>
        <view>我是分割线</view>
        <view>我是分割线</view>
        <view>我是分割线</view>
        <view>我是分割线</view>
        <view class="inner">
          <view class="left">
            <my-sticky :offset-top="60">
              <view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
                <view>分类一</view>
              </view>
            </my-sticky>
          </view>
          <view class="right">
            <my-sticky :offset-top="50">
              <view class="header">
                <text>我是sticky3</text>
              </view>
            </my-sticky>
          </view>
        </view>
        <view class="next-content">
          <text>我是content</text>
          <my-sticky :offset-top="70">
            <my-badge :text="text"></my-badge>
          </my-sticky>
        </view>
      </view>
      <view class="item">
        <text>item</text>
      </view>
      <view class="item">
        <text>item</text>
      </view>
    </view>
  </my-sticky-scroll>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      name: '',
      categoryStyle: {
        height: '100rpx'
      },
      text: null
    }
  },
  mounted(): void {
    setTimeout(() => {
      this.text = '动态文本'
    }, 2000)
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
    min-height: 600rpx;
    text-align: center;
  }
}

.header {
  color: #fff;
  background-color: #2c405a;
}
.content,
.next-content {
  height: 400rpx;
  border-bottom: 1rpx solid #ccc;
}
.inner {
  width: 100%;

  .left,
  .right {
    display: inline-block;
    width: 40%;
  }
}
</style>
