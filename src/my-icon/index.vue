<template>
  <view class="icon-wrapper" @click="handleClick">
    <image
      mode="widthFix"
      v-if="isImage"
      :src="src"
      class="icon"
      :style="dynamicStyle"
      :class="dynamicClass"
    ></image>
    <text v-else class="icon" :style="dynamicStyle" :class="dynamicClass">
      <slot></slot>
    </text>
    <!-- badge slot -->
    <view v-if="showBadge" class="badge">
      <slot name="badge"></slot>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'my-icon',
  props: {
    src: {
      type: String
    },
    // 图标内容
    color: {
      type: String
    },
    // 图标大小
    size: {
      type: [String, Number],
      default: 'default',
      validator(value: string | number) {
        if (typeof value === 'number') {
          return true
        }
        return ['default', 'small', 'large'].indexOf(value) > -1
      }
    },
    //自定义图标前缀
    classPrefix: {
      type: String
    }
  },
  data: () => {
    return {
      showBadge: false
    }
  },
  computed: {
    isImage() {
      return this.src
    },
    dynamicClass() {
      let clazz = []
      if (['default', 'small', 'large'].indexOf(this.size) > -1) {
        clazz.push(`icon-${this.size}`)
      }
      if (this.classPrefix) {
        clazz.push(this.classPrefix + 'icon')
      }

      return clazz.join(' ')
    },
    dynamicStyle() {
      let style = []
      if (this.color) {
        style.push(`color: ${this.color}`)
      }
      if (typeof this.size === 'number') {
        if (this.isImage) {
          style.push(`width: ${this.size}rpx`)
        } else {
          style.push(`font-size: ${this.size}rpx`)
        }
      }
      return style.join(';')
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  mounted(): void {
    this.showBadge = this.$children.length > 0
  }
}
</script>
<style scoped lang="less">
@font-face {
  font-family: 'my-icon-font'; /* project id 1926676 */
  src: url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.eot');
  src: url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.woff') format('woff'),
    url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.svg#iconfont') format('svg');
}
.icon-wrapper {
  display: inline-block;
  position: relative;

  &:active {
    opacity: 0.8;
  }
}
.icon {
  font-family: 'my-icon-font';
  font-style: normal;

  &-badge {
    border: 2rpx solid #fff;
    background-color: red;
    font-size: 22rpx;
    padding: 2rpx 8rpx;
  }
  &-dot {
    background-color: red;
    border: 2rpx solid #fff;
    padding: 4rpx;
  }
}
.icon-large {
  font-size: 48rpx;
  width: 48rpx;
}
.icon-default {
  font-size: 36rpx;
  width: 36rpx;
}
.icon-small {
  font-size: 24rpx;
  width: 24rpx;
}
.badge {
  position: absolute;
  top: -12rpx;
  right: -12rpx;
}
</style>
