<template>
  <view class="overlay" v-if="visible">
    <view v-if="overlay" class="my-overlay" :style="renderOverlayStyle" @click="handleOverlayClick"> </view>
    <view
      :animation="animationData"
      :class="['my-popup', `my-popup--${position}`, round ? 'my-popup--round' : '', safeAreaInsetBottom ? 'my-popup--safe' : '', safeAreaInsetTop ? 'my-popup--safeTop' : '']"
      :style="renderCustomStyle"
    >
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 100
    },
    overlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 300
    },
    position: {
      type: String,
      default: 'center'
    },
    round: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '30%'
    },
    width: {
      type: String,
      default: '30%'
    },
    overlayStyle: {
      type: String,
      default: ''
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      animation: null,
      animationData: {}
    }
  },

  computed: {
    renderOverlayStyle() {
      return `z-index: ${this.zIndex};${this.overlayStyle}`
    },
    renderCustomStyle() {
      return `z-index: ${this.zIndex + 1};${this.customStyle}`
    }
  },
  watch: {
    visible(nv) {
      if (!nv) return
      setTimeout(() => {
        this.customAnimationRender()
      }, 10)
    }
  },

  created() {
    this.initAnimation()
  },

  methods: {
    initAnimation() {
      this.animation = uni.createAnimation({
        duration: this.duration,
        timingFunction: 'ease'
      })
    },
    customAnimationRender(isLeave = false) {
      if (this.position === 'bottom' || this.position === 'top') {
        this.animation.height(isLeave ? 0 : this.height)
      } else if (this.position === 'left' || this.position === 'right') {
        this.animation.width(isLeave ? 0 : this.width)
      } else {
        this.animation.opacity(isLeave ? 0 : 1)
      }
      this.animationData = this.animation.step().export()
    },
    close() {
      this.customAnimationRender(1)
      // 动画完成时间
      setTimeout(() => {
        this.$emit('close')
      }, this.duration)
    },
    handleOverlayClick() {
      this.$emit('click-overlay')
      if (this.closeOnClickOverlay) {
        this.close()
      }
    },
    handleClick() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
.overlay,
.my-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.my-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.my-popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  &--center {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    opacity: 0;
    &.my-popup--round {
      border-radius: 16rpx;
    }
  }
  &--top {
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    &.my-popup--round {
      border-radius: 0 0 16rpx 16rpx;
    }
  }
  &--bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    &.my-popup--round {
      border-radius: 16rpx 16rpx 0 0;
    }
  }
  &--left {
    top: 50%;
    left: 0;
    width: 0;
    height: 100%;
    transform: translate3d(0, -50%, 0);
    &.my-popup--round {
      border-radius: 0 16rpx 16rpx 0;
    }
  }
  &--right {
    top: 50%;
    right: 0;
    width: 0;
    height: 100%;
    transform: translate3d(0, -50%, 0);
    &.my-popup--round {
      border-radius: 16rpx 0 0 16rpx;
    }
  }

  &--bottom&--safe {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  &--safeTop {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
}
</style>
