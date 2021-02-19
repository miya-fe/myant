<template>
  <view class="demo">
    <text>点击授权按钮获取手机号（H5自动弹出填写手机号对话框）</text>
    <my-button @click="visible = true">授权</my-button>
    <my-get-phone title="授权手机号" :visible="visible" @cancel="onCancel"></my-get-phone>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      visible: false
    }
  },
  methods: {
    onCancel() {
      this.visible = false
    }
  }
}
</script>
<style scoped lang="less">
.demo {
  padding: 30rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text {
    font-size: 28rpx;
    font-weight: bold;
    margin: 40rpx 0 20rpx;
    display: block;
  }
}
</style>
