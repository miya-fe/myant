<template>
  <view class="tags">
    <my-tag type="one-tag">一级标签</my-tag>
    <my-tag type="two-tag">二级标签</my-tag>
    <my-tag>默认标签</my-tag>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  },
  onLoad() {
    console.log('my-tag')
  }
}
</script>
<style scoped lang="less">
.tags {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
}
</style>
