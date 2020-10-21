<template>
  <view class="list-demo">
    <my-list>
      <my-list-item></my-list-item>
      <my-list-item></my-list-item>
    </my-list>
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
    console.log('list demo ！！2200')
  },
}
</script>
<style scoped lang="less">
.list-demo {
  background: #f2f2f2;
  padding-top: 20px;
}

.my-list-item {
  background: #059;
}
</style>
