<template>
  <div class="common-tag" :class="type">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'my-tag',
  props: {
    type: {
      type: String,
      default: 'one-tag'
    }
  },
  computed: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="less">
.common-tag {
  width: auto;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  border-radius: 20px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
.one-tag {
  background: rgba(255, 119, 0, 1);
  color: rgba(255, 255, 255, 1);
}
.two-tag {
  background: rgba(255, 119, 0, 0.19829999999999998);
  color: rgba(255, 119, 0, 1);
}
</style>
