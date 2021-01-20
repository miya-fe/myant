<template>
  <view class="layout" :class="{ 'layout-with-tabbar': withTabBar }">
    <view class="layout-content">
      <slot></slot>
    </view>
    <view v-if="withTabBar" class="layout-tabbar">
      <slot name="tab-bar"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'MyLayout'
})
class Layout extends Vue {
  @Prop({ type: Boolean, default: false }) withTabBar: boolean
}

export default Layout
</script>
<style scoped lang="less">
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  overflow: hidden;
  background-color: #f0f2f5;

  &-content {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  &-tabbar {
    position: absolute;
    bottom: calc(0rpx + constant(safe-area-inset-bottom));
    bottom: calc(0rpx + env(safe-area-inset-bottom));
    width: 100%;
    height: 100rpx;
    box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.08);
  }
}
.layout-with-tabbar {
  padding-bottom: calc(100rpx + constant(safe-area-inset-bottom));
  padding-bottom: calc(100rpx + env(safe-area-inset-bottom));
}
</style>
