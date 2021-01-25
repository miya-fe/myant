<template>
  <view class="container">
    <scroll-view scroll-y :scroll-top="scrollTop" :scroll-left="scrollLeft" class="scroller" @scroll="handleScroll">
      <slot></slot>
    </scroll-view>

    <view class="anchor" v-if="anchorList.length > 0">
      <text class="anchor-item" v-for="anchor in anchorList" :key="anchor" @click="handleAnchorClick(anchor)">{{ anchor }}</text>
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

  _index_bar_ = true

  anchorList: string[] = []

  /**
   * 添加锚点索引
   * @param anchor 索引
   */
  addAnchor(anchor: string) {
    if (this.anchorList.indexOf(anchor) > -1) {
      return this
    }
    this.anchorList.push(anchor)
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
        resolve({ scrollTop: 0, scrollLeft: 0 })
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
    console.log(anchor)
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
