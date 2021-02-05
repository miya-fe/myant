<template>
  <view class="avatar-demo">
    <my-avatar size="huge" src="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-avatar>
    <my-avatar size="large" src="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-avatar>
    <my-avatar></my-avatar>
    <my-avatar :size="size" src="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-avatar>
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
  },
}
</script>
<style scoped lang="less">
  .avatar-demo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
</style>
