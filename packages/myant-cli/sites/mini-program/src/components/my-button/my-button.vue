<template>
  <button class="btn" :class="dynamicClass" :style="dynamicStyle" :hover-class="hoverClass" :open-type="openType" @click="handleClick">
    <!--  自定义icon  -->
    <my-icon v-if="icon && !loading" :type="icon"></my-icon>
    <view v-if="loading" class="loading">
      <my-loading v-if="loading" :show-text="false" size="20"></my-loading>
    </view>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'MyButton',
  props: {
    // 小程序Button专属的open-type熟悉
    openType: {
      type: String,
      default: ''
    },
    // 按钮前面的图标【依赖于my-icon】
    icon: {
      type: String,
      default: ''
    },
    // 是否处于加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 按钮样式类型
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['primary', 'default', 'dashed', 'text'].indexOf(value) > -1
      }
    },
    // 按钮大小
    size: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'small'].indexOf(value) > -1
      }
    },
    // 是否禁用
    disable: {
      type: Boolean,
      default: false
    },
    // hover时的状态和样式
    hoverClass: {
      type: String,
      default: 'default'
    },
    // 自定义class 样式【取名divClass是因为支付宝小程序对class关键字有单独检验和处理】
    divClass: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {}
  },
  computed: {
    dynamicStyle() {
      if (this.disable || !this.color) {
        return ''
      }
      return [`border: 2rpx solid ${this.color}`, `color: ${this.color}`].join(';')
    },
    dynamicClass() {
      // 按钮样式
      const clazz = [`btn-${this.type}`]
      // 按钮大小
      if (this.size === 'small') {
        clazz.push('btn-size-small')
      } else {
        clazz.push('btn-size-default')
      }
      // 是否禁用
      if (this.disable) {
        clazz.push(`btn-${this.type}-disabled`)
      }
      // 自定义样式
      if (this.divClass) {
        clazz.push(this.divClass)
      }
      return clazz.join(' ')
    }
  },
  methods: {
    handleClick(e) {
      if (this.disable !== true) {
        this.$emit('click', e)
      }
    }
  }
}
</script>
<style scoped lang="less">
.btn {
  display: inline-block;
  box-sizing: border-box;
  font-weight: 600;
  line-height: normal;
  vertical-align: middle;
  background-color: #fff;
  outline: none;

  &:active {
    opacity: 0.8;
  }

  &::after {
    display: inline-block;
    border: none;
    outline: none;
    content: '';
  }

  &-size-default {
    width: 400rpx;
    padding: 22rpx;
    font-size: 32rpx;
    border-radius: 60rpx;
  }
  &-size-small {
    padding: 11rpx 24rpx;
    font-size: 24rpx;
    border-radius: 32rpx;
  }

  &-primary {
    color: #fff;
    background-color: #f70;
    border: 2rpx solid #f70;

    &-disabled {
      background-color: #ccc;
      border: 2rpx solid #ccc;
    }
  }
  &-default {
    color: #333;
    border: 2rpx solid #333;

    &-disabled {
      color: #ccc;
      border: 2rpx solid #ccc;
    }
  }
  &-dashed {
    color: #333;
    border: 2rpx dashed #333;

    &-disabled {
      color: #ccc;
      border: 2rpx dashed #ccc;
    }
  }
  &-text {
    color: #333;
    border: none;

    &-disabled {
      color: #ccc;
    }
  }

  .loading {
    position: relative;
    top: 2rpx;
    display: inline-block;
    padding-right: 10rpx;
  }
}
</style>
