<template>
  <view class="tabbar-item-wrapper" @click="handleTabBarClick">
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
    // tabbar-item 的路由
    tab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      active: null
    }
  },
  computed: {
    dynamicStyle() {
      const style = [],
        parent = this.getTabBarParent()
      if (this.active === this.tab) {
        style.push(`color: ${parent.activeColor}`)
      } else {
        style.push(`color: ${parent.inactiveColor}`)
      }

      return style.join(';')
    }
  },
  beforeMount(): void {
    this.getTabBarParent().onTabChange((tab) => {
      this.active = tab
    })
  },
  methods: {
    getTabBarParent() {
      if (this._tabBarParent) {
        return this._tabBarParent
      }

      let parent = this.$parent

      while (parent) {
        if (parent.$data._tabbar_) {
          break
        } else if (parent.$parent) {
          parent = parent.$parent
        } else {
          parent = null
        }
      }
      this._tabBarParent = parent
      return parent
    },
    handleTabBarClick() {
      this.getTabBarParent().emitTabChange({ tab: this.tab })
    }
  }
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
    font-weight: bold;
    font-size: 24rpx;

    :active {
      opacity: 0.8;
    }
  }
}
</style>
