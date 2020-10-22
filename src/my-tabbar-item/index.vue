<template>
  <view class="tabbar-item-wrapper">
    <view class="tabbar-item" :style="dynamicStyle">
      <slot name="icon"></slot>
      <view>
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyTabbarItem',
  props: {
    // tabbar-item 的名称
    name: {
      type: String
    },
    // tabbar-item 的路由
    url: {
      type: String
    }
  },
  computed: {
    dynamicStyle() {
      const style = []
      if (this.active === this.name) {
        style.push(`color: ${this.activeColor}`)
      } else {
        style.push(`color: ${this.inactiveColor}`)
      }

      return style.join(';')
    }
  },
  mounted(): void {}
}
</script>

<style scoped lang="less">
.tabbar-item-wrapper {
  position: relative;
  display: inline-block;

  .tabbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #333;
    font-size: 24rpx;

    :active {
      opacity: 0.8;
    }
  }
}
</style>
