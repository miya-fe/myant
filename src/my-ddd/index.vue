<template>
  <text class="text">我是ddd</text>
</template>

<script lang="ts">
export default {
  name: 'my-ddd',
  props: {},
  data: () => {
    return {}
  },
  onShow() {
    console.log('ddd ！！!')
  },
}
</script>
<style scoped lang="less">
.text {
  font-size: 24rpx;
}
</style>
