<template>
  <view class="tabbar">
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyTabbar',
  props: {
    // 选中的标签颜色
    activeColor: {
      type: String
    },
    // 未选中的标签颜色
    inactiveColor: {
      type: String
    }
  },
  data() {
    return {
      _tabbar_: true
    }
  }
}
</script>

<style scoped lang="less">
.tabbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100rpx;
}
</style>
