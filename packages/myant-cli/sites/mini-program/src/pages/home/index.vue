<template>
  <view class="content">
    <view class="header">
      <image
        class="logo"
        mode="widthFix"
        src="http://hh-oss-picture.miyapay.com/box/7c472992c6f2e4bbe74a9b218044e19a.png"
      ></image>
      <text>Myant uniApp</text>
    </view>
    <text class="tip">基于uniApp的轻量级小程序UI组件库</text>

    <view class="section" :for="(nav, index) in navs" :key="index">
      <text class="tip">{nav.title}</text>

      <view class="nav" v-for="item in nav.items" :key="item.path">
        <view class="col" @click="handleNav(item.path)">
          <text>{item.title}</text>
          <image
            src="http://hh-oss-picture.miyapay.com/box/db9681bd3099d4dc83fba54b8a25b118.png"
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
// import { getMyantConfig } from '../../../../../src/common'
import { config } from 'site-mini-shared'
import { get } from 'lodash'

export default Vue.extend({
  data() {
    return {
      title: 'myant',
      navs: [],
    }
  },
  onShow() {
    this.navs = get(config, `site.locales.'zh-CN'.nav`, 'nav') || []
  },
  methods: {
    handleNav(path: string) {
      uni.navigateTo({
        url: path,
        fail: (e) => {
          console.error('===页面跳转失败，demo页面可能是未正确载入===')
          console.error(e)
        },
      })
    },
  },
})
</script>

<style scoped lang="less">
.content {
  height: 100%;
  overflow-y: auto;
  padding: 30rpx;
  box-sizing: border-box;

  .tip {
    color: #999;
    font-size: 28rpx;
  }
}

.header {
  padding: 100rpx 0rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .logo {
    width: 200rpx;
    height: auto;
    margin-right: 20rpx;
  }
}

.section {
  padding: 30rpx 0rpx;

  .nav {
    .col {
      border-radius: 20rpx;
      background-color: #999;
      padding: 8rpx 10rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 20rpx;

      text {
        font-size: 28rpx;
      }
      image {
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
}
</style>
