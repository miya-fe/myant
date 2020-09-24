<template>
  <view>
    <view class="list">
      <view class="tip">
        默认stepper
      </view>
      <view class="item">
        <my-stepper num="11" />
      </view>
    </view>
    <view class="list">
      <view class="tip">
        没有背景颜色的stepper
      </view>
      <view class="item">
        <my-stepper num="11" :type="'empty'"/>
      </view>
    </view>
    <view class="list">
      <view class="tip">
        可操作没有限制
      </view>
      <view class="item">
        <my-stepper :num="item" @click="handleOperate"/>
      </view>
    </view>
    <view class="list">
      <view class="tip">
        可操作有限制
      </view>
      <view class="item">
        <my-stepper :num="limitItem" :limit="limit" @click="handleLimitOperate"/>
      </view>
    </view>
  </view>
</template>


<script lang="ts">
  export default {
    data: () => {
      return {
        item: 11,
        limit: 13,
        limitItem: 11
      }
    },
    methods: {
      handleOperate(item) {
        this.item = item
      },
      handleLimitOperate(item) {
        this.limitItem = item
      }
    }
  }
</script>

<style lang="less" scoped>
.list {
  padding: 20rpx 30rpx;
  font-size: 24rpx;
  .tip {
    padding: 20rpx 0rpx;
    color: #333;
    font-weight: 600;
  }
  .item {
    text-align: center;
    margin-bottom: 20rpx;
  }
}
</style>
