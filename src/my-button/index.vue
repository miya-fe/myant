<template>
  <button
    class="btn"
    :class="dynamicClass"
    :hover-class="hoverClass"
    :open-type="openType"
    @click="handleClick"
  >
    <my-icon v-if="icon" :type="icon"></my-icon>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'my-button',
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
    }
  },
  data: () => {
    return {}
  },
  computed: {
    dynamicClass() {
      //按钮样式
      let clazz = [`btn-${this.type}`]
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
  background-color: #fff;
  display: inline-block;
  font-weight: 600;
  font-family: PingFangSC-Semibold, PingFang SC;
  outline: none;
  line-height: normal;
  vertical-align: middle;

  &:active {
    opacity: 0.8;
  }

  &:after {
    content: '';
    outline: none;
    border: none;
    display: inline-block;
  }

  &-size-default {
    font-size: 32rpx;
    padding: 22rpx 136rpx;
    border-radius: 60rpx;
  }
  &-size-small {
    font-size: 24rpx;
    padding: 11rpx 24rpx;
    border-radius: 32rpx;
  }

  &-primary {
    color: #fff;
    border: 2rpx solid #ff7700;
    background-color: #ff7700;

    &-disabled {
      background-color: #cccccc;
      border: 2rpx solid #cccccc;
    }
  }
  &-default {
    color: #333;
    border: 2rpx solid #333;

    &-disabled {
      color: #cccccc;
      border: 2rpx solid #cccccc;
    }
  }
  &-dashed {
    color: #333;
    border: 2rpx dashed #333;

    &-disabled {
      color: #cccccc;
      border: 2rpx dashed #cccccc;
    }
  }
  &-text {
    color: #333;
    border: none;

    &-disabled {
      color: #cccccc;
    }
  }
}
</style>
