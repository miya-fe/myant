<template>
  <view>
    <view class="list">
      <view class="tip"> 通用布局 </view>
      <view class="item">
        <my-layout>
          <view>
            <text>我是内容12222</text>
          </view>
        </my-layout>
      </view>
    </view>

    <view class="list">
      <view class="tip"> 带tabbar的布局 </view>
      <view class="item">
        <my-layout with-tab-bar>
          <view>
            <text>我是内容1222233</text>
          </view>
          <my-tabbar slot="tab-bar" default-tab="home2" @change="handClick">
            <my-tabbar-item tab="home">首页一</my-tabbar-item>
            <my-tabbar-item tab="home2">
              <my-icon slot="icon" :size="48">&#xe63f;<my-badge slot="badge" :size="8"></my-badge></my-icon>首页二
            </my-tabbar-item>
            <my-tabbar-item tab="home3">
              <my-icon slot="icon" :size="48">&#xe63f;<my-badge slot="badge" :size="8" text="9"></my-badge></my-icon>首页三
            </my-tabbar-item>
          </my-tabbar>
        </my-layout>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  onLoad() {},
  methods: {
    handClick(res) {
      console.log(res)
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
  font-size: 24rpx;
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
</style>
