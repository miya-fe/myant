<template>
  <view>
    <view class="list">
      <view class="tip">默认提示</view>
      <view class="item">
        <my-button type="primary" @click="addToast1">默认提示</my-button>
        <my-toast ref="toast1"></my-toast>
      </view>
    </view>
    <view class="list">
      <view class="tip">错误提示</view>
      <view class="item">
        <my-button type="primary" @click="addToast2">错误提示</my-button>
        <my-toast ref="toast2" icon="error" title="网络错误～"></my-toast>
      </view>
    </view>
    <view class="list">
      <view class="tip">警告提示</view>
      <view class="item">
        <my-button type="primary" @click="addToast3">警告提示</my-button>
        <my-toast ref="toast3" icon="warning" title="警告哈哈～"></my-toast>
      </view>
    </view>
    <view class="list">
      <view class="tip">纯文字提示</view>
      <view class="item">
        <my-button type="primary" @click="addToast4">纯文字提示</my-button>
        <my-toast ref="toast4" icon="none" :duration="2500" title="超出换行超出换行超出换行超出换行超出换行超出换行"></my-toast>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  methods: {
    addToast1() {
      this.$refs.toast1.show()
    },
    addToast2() {
      this.$refs.toast2.show()
    },
    addToast3() {
      this.$refs.toast3.show()
    },
    addToast4() {
      this.$refs.toast4.show()
    }
  }
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
