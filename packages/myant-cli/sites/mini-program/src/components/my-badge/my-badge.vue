<template>
  <view class="badge" :class="{ 'badge-without-text': !showBadge }" :style="dynamicStyle">
    <text v-if="showBadge" class="badge-text">{{ text }}</text>
    <slot name="content"></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyBadge',
  props: {
    text: {
      type: String
    },
    // 图标颜色
    color: {
      type: String
    },
    // 徽标字号
    fontSize: {
      type: [Number]
    }
  },
  data: () => {
    return {}
  },
  computed: {
    showBadge() {
      return this.text !== 'undefined' && this.text !== ''
    },
    dynamicStyle() {
      const style = []
      if (this.color) {
        style.push(`background-color: ${this.color}`)
      }
      if (this.fontSize) {
        style.push(`font-size: ${this.fontSize}rpx`)
      }
      return style.join(';')
    }
  }
}
</script>
<style scoped lang="less">
.badge {
  position: relative;
  display: inline-block;
  padding: 2rpx 10rpx;
  font-size: 20rpx;
  background-color: red;
  border: 2rpx solid #fff;
  border-radius: 100%;

  &-text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    min-height: 16rpx;
  }
}
.badge-without-text {
  padding: 6rpx;
}
</style>
