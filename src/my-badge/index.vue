<template>
  <view class="badge" :class="{ 'badge-without-text': !showBadge }" :style="dynamicStyle">
    <text v-if="showBadge" class="badge-text">{{ text }}</text>
    <slot name="content"></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'my-badge',
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
      let style = []
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
  display: inline-block;
  position: relative;
  border: 2rpx solid #fff;
  background-color: red;
  border-radius: 100%;
  padding: 2rpx 10rpx;
  font-size: 20rpx;

  &-text {
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.badge-without-text {
  padding: 8rpx;
}
</style>
