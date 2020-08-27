<template>
  <text class="text">我是icon</text>
</template>

<script lang="ts">
export default {
  name: 'my-icon',
  props: {},
  data: () => {
    return {}
  },
  onShow() {
    console.log('icon ！！!')
  },
}
</script>
<style scoped lang="less">
.text {
  font-size: 24rpx;
}
</style>
