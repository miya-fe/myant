<template>
  <view class="demo">
    <my-button size="small" @click="onOpen('centerVisible')">居中</my-button>
    <my-popup :visible="centerVisible" position="center" @close="onClose('centerVisible')">
      <view>我是居中内容</view>
    </my-popup>
    <my-button size="small" @click="onOpen('rightVisible')">右侧</my-button>
    <my-popup :visible="rightVisible" position="right" @close="onClose('rightVisible')">
      <view>1</view>
    </my-popup>
    <my-button size="small" @click="onOpen('bottomVisible')">底部</my-button>
    <my-popup :visible="bottomVisible" position="bottom" @close="onClose('bottomVisible')">
      <view>2</view>
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
}
</style>
