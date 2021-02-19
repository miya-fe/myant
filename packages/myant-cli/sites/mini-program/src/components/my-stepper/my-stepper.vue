<template>
  <view class="stepper-contain">
    <view v-if="showReduce" :class="{ 'stepper-operate': true, 'stepper-operate-normal': type === 'normal', 'stepper-operate-empty': type === 'empty' }" @click="handleOperateNum('reduce')">
      <text class="operate-item">-</text>
    </view>
    <view class="stepper-num">{{ num }}</view>
    <view
      :class="{ 'stepper-operate': true, 'stepper-operate-normal': type === 'normal', 'stepper-operate-empty': type === 'empty', 'stepper-operate-disabled': plusDisabled }"
      @click="handleOperateNum('plus')"
    >
      <text class="operate-item">+</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyStepper',
  props: {
    // stepper类型
    type: {
      type: String,
      default: 'normal',
      validator: (value) => {
        return ['normal', 'empty'].indexOf(value) > -1
      }
    },
    // 展示数量
    num: {
      type: [Number, String],
      default: 0
    },
    // 限制数量,展示数量不能超过限制数量
    limit: {
      type: [Number, String]
    }
  },
  data: () => {
    return {}
  },
  computed: {
    showReduce() {
      return this.num > 0
    },
    plusDisabled() {
      return this.limit && this.num >= this.limit
    }
  },
  methods: {
    handleOperateNum(type) {
      let num
      if (type === 'plus') {
        if (this.limit) {
          num = this.num + 1 < this.limit ? this.num + 1 : this.limit
        } else {
          num = this.num + 1
        }
      } else {
        num = this.num - 1
      }
      // const num = type === 'plus' ? this.num + 1 : this.num - 1
      this.$emit('click', num)
    }
  }
}
</script>

<style lang="less" scoped>
.stepper {
  &-contain {
    display: flex;
    align-items: center;
  }
  &-operate {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32rpx;
    height: 32rpx;
    font-size: 32rpx;
    border-radius: 50%;
    &-empty {
      color: #f70;
      border: 1rpx solid #f70;
    }
    &-normal {
      color: #fff;
      background-color: #f70;
      border: none;
    }
    .operate-item {
      display: inline-block;
      height: 32rpx;
      padding-bottom: 6rpx;
      line-height: 32rpx;
    }
    &-disabled {
      color: #fff;
      background-color: #e5e5e5;
      border: none;
    }
  }
  &-num {
    padding: 0 20rpx;
    color: #333;
    font-weight: 600;
    font-size: 24rpx;
    line-height: 33rpx;
  }
}
.disabled {
  color: #e5e5e5;
}
</style>
