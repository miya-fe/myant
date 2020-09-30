<template>
  <view class="tabbar-item-wrapper">
    <view class="tabbar-item" :style="dynamicStyle">
      <my-icon>{{ icon }}</my-icon>
      <slot name="icon"></slot>
      <text>
        <slot></slot>
      </text>
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
    icon: {
      type: String
    },
    // tabbar-item 的路由
    url: {
      type: String
    },
    // 选中的标签颜色
    activeColor: {
      type: String
    },
    // 未选中的标签颜色
    inactiveColor: {
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
