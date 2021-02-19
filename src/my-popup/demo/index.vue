<template>
  <view class="demo">
    <text>居中展示</text>
    <my-button size="small" @click="onOpen('centerVisible')">居中</my-button>
    <my-popup :visible="centerVisible" position="center" @close="onClose('centerVisible')">
      <view class="center">我是居中内容</view>
    </my-popup>

    <text>右侧展示</text>
    <my-button size="small" @click="onOpen('rightVisible')">右侧</my-button>
    <my-popup width="50%" :visible="rightVisible" position="right" @close="onClose('rightVisible')">
      <view class="center">右侧内容</view>
    </my-popup>

    <text>底部展示</text>
    <my-button size="small" @click="onOpen('bottomVisible')">底部</my-button>
    <my-popup :visible="bottomVisible" position="bottom" @close="onClose('bottomVisible')">
      <view class="center">底部内容</view>
    </my-popup>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      centerVisible: false,
      rightVisible: false,
      bottomVisible: false
    }
  },
  methods: {
    onOpen(name) {
      this[name] = true
    },
    onClose(name) {
      this[name] = false
    }
  }
}
</script>
<style scoped lang="less">
.demo {
  padding: 30rpx 0;
  flex-direction: column;
  display: flex;
}
.center {
  padding: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
text {
  font-size: 28rpx;
  font-weight: bold;
  text-align: center;
  margin-top: 40rpx;
  padding-bottom: 10rpx;
}
</style>
