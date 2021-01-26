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
      return this.currentName === this.$parent.currentName
    }
  },
  methods: {
    onClick() {
      this.$parent.updateName(this.currentName)
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
