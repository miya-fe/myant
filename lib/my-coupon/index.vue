<template>
  <view class="coupon-wrapper coupon" :class="{ 'coupon-with-btn': withBtn }" @click="handleClick">
    <view class="coupon-logo">
      <image mode="aspectFit" class="logo" :src="coupon.logo"></image>
    </view>
    <view class="coupon-content">
      <text class="name text-ellipsis">{{ coupon.name }}</text>
      <text class="label text-ellipsis">{{ coupon.label }}</text>
      <text class="desc text-ellipsis">{{ coupon.desc }}</text>
    </view>
    <view class="coupon-btn" v-if="withBtn">
      <view class="line">
        <view class="top"></view>
        <view class="bottom"></view>
      </view>
      <view class="btn">
        <slot name="btn"></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface Coupon {
  logo?: string // 券图片
  name: string // 券名称
  label?: string // 券标签
  desc?: string // 券说明
}

@Component({
  name: 'MyCoupon'
})
export default class MyCoupon extends Vue {
  @Prop({ type: Boolean, default: false }) readonly withBtn: boolean
  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  })
  readonly coupon: Coupon

  handleClick() {
    this.$emit('click', this.coupon)
  }
}
</script>
<style scoped lang="less">
.coupon {
  position: relative;
  box-sizing: border-box;
  min-height: 160rpx;
  padding: 20rpx 20rpx 20rpx 160rpx;
  background: rgba(255, 255, 255, 1);
  border: 1rpx solid rgba(222, 222, 222, 1);
  border-radius: 8rpx;
  box-shadow: 0 2rpx 8rpx 0 rgba(102, 102, 102, 0.08);

  &-logo {
    position: absolute;
    top: 20rpx;
    left: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120rpx;
    height: 120rpx;

    .logo {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 120rpx;

    .name {
      color: #333;
      font-weight: bold;
      font-size: 28rpx;
    }
    .label,
    .desc {
      color: #999;
      font-weight: 400;
      font-size: 20rpx;
    }
  }

  &-btn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160rpx;
    height: 160rpx;

    .line {
      position: absolute;
      top: 10rpx;
      bottom: 10rpx;
      left: 0;
      border-right: 2rpx dashed #dedede;
    }
  }
}
.coupon-with-btn {
  padding-right: 160rpx;
}
.text-ellipsis {
  overflow: hidden; //超出的文本隐藏
  white-space: nowrap; //溢出不换行
  text-overflow: ellipsis; //溢出用省略号显示
}
</style>
