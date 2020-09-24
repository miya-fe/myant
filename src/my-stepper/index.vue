<template>
  <view class="stepper-contain">
    <view v-if="showReduce" @click="handleOperateNum('reduce')" :class="{'stepper-operate': true, 'stepper-operate-normal': type === 'normal', 'stepper-operate-empty': type === 'empty'}">
      <text class="operate-item">-</text>
    </view>
    <view class="stepper-num">{{ num }}</view>
    <view @click="handleOperateNum('plus')" :class="{'stepper-operate': true, 'stepper-operate-normal': type === 'normal', 'stepper-operate-empty': type === 'empty', 'stepper-operate-disabled': plusDisabled}">
      <text class="operate-item">+</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'my-stepper',
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
      type: Number,
      default: 0,
    },
    // 限制数量,展示数量不能超过限制数量
    limit: {
      type: Number
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
    width: 32rpx;
    height: 32rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32rpx;
    border-radius: 50%;
    &-empty {
      color: #FF7700;
      border: 1rpx solid #FF7700;
    }
    &-normal {
      border: none;
      color: #fff;
      background-color: #FF7700;
    }
    .operate-item {
      display: inline-block;
      height: 32rpx;
      line-height: 32rpx;
      padding-bottom: 6rpx;
    }
    &-disabled {
      border: none;
      color: #fff;
      background-color: #e5e5e5;
    }
  }
  &-num {
    padding: 0 20rpx;
    font-size: 24rpx;
    font-weight: 600;
    color: #333;
    line-height: 33rpx;
  }
}
.disabled {
  color: #e5e5e5;
}
</style>
