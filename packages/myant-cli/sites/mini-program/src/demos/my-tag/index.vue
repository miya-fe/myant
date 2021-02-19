<template>
  <view class="tags">
    <text>一级标签</text>
    <my-tag type="one-tag">一级标签</my-tag>
    <text>二级标签</text>
    <my-tag type="two-tag">二级标签</my-tag>
    <text>默认标签</text>
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

  text {
    font-size: 28rpx;
    font-weight: bold;
    margin-top: 40rpx;
  }
}
</style>
