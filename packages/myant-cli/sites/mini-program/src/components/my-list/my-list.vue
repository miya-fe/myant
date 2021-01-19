<template>
  <view class="my-list-outer">
    <view class="my-list">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'List',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less">
.my-list-item:not(:last-child) > view > view {
  border-bottom: 1px solid #ddd;
}
</style>
<style scoped lang="less">
.my-list-outer {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 15px;
}

.my-list {
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
}
</style>
