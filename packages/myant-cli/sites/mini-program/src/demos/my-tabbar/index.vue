<template>
  <view>
    <view class="list">
      <view class="tip"> 基础用法 </view>
      <view class="item">
        <my-tabbar default-tab="/home2" @change="handleTabChange">
          <my-tabbar-item tab="/home" :icon="tabIcon" inactive-color="#333">首页一</my-tabbar-item>
          <my-tabbar-item tab="/home2">
            <my-icon slot="icon" :size="48">&#xe63f;<my-badge slot="badge" :size="8"></my-badge></my-icon>首页二
          </my-tabbar-item>
          <my-tabbar-item tab="/home3">
            <my-icon slot="icon" :size="48">&#xe63f;<my-badge slot="badge" :size="8" text="9"></my-badge></my-icon>首页三
          </my-tabbar-item>
        </my-tabbar>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      tabIcon: '&#xe63f;'
    }
  },
  methods: {
    handleTabChange(res) {
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
    margin-bottom: 20rpx;
    text-align: center;
  }
}
.demo-tababr {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
</style>
