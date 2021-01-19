<template>
  <view>
    <view class="list">
      <view class="tip">
        通用图标
      </view>
      <view class="item">
        <my-icon size="large" @click="handClick">&#xe63f;</my-icon>
      </view>
      <view class="item">
        <my-icon size="default" color="blue">&#xe63f;</my-icon>
      </view>
      <view class="item">
        <my-icon color="red" size="small">&#xe63f;</my-icon>
      </view>
      <view class="item">
        <my-icon color="red" :size="68">&#xe63f;</my-icon>
      </view>
    </view>

    <view class="list">
      <view class="tip">
        自定义图标
      </view>
      <view class="item">
        <my-icon
          size="large"
          src="http://hh-oss-picture.miyapay.com/box/7012120c4f9fed5558450de70b20a11d.png"
        ></my-icon>
      </view>
    </view>

    <view class="list">
      <view class="tip">
        带徽标的图标
      </view>
      <view class="item">
        <my-icon
          size="large"
          src="http://hh-oss-picture.miyapay.com/box/7012120c4f9fed5558450de70b20a11d.png"
        >
          <my-badge slot="badge" text="9"></my-badge>
        </my-icon>
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
    handClick() {
      uni.showToast({ title: '你点到我了' })
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
      border: 2rpx solid red;
      background-color: #fff;
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
    text-align: center;
    margin-bottom: 20rpx;
  }
}
</style>
