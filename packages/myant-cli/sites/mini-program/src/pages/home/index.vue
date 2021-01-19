<template>
  <view class="content">
    <view class="header">
      <image class="logo" mode="widthFix" src="http://hh-oss-picture.miyapay.com/box/7c472992c6f2e4bbe74a9b218044e19a.png"></image>
      <text class="title">Myant uniApp</text>
    </view>
    <text class="tip">基于uniApp的轻量级小程序UI组件库</text>

    <view v-for="(nav, index) in navs" :key="index" class="section">
      <text class="tip">{{ nav.title }}</text>

      <view v-for="item in nav.items" :key="item.path" class="nav">
        <view class="col" @click="handleNav(item.path)">
          <text>{{ item.title }}</text>
          <image src="http://hh-oss-picture.miyapay.com/box/db9681bd3099d4dc83fba54b8a25b118.png"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { config } from 'site-mini-shared'
import { get } from 'lodash'

export default Vue.extend({
  data() {
    return {
      title: 'myant',
      navs: []
    }
  },
  onLoad() {
    this.navs = get(config, `site.locales['zh-CN'].nav`, [])
    console.log(this.navs)
  },
  methods: {
    handleNav(path: string) {
      uni.navigateTo({
        url: `/demos/${path}/index`,
        fail: (e) => {
          console.error('===页面跳转失败，demo页面可能是未正确载入===')
          console.error(e)
        }
      })
    }
  }
})
</script>

<style scoped lang="less">
.content {
  box-sizing: border-box;
  height: 100%;
  padding: 30rpx;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  .tip {
    color: #999;
    font-size: 28rpx;
  }
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 50rpx 0rpx;

  .logo {
    width: 200rpx;
    height: auto;
    margin-right: 20rpx;
  }
  .title {
    font-size: 36rpx;
  }
}

.section {
  padding: 30rpx 0rpx;

  .nav {
    .col {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 20rpx;
      padding: 20rpx 20rpx;
      background-color: #eee;
      border-radius: 10rpx;

      text {
        font-size: 24rpx;
      }
      image {
        width: 15rpx;
        height: 20rpx;
      }
    }
  }
}
</style>
