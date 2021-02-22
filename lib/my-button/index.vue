<template>
  <button
    class="btn"
    :class="dynamicClass"
    :style="dynamicStyle"
    :hover-class="hoverClass"
    :open-type="openType"
    :scope="scope"
    @click="handleClick"
    @getuserinfo="handleGetuserinfo"
    @opensetting="handleOpensetting"
    @launchapp="handleLaunchapp"
    @error="handleError"
    @getphonenumber="handleGetphonenumber"
  >
    <!--  自定义icon  -->
    <my-icon v-if="icon && !loading" :type="icon"></my-icon>
    <view v-if="loading" class="loading">
      <my-loading v-if="loading" :show-text="false" size="28"></my-loading>
    </view>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'MyButton'
})
export default class MyButton extends Vue {
  @Prop({ type: String }) readonly openType: string // 小程序Button专属的open-type属性
  @Prop({ type: String }) readonly scope: 'phoneNumber' | 'userInfo' // 支付宝小程序 当open-type 为 getAuthorize 时有效
  @Prop({ type: String }) readonly icon: string // 按钮图标
  @Prop({ type: Boolean, default: false }) readonly loading: boolean // 按钮加载状态
  @Prop({ type: String, default: 'default' }) readonly type: 'primary' | 'default' | 'dashed' | 'text' | 'wrapper' // 按钮样式类型
  @Prop({ type: String, default: 'default' }) readonly size: 'default' | 'small' // 按钮大小
  @Prop({ type: Boolean, default: false }) readonly disable: boolean // 是否禁用
  @Prop({ type: String, default: 'default' }) readonly hoverClass: string // hover时的状态和样式
  @Prop({ type: String }) readonly divClass: string // 自定义class 样式【取名divClass是因为支付宝小程序对class关键字有单独检验和处理】
  @Prop({ type: String }) readonly color: string // 自定义字体和边框颜色
  @Prop({ type: Boolean }) readonly wrapper: boolean // 按钮组件是否充当容器角色

  get dynamicStyle() {
    if (this.disable || !this.color) {
      return ''
    }
    return [`border: 2rpx solid ${this.color}`, `color: ${this.color}`].join(';')
  }
  get dynamicClass() {
    // 按钮样式
    const clazz = [`btn-${this.type}`]
    // 按钮大小
    if (this.size === 'small') {
      clazz.push('btn-size-small')
    } else {
      clazz.push('btn-size-default')
    }
    // 是否禁用
    if (this.disable) {
      clazz.push(`btn-${this.type}-disabled`)
    }
    // 自定义样式
    if (this.divClass) {
      clazz.push(this.divClass)
    }
    if (this.wrapper) {
      clazz.push('btn-wrapper')
    }
    return clazz.join(' ')
  }
  handleClick(e) {
    if (this.disable !== true) {
      this.$emit('click', e)
    }
  }
  handleGetuserinfo(e) {
    this.handleClick(e)
  }
  handleOpensetting(e) {
    this.handleClick(e)
  }
  handleLaunchapp(e) {
    this.handleClick(e)
  }
  handleError(e) {
    this.$emit('error', e)
  }
  handleGetphonenumber(e) {
    this.handleClick(e)
  }
}
</script>
<style scoped lang="less">
.btn {
  display: inline-block;
  box-sizing: border-box;
  font-weight: 600;
  line-height: normal;
  vertical-align: middle;
  background-color: #fff;
  outline: none;

  &.btn-wrapper {
    width: auto;
    padding: 0;
    border: none;
    border-radius: 0;
  }

  &:active {
    opacity: 0.8;
  }

  &::after {
    display: inline-block;
    border: none;
    outline: none;
    content: '';
  }

  &-size-default {
    width: 400rpx;
    padding: 22rpx;
    font-size: 32rpx;
    border-radius: 60rpx;
  }
  &-size-small {
    padding: 11rpx 24rpx;
    font-size: 24rpx;
    border-radius: 32rpx;
  }

  &-primary {
    color: #fff;
    background-color: #f70;
    border: 2rpx solid #f70;

    &-disabled {
      background-color: #ccc;
      border: 2rpx solid #ccc;
    }
  }
  &-default {
    color: #333;
    border: 2rpx solid #333;

    &-disabled {
      color: #ccc;
      border: 2rpx solid #ccc;
    }
  }
  &-dashed {
    color: #333;
    border: 2rpx dashed #333;

    &-disabled {
      color: #ccc;
      border: 2rpx dashed #ccc;
    }
  }
  &-text {
    color: #333;
    border: none;

    &-disabled {
      color: #ccc;
    }
  }

  .loading {
    position: relative;
    top: 2rpx;
    display: inline-block;
    padding-right: 10rpx;
  }
}
</style>
