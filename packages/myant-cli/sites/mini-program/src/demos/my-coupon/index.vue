<template>
  <view>
    <view class="list">
      <view class="tip"> 通用用法 </view>
      <view class="item">
        <my-coupon with-btn :coupon="coupon">
          <my-button slot="btn" size="small" type="primary">领取</my-button>
        </my-coupon>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      coupon: {
        logo: 'http://hh-oss-picture.miyapay.com/box/b848e136911f3f71350c19392dbe6d83.jpg',
        name: '百事可乐进店2元',
        label: '微信单品券',
        desc: '活动时间：2019.07.12~2020.01.01'
      }
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="less">
.list {
  .item {
    .divClass {
      display: block;
    }
    .hover-btn {
      color: red;
      background-color: #fff;
      border: 2rpx solid red;
    }
  }
}
</style>
<style scoped lang="less">
.list {
  padding: 20rpx 30rpx;
  font-size: 24rpx;
  .tip {
    padding: 20rpx 0rpx;
    color: #333;
    font-weight: 600;
  }
  .item {
    margin-bottom: 20rpx;
    text-align: center;
  }
}
</style>
