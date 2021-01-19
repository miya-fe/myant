<template>
  <view :class="{ 'my-list-item': true, 'my-list-item-active': canClick }" @click="handleClick">
    <view class="my-list-line">
      <view class="item-left-container">
        <image v-if="thumb" class="item-icon" :src="thumb" />
        <text class="item-title text-ellipsis">{{ title }}</text>
      </view>
      <view class="item-right-container">
        <text class="item-text text-ellipsis">{{ content }}</text>
        <image v-if="arrow" class="item-icon" src="http://hh-oss-picture.miyapay.com/box/28f5b4da4f91372863a501b0917dca57.png" />
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    thumb: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: false
    },
    canClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style scoped lang="less">
.my-list-item {
  box-sizing: border-box;
  width: 100%;
  padding-left: 15px;
  border: none;
}

.my-list-item-active:active {
  background-color: #ddd;
}

.my-list-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  .item-left-container,
  .item-right-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: PingFangSC-Regular, PingFang SC;
    border: none;
  }

  .item-left-container {
    .item-icon {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
    .item-title {
      display: block;
      width: 100px;
      color: #333;
      font-size: 15px;
    }
  }

  .item-right-container {
    padding-right: 15px;
    .item-icon {
      width: 14px;
      height: 14px;
      margin-left: 15px;
    }
    .item-text {
      display: block;
      width: 120px;
      color: #999;
      font-size: 15px;
      text-align: right;
    }
  }

  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
