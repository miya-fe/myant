<template>
  <view class="loading" :class="{ content: type === 'fixed' ? true : false, fixed: type === 'fixed' ? true : false }">
    <view
      :class="{
        bg: type === 'fixed' ? true : false,
        content: type === 'fixed' ? false : true,
        row: layout === 'row' ? true : false
      }"
    >
      <view
        class="loader"
        :style="{
          width: size + 'rpx',
          height: size + 'rpx',
          margin: layout === 'row' ? '0' : '0 auto',
          borderTop: '3rpx solid ' + backgroundColor,
          borderRight: '3rpx solid ' + backgroundColor,
          borderBottom: '3rpx solid ' + backgroundColor,
          borderLeft: '3rpx solid ' + color
        }"
      />
      <text v-if="showText" class="loader-title" :style="{ fontSize: fontSize + 'rpx' }">{{ text }}</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'my-loading',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'fixed'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: '60'
    },
    color: {
      type: String,
      default: '#FF7700'
    },
    showText: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '加载中'
    },
    fontSize: {
      type: String,
      default: '20'
    },
    layout: {
      type: String,
      default: 'column',
      validator: function (value) {
        return ['column', 'row'].indexOf(value) !== -1
      }
    }
  },
  data: () => {
    return {}
  },
  computed: {
    backgroundColor() {
      if (this.type === 'fixed') {
        return '#ffffff'
      } else {
        return '#cccccc'
      }
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.loading {
  display: inline-block;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.row {
  flex-direction: row;
}
.fixed .bg {
  background: rgba(0, 0, 0, 0.8);
  padding: 30rpx 40rpx 20rpx;
  border-radius: 10rpx;
  text-align: center;
}
.loader-title {
  margin-top: 16rpx;
  color: #8b8b8d;
}
.fixed .loader-title {
  color: #ffffff;
}
.row .loader-title {
  margin-top: 0;
  margin-left: 12rpx;
}
/* 转圈动画 */
.loader {
  width: 50rpx;
  height: 50rpx;
  position: relative;
  -webkit-animation: loading 1s infinite linear;
  animation: loading 1s infinite linear;
}
.loader,
.loader:after {
  border-radius: 50%;
}
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
