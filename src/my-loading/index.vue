<template>
  <view :class="{content:type==='fixed'?true:false,fixed:type==='fixed'?true:false}">
    <view :class="{bg:type==='fixed'?true:false,content:type==='fixed'?false:true,row:layout==='row'?true:false,}">
      <view
        class="loader"
        :style="{
						 width: size + 'rpx',
						 height: size + 'rpx',
						 borderTop: '6rpx solid ' + backgroundColor,
						 borderRight: '6rpx solid ' + backgroundColor,
						 borderBottom: '6rpx solid ' + backgroundColor,
						 borderLeft: '6rpx solid ' + currentColor}"
      />
      <view v-if="haveTitle" class="loader-title" :style="{fontSize: fontSize + 'rpx'}">{{title}}</view>
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
    },
    size: {
      type: String,
      default: '60',
    },
    currentColor: {
      type: String,
      default: '#FF7700',
    },
    haveTitle: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '加载中',
    },
    fontSize: {
      type: String,
      default: '20',
    },
    layout: {
      type: String,
      default: 'column',
    },
  },
  data: () => {
    return {}
  },
  computed: {
    backgroundColor(){
      if(this.type==='fixed'){
        return '#ffffff'
      }else{
        return '#cccccc'
      }
    }
  },
  methods: {},
}
</script>
<style scoped lang="less">
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
  background:rgba(0,0,0,0.8);
  padding: 30rpx 40rpx 20rpx;
  border-radius:10rpx;
}
.loader-title {
  margin-top: 16rpx;
  color: #8b8b8d;
  text-align: center;
}
.fixed .loader-title{
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
