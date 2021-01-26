<template>
  <view class="demo">
    <my-tabs :active="active" @change="onChange">
      <my-tab-item class="tabs-item" name="1">tab 1</my-tab-item>
      <my-tab-item class="tabs-item" name="2">tab 2</my-tab-item>
      <my-tab-item class="tabs-item" name="3">tab 3</my-tab-item>
    </my-tabs>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      active: '2'
    }
  },
  methods: {
    onChange(name): void {
      this.active = name
    }
  }
}
</script>
<style scoped lang="less">
.demo {
  padding: 30rpx 0;
}
</style>
