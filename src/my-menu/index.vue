<template>
  <view
    :class="{
      'vertical-container': direction === 'vertical',
      'horizontal-container': direction === 'horizontal'
    }"
  >
    <view class="menu-wrapper" :style="styleObj">
      <scroll-view :scroll-y="direction === 'vertical'" :scroll-x="direction === 'horizontal'" :class="[`${direction}-scroll-wrapper`]">
        <view :class="direction + '-list'">
          <view
            v-for="(item, index) in menus"
            :key="index"
            :class="{
              'vertical-list-item': direction === 'vertical',
              'horizontal-list-item': direction === 'horizontal',
              active: index === currentIndex
            }"
            :style="{ borderBottomColor: themeColor }"
            @click="selectedItem(item, index)"
          >
            <image v-if="item.src" class="list-item-icon" :src="item.src"></image>
            <i v-if="item.class" class="icon" :class="item.class"></i>
            <text class="list-item-title">{{ item.title }}</text>
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="content" :style="contentObj">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyMenu',
  props: {
    menus: {
      type: Array,
      default: (): object => []
    },
    themeColor: {
      type: String,
      default: '#f70'
    },
    width: {
      type: Number,
      default: 160
    },
    direction: {
      type: String,
      default: 'vertical',
      validator(value: string): boolean {
        return ['vertical', 'horizontal'].indexOf(value) !== -1
      }
    },
    value: {
      // 默认值
      type: Number,
      default: 0
    }
  },
  data: (): object => {
    return {
      currentIndex: 0
    }
  },
  computed: {
    styleObj(): string {
      const width: string = this.direction === 'vertical' ? `${this.width}rpx` : '100%'
      return `width: ${width}`
    },
    contentObj(): string {
      const ret: Array<string> = []
      const width: string = this.direction === 'vertical' ? `calc(100% - ${this.width}rpx)` : '100%'
      ret.push(`width: ${width}`)
      ret.push('word-break: break-all')
      return ret.join(';')
    }
  },
  watch: {
    value: {
      handler(nv: number): void {
        this.currentIndex = nv
      },
      immediate: true
    }
  },
  methods: {
    selectedItem(item: object, index: number): void {
      this.currentIndex = index
      this.$emit('input', index)
      this.$emit('selected', { ...item, $index: index })
    }
  }
}
</script>
<style scoped lang="less">
// icon图标
.list-item-icon {
  width: 32rpx;
  height: 32rpx;
  margin-right: 12rpx;
  vertical-align: middle;
}
.icon {
  margin-right: 12rpx;
}
// vertical
.vertical-container {
  display: flex;
  height: 100%;
  .menu-wrapper {
    color: rgba(0, 0, 0, 0.6);
    font-size: 26rpx;
    text-align: center;
    // display: inline-block;
    background: #f5f5f5;
    .vertical-scroll-wrapper {
      height: 100%;
    }
    .vertical-list {
      width: 100%;
      &-item {
        padding: 25rpx 0;
      }
      .list-item-title {
        vertical-align: middle;
      }
      .active {
        color: #333;
        font-weight: 500;
        background: #fff;
      }
    }
  }
}
// horizontal
.horizontal-container {
  .menu-wrapper {
    color: #333;
    font-size: 26rpx;
    white-space: nowrap;
    .horizontal-scroll-wrapper {
      width: 100%;
      height: 100%;
    }
    .horizontal-list {
      &-item {
        display: inline-block;
        margin: 0 10rpx;
        padding: 20rpx 10rpx;
        text-align: center;
      }
      .active {
        font-weight: 500;
        border-bottom: 6rpx solid currentColor;
      }
    }
  }
}
</style>
