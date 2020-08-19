<template>
  <button class="btn" :open-type="openType">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    openType: {
      type: String,
      default: '',
    },
  },
  data: () => {
    return {}
  },
  onShow() {},
}
</script>
<style scoped lang="less">
.btn {
  border: none;
  background-color: transparent;
  display: inline-block;

  &:after {
    content: '';
  }
}
</style>
