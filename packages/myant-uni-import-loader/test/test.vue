<template>
  <view class="container">
    <text>login</text>
    <login></login>
  </view>
</template>

<script>
import { login, userInfo } from 'myant-demo'

export default {
  components: {
    login,
  },
  data: () => {
    return {
      name: 'myant',
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  font-size: 32rpx;
}
</style>
