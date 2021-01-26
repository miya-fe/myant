<template>
  <view class="avatar-outer">
    <image :src="src" :class="['common-avatar', size + '-avatar']" />
  </view>
</template>
<script lang="ts">
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'middle',
      validator (value) {
        return ['huge', 'large', 'middle', 'small'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style scoped lang="less">
.avatar-outer {
  display: inline-block;
  font-size: 0;
}
.common-avatar {
  background: #e9e9e9;
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
