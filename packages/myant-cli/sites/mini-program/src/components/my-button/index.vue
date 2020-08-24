<template>
  <button class="btn" :open-type="openType">
    <text>我是按钮的默认文字</text>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'my-button',
  props: {
    openType: {
      type: String,
      default: '',
    },
  },
  data: () => {
    return {}
  },
  onShow() {
    console.log('my-button ！！!')
  },
}
</script>
<style scoped lang="less">
.btn {
  border: none;
  background-color: transparent;
  display: inline-block;
  font-size: 24rpx;
  outline: none;

  &:after {
    content: '';
  }
}
</style>
