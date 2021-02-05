<template>
  <view class="demo">
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
  padding: 30rpx 0;
}
</style>
