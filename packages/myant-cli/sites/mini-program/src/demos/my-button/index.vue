<template>
  <view>
    <view class="list">
      <view class="tip"> 作为容器（wrapper=true） </view>
      <view class="item">
        <view class="btn-group">
          <my-button wrapper open-type="getPhoneNumber">
            <view class="btn">
              <my-icon>&#xe603;</my-icon>
              <text>点击获取手机号</text>
            </view>
          </my-button>
          <my-button wrapper open-type="getUserInfo">
            <view class="btn">
              <my-icon>&#xe603;</my-icon>
              <text>点击获取用户信息</text>
            </view>
          </my-button>
        </view>
      </view>
    </view>

    <view class="list">
      <view class="tip"> 默认大小按钮（size=default） </view>
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
      <view class="tip"> 小号按钮（size=small） </view>
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
      <view class="tip"> 禁用状态下的小号按钮（size=small disable=true） </view>
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
      <view class="tip"> 自定义样式通行 </view>
      <view class="item">
        <my-button div-class="divClass" type="primary">primary</my-button>
      </view>
    </view>

    <view class="list">
      <view class="tip"> 指定hover-class </view>
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
    .btn-group {
      display: flex;
      flex-direction: row;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10rpx 20rpx;
      color: #fff;
      font-size: 28rpx;
      background-color: #f0ad4e;
      border-radius: 50rpx;
    }
  }
}
</style>
