<template>
  <div
    class="myant-doc-container myant-doc-row"
    :class="{ 'myant-doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'myant-doc-container',

  props: {
    hasSimulator: Boolean,
  },
}
</script>

<style lang="less">
@import '../../common/style/var';

.myant-doc-container {
  box-sizing: border-box;
  padding-left: @myant-doc-nav-width;
  overflow: hidden;

  &--with-simulator {
    padding-right: @myant-doc-simulator-width + @myant-doc-padding;
  }
}
</style>
