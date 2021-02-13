<template>
  <my-popup :visible="visible" position="bottom" :height="height" @close="cancel">
    <view class="get-phone-container">
      <view class="title">{{ title }}</view>
      <view class="input-wrap">
        <input v-model="phone" class="phone" placeholder="填写手机号" />
      </view>
      <view v-if="showCode" class="input-wrap">
        <input v-model="code" class="code" placeholder="验证码" />
        <text class="get-code-btn" @click="getCode">获取验证码</text>
      </view>
      <view v-if="showDesc" class="desc">
        查看
        <text class="link-color" @click="handleClick('user')">《用户协议》</text>
        和
        <text class="link-color" @click="handleClick('privacy')">《隐私协议》</text>
      </view>
      <slot name="desc"></slot>
      <view class="btn-group">
        <button class="btn" @click="cancel">取消</button>
        <button class="btn btn-primary" @click="confirm">确定</button>
      </view>
    </view>
  </my-popup>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '600rpx'
    },
    showDesc: {
      type: Boolean,
      default: true
    },
    showCode: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      phone: '',
      code: ''
    }
  },

  methods: {
    getCode() {
      this.$emit('get-code', { phone: this.phone })
    },
    handleClick(type) {
      this.$emit('get-protocol', { type })
    },
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm', { phone: this.phone, code: this.code })
    }
  }
}
</script>

<style lang="less" scoped>
.get-phone-container {
  padding: 30rpx;
}
.title {
  padding-bottom: 30rpx;
  color: #333;
  font-weight: bold;
  font-size: 32rpx;
  border-bottom: 1rpx solid #ececec;
}
.input-wrap {
  position: relative;
  margin-top: 24rpx;
  .phone,
  .code {
    box-sizing: border-box;
    width: 100%;
    height: 88rpx;
    padding-left: 30rpx;
    border: 1rpx solid #979797;
    border-radius: 6rpx;
  }
  .get-code-btn {
    position: absolute;
    top: 22rpx;
    right: 30rpx;
    z-index: 111;
    color: #1777ff;
  }
}
.desc {
  margin-top: 58rpx;
  font-weight: 400;
  font-size: 32rpx;
  .link-color {
    color: #1777ff;
  }
}
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: 40rpx;
  .btn {
    box-sizing: border-box;
    width: 340rpx;
    height: 98rpx;
    color: #404040;
    line-height: 98rpx;
    text-align: center;
    background: #fff;
    & + .btn {
      margin-left: 24rpx;
    }
    &.btn-primary {
      color: #fff;
      background: #1777ff;
    }
  }
}
</style>
