<template>
  <view class="container __index_bar__">
    <scroll-view scroll-y :scroll-top="scrollTop + anchorScrollTop" :scroll-left="scrollLeft" class="scroller" @scroll="handleScroll">
      <slot></slot>
    </scroll-view>

    <view v-if="anchorList.length > 0" class="anchor">
      <text v-for="anchor in anchorList" :key="anchor.key" class="anchor-item" @click="handleAnchorClick(anchor)">{{ anchor.key }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

let anchorFnList: Function[] = []

@Component({
  name: 'MyIndexBar'
})
export default class IndexBar extends Vue {
  @Prop({ type: [String, Number], default: 0 }) scrollTop: string | number

  @Prop({ type: [String, Number], default: 0 }) scrollLeft: string | number

  anchorScrollTop = 0

  _index_bar_ = true

  anchorList: { key: string; scrollTop: number }[] = []

  /**
   * 添加锚点索引
   * @param key 索引
   */
  addAnchor(key: string, scrollTop: number) {
    if (this.anchorList.find((item) => item.key === key)) {
      return this
    }
    this.anchorList.push({
      key,
      scrollTop
    })
    return this
  }

  onParentScroll(fn: Function) {
    anchorFnList.push(fn)
    return () => {
      anchorFnList = anchorFnList.filter((_fn) => fn !== _fn)
    }
  }

  getScrollOffset() {
    return new Promise((resolve, reject) => {
      try {
        const query = uni.createSelectorQuery()
        query.in(this).select('.container').scrollOffset()
        query.in(this).select('.container').boundingClientRect()

        query.exec(([offset, clientRect]) => {
          resolve({
            scrollTop: offset.scrollTop,
            scrollLeft: offset.scrollLeft,
            offsetTop: clientRect.top,
            offsetLeft: clientRect.left
          })
        })
      } catch (e) {
        resolve({
          scrollTop: 0,
          scrollLeft: 0,
          offsetTop: 0,
          offsetLeft: 0
        })
      }
    })
  }

  handleScroll(e) {
    // eslint-disable-next-line array-callback-return
    anchorFnList.map((fn) => {
      fn(e)
    })
  }

  handleAnchorClick(anchor) {
    this.anchorScrollTop = anchor.scrollTop
  }
}
</script>
<style scoped lang="less">
.container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .scroller {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .anchor {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44rpx;
    overflow-y: auto;

    &-item {
      display: block;
      width: 100%;
      padding: 4rpx 0;
      color: #999;
      font-weight: 400;
      font-size: 20rpx;
      text-align: center;
    }
  }
}
</style>
