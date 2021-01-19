<template>
  <view class="icon-wrapper" @click="handleClick">
    <image v-if="isImage" mode="widthFix" :src="src" class="icon" :style="dynamicStyle" :class="dynamicClass"></image>
    <text v-else class="icon" :style="dynamicStyle" :class="dynamicClass">
      <slot></slot>
    </text>
    <!--badge slot-->
    <view v-if="showBadge" class="badge">
      <slot name="badge"></slot>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyIcon',
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
    // 自定义图标前缀
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
      return !!this.src
    },
    dynamicClass() {
      const clazz = []
      if (['default', 'small', 'large'].indexOf(this.size) > -1) {
        clazz.push(`icon-${this.size}`)
      }
      if (this.classPrefix) {
        clazz.push(`${this.classPrefix}icon`)
      }

      return clazz.join(' ')
    },
    dynamicStyle() {
      const style = []
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
  mounted(): void {
    this.showBadge = this.$children.length > 0
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped lang="less">
@font-face {
  font-family: 'my-icon-font'; /* project id 1926676 */

  /* src: url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.eot');
  src: url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.woff') format('woff'),
    url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.svg#iconfont') format('svg'); */
  src: url('//at.alicdn.com/t/font_1926676_v7kmrq9wc3.ttf') format('truetype');
}
.icon-wrapper {
  position: relative;
  display: inline-block;

  &:active {
    opacity: 0.8;
  }
}
.icon {
  font-family: 'my-icon-font';
  font-style: normal;

  &-badge {
    padding: 2rpx 8rpx;
    font-size: 22rpx;
    background-color: red;
    border: 2rpx solid #fff;
  }
  &-dot {
    padding: 4rpx;
    background-color: red;
    border: 2rpx solid #fff;
  }
}
.icon-large {
  width: 48rpx;
  font-size: 48rpx;
}
.icon-default {
  width: 36rpx;
  font-size: 36rpx;
}
.icon-small {
  width: 24rpx;
  font-size: 24rpx;
}
.badge {
  position: absolute;
  top: -12rpx;
  right: -12rpx;
}
</style>
