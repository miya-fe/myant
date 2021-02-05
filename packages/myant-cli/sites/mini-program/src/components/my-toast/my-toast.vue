<template>
  <view v-if="isShow" class="toast">
    <view class="content">
      <image v-if="iconUrl" class="icon" :src="iconUrl" />
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'MyToast',
  props: {
    title: {
      type: String,
      default: 'success'
    },
    icon: {
      type: String,
      default: 'success',
      validator (value) {
        return ['success', 'error', 'warning', 'none'].indexOf(value) !== -1
      }
    },
    duration: {
      type: Number,
      default: 1500
    }
  },
  data: () => {
    return {
      iconImg: [
        {
          name: 'success',
          url: 'https://hh-oss-html.miyapay.com/hhops/picture/1603260532069a44cbe8ddb95'
        },
        {
          name: 'error',
          url: 'https://hh-oss-html.miyapay.com/hhops/picture/1603272697875a7873214875a'
        },
        {
          name: 'warning',
          url: 'https://hh-oss-html.miyapay.com/hhops/picture/1603272752962a07a1b3d08f3'
        }
      ],
      isShow: false
    }
  },
  computed: {
    iconUrl() {
      let url = ''
      this.iconImg.forEach((v, k) => {
        if (v.name === this.icon) {
          url = v.url
        }
      })
      return url
    }
  },
  watch: {
    isShow (newval, oldval) {
      if (newval) {
        setTimeout(() => {
          this.isShow = false
        }, this.duration)
      }
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>
<style scoped lang="less">
.toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1002;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450rpx;
  padding: 15rpx 30rpx;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10rpx;
}
.icon {
  width: 72rpx;
  height: 72rpx;
  margin: 10rpx 0 5rpx 0;
  background-size: 100%;
}
.title {
  color: rgba(255, 255, 255, 1);
  font-size: 28rpx;
  line-height: 42rpx;
}
</style>
