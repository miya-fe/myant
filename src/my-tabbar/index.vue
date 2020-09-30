<template>
  <view class="tabbar">
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyTabbar',
  props: {}
}
</script>

<style scoped lang="less">
.tabbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100rpx;
}
</style>
