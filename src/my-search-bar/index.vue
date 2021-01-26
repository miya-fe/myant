<template>
  <view :class="{ 'section-content': true, 'section-content-view': disabled }" @click="emitEvent('click', $event)">
    <view class="icon">
      <my-icon :size="36" color="#999999">&#xe625;</my-icon>
    </view>
    <input
      :disabled="disabled"
      class="input"
      :value="keywords"
      type="text"
      :placeholder="placeholder"
      @focus="emitEvent('focus', $event)"
      @input="emitEvent('change', $event)"
      @blur="emitEvent('blur', $event)"
    />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'MySearchBar'
})
export default class SearchBar extends Vue {
  @Prop({ type: String }) readonly keywords: string
  @Prop({ type: Boolean, default: false }) readonly disabled: boolean
  @Prop({ type: String, default: '请输入关键字搜索' }) readonly placeholder: string

  emitEvent(name, e) {
    this.$emit(name, e.detail.value)
  }
}
</script>

<style lang="scss" scoped>
.section-content {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 80rpx;
  padding-left: 86rpx;
  background-color: #f6f6f6;
  border-radius: 8rpx;

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86rpx;
    height: 100%;
  }

  .input {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-right: 16rpx;
    color: #333;
    font-size: 28rpx;
    text-align: left;
    background-color: transparent;
    outline: none;

    &::placeholder {
      color: #bbb;
      font-weight: 400;
      font-size: 28rpx;
    }
  }
}
.section-content-view {
  background-color: #f2f2f2;
}
</style>
