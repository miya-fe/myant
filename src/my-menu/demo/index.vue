<template>
  <view class="demo">
    <view>1. 水平模式</view>
    <my-menu v-model="horizontalIndex" :menus="menu" direction="horizontal"></my-menu>

    <view class="title">2. 垂直模式</view>
    <my-menu v-model="verticalIndex" :menus="menu" @selected="handleSelect">
      <view class="demo-content">
        <view>{{ content }}</view>
        <view>当前选中: {{ selectedItem }}</view>
      </view>
    </my-menu>
  </view>
</template>
<script lang="ts">
export default {
  data: (): object => {
    return {
      horizontalIndex: 0,
      verticalIndex: 2,
      selectedItem: '',
      menu: [
        {
          icon: '',
          src: 'http://hh-oss-picture.miyapay.com/box/29f26710c56b781f03c0e889bd7c280d.svg',
          title: '热销'
        },
        {
          title: '优惠'
        },
        {
          title: '饼干糕点'
        },
        {
          title: '夜宵时刻'
        }
      ]
    }
  },
  computed: {
    content(): string {
      const currentMenu = this.menu.filter((item, index): boolean => index === this.verticalIndex)[0]
      return `当前选择: ${currentMenu.title}`
    }
  },
  methods: {
    handleSelect(obj: object): void {
      this.selectedItem = JSON.stringify(obj)
    }
  }
}
</script>
<style scoped lang="less">
.demo {
  height: 100vh;
  // 自定义
  .title {
    margin-top: 40rpx;
  }
  &-content {
    color: rgba(0, 0, 0, 0.45);
    font-size: 24rpx;
  }
}
</style>
