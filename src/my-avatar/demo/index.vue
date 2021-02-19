<template>
  <view class="avatar-demo">
    <text>超大头像</text>
    <my-avatar size="huge" src="http://hh-oss-picture.miyapay.com/box/9a17f9d88722b26ac135a755ab17acfe.png"></my-avatar>
    <text>大头像</text>
    <my-avatar size="large" src="http://hh-oss-picture.miyapay.com/box/9a17f9d88722b26ac135a755ab17acfe.png"></my-avatar>
    <text>默认头像</text>
    <my-avatar></my-avatar>
    <text>小头像</text>
    <my-avatar :size="size" src="http://hh-oss-picture.miyapay.com/box/9a17f9d88722b26ac135a755ab17acfe.png"></my-avatar>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      size: 'small'
    }
  },
  mounted() {
    console.log('avatar demo ！！2200')
  }
}
</script>
<style scoped lang="less">
.avatar-demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  text {
    font-size: 28rpx;
    color: #333;
    display: block;
    margin-top: 40rpx;
    font-weight: bold;
  }
}
</style>
