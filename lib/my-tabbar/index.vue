<template>
  <view class="tabbar">
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyTabbar',
  props: {
    // 选中的标签颜色
    activeColor: {
      type: String,
      default: '#222'
    },
    // 未选中的标签颜色
    inactiveColor: {
      type: String,
      default: '#999'
    },
    defaultTab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      _tabbar_: true,
      active: null,
      tabList: []
    }
  },
  mounted(): void {
    this.active = this.defaultTab
    this.triggerBroadCast()
  },
  methods: {
    onTabChange(fn) {
      this.tabList.push(fn)
      return () => {
        this.tabList = this.tabList.filter((_fn) => fn !== _fn)
      }
    },
    emitTabChange({ tab }) {
      this.$emit('change', { tab: this.active, active: tab })
      this.active = tab
      this.triggerBroadCast()
    },
    triggerBroadCast() {
      this.tabList.forEach((fn) => {
        fn(this.active)
      })
    }
  }
}
</script>

<style scoped lang="less">
.tabbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100rpx;
}
</style>
