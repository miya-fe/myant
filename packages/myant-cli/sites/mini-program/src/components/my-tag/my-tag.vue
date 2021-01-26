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
    },
  },
  computed: {},
  data() {
    return {
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.common-tag{
  display: inline-block;
  width: auto;
  height: 40px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 20px;
  font-family: PingFangSC-Regular,PingFang SC;
  line-height: 40px;
  border-radius: 20px;
}
.one-tag {
  color: rgba(255,255,255,1);
  background: rgba(255,119,0,1);
}
.two-tag {
  color: rgba(255,119,0,1);
  background: rgba(255,119,0,0.19829999999999998);
}
</style>
