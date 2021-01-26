<template>
  <view>
    <view class="list">
      <view class="tip">
        默认大小按钮（size=default）
      </view>
      <view class="item">
        <my-button type="primary">primary</my-button>
      </view>
      <view class="item">
        <my-button type="default">default</my-button>
      </view>
      <view class="item">
        <my-button type="default" color="#FF7700">default</my-button>
      </view>
      <view class="item">
        <my-button type="dashed">dashed</my-button>
      </view>
      <view class="item">
        <my-button type="text">text</my-button>
      </view>
      <view class="item">
        <my-button :loading="true">loading</my-button>
      </view>
    </view>

    <view class="list">
      <view class="tip">
        小号按钮（size=small）
      </view>
      <view class="item">
        <my-button size="small" type="primary">primary</my-button>
      </view>
      <view class="item">
        <my-button size="small" type="default">default</my-button>
      </view>
      <view class="item">
        <my-button size="small" type="dashed">dashed</my-button>
      </view>
      <view class="item">
        <my-button size="small" type="text">text</my-button>
      </view>
    </view>

    <view class="list">
      <view class="tip">
        禁用状态下的小号按钮（size=small disable=true）
      </view>
      <view class="item">
        <my-button :disable="true" size="small" type="primary">primary</my-button>
      </view>
      <view class="item">
        <my-button :disable="true" size="small" type="default">default</my-button>
      </view>
      <view class="item">
        <my-button :disable="true" size="small" type="dashed">dashed</my-button>
      </view>
      <view class="item">
        <my-button :disable="true" size="small" type="text">text</my-button>
      </view>
    </view>

    <view class="list">
      <view class="tip">
        自定义样式通行
      </view>
      <view class="item">
        <my-button div-class="divClass" type="primary">primary</my-button>
      </view>
    </view>

    <view class="list">
      <view class="tip">
        指定hover-class
      </view>
      <view class="item">
        <my-button hover-class="hover-btn" div-class="divClass" type="primary">primary</my-button>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {}
  }
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
