<template>
  <view class="tags">
    <my-tag typeTag="one-tag">一级标签</my-tag>
    <my-tag typeTag="two-tag">二级标签</my-tag>
    <my-tag typeTag="two-tag" color="green" text-color="black">一级变色标签</my-tag>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
    }
  },
  onLoad() {
    console.log('my-tag')
  },
}
</script>
<style scoped lang="less">
.tags {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
