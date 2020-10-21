<template>
  <view class="my-list-outer">
    <view class="my-list">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'list',
  props: {},
  computed: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less">
my-list-item:not(:last-child) > view > view {
  border-bottom: 1px solid #DDDDDD;
}
</style>
<style scoped lang="less">
.my-list-outer {
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 10px;
}

.my-list {
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  overflow: auto
}

</style>
