<template>
  <view>
    <my-loading></my-loading>
    <view style="height:80rpx"></view> 
    <my-loading :haveTitle="false" size="40"></my-loading>
    <view style="height:80rpx"></view> 
    <my-loading layout="row"></my-loading>
    <view style="height:80rpx"></view> 
    <my-loading type="fixed"></my-loading>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  methods: {
  }
}
</script>
<style scoped lang="less"></style>
