<template>
  <view :class="{ 'tab-item': true, active: isActive }" :style="dynamicStyle" @click="onClick">
    <text class="tab-item-title">
      <slot></slot>
    </text>
  </view>
</template>

<script>
export default {
  name: 'MyTabItem',
  props: {
    name: {
      type: [String, Number]
    },
    activeColor: {
      type: String,
      default: '#f70'
    }
  },
  data: () => {
    return {
      _tabItem_: true
    }
  },
  computed: {
    dynamicStyle() {
      if (this.isActive) {
        return `color: ${this.activeColor}`
      }
      return `color: #333`
    },
    currentName() {
      return this.name
    },
    isActive() {
      let parent = this.getTabItemParent()
      return this.currentName === parent.currentName
    }
  },
  methods: {
    getTabItemParent() {
      if (this.tabItemParent) {
        return this.tabItemParent
      }

      let parent = this.$parent

      while (parent) {
        if (parent.$data._tabs_) {
          break
        } else if (parent.$parent) {
          parent = parent.$parent
        } else {
          parent = null
        }
      }
      this.tabItemParent = parent
      return parent
    },
    onClick() {
      let parent = this.getTabItemParent()
      if (parent) {
        parent.updateName(this.currentName)
      }
    }
  }
}
</script>

<style scoped lang="less">
.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 28rpx;
  &-title {
    max-width: 160rpx;
    padding: 0 10rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &.active {
    font-weight: bold;
  }
}
</style>
