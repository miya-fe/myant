<template>
  <div class="one-tag" :class="typeTag" :style="{background:color,color:textColor}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'my-tag',
  props: {
    typeTag: {
      type: String,
      default: 'one-tag'
    },
    color: {
      type: String,
      // default: 'none'
    },
    textColor: {
      type: String,
      // default: 'none'
    }
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
.one-tag {
  width: auto;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  background: rgba(255,119,0,1);
  border-radius: 20px;
  font-size: 20px;
  font-family: PingFangSC-Regular,PingFang SC;
  font-weight: 400;
  color: rgba(255,255,255,1);
}
.two-tag {
  background: rgba(255,119,0,0.19829999999999998);
  color: rgba(255,119,0,1);
}
</style>
