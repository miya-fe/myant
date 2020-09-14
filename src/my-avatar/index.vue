<template>
  <div class="avatar-outer">
    <img :src="src" :class="['common-avatar', size + '-avatar']" />
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'avatar',
  props: {
    src: {
      type: String,
      default: 'http://hh-oss-picture.miyapay.com/box/2e5a693028a3e61a61efa37b91436316.png'
    },
    size: {
      type: String,
      default: 'middle'
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
.avatar-outer {
  display: inline-block;
}
.common-avatar {
  background: #E9E9E9;
  border-radius: 50%;
}
.small-avatar {
  width: 60px;
  height: 60px;
}
.middle-avatar {
  width: 80px;
  height: 80px;
}
.large-avatar {
  width: 120px;
  height: 120px;
}
.huge-avatar {
  width: 144px;
  height: 144px;
}
</style>
