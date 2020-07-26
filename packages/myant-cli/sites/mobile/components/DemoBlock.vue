<template>
  <div class="myant-doc-demo-block">
    <h2 class="myant-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'demo-block',

  props: {
    title: String,
  },
}
</script>

<style lang="less">
@import '../../common/style/var';

.myant-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: @myant-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &:first-of-type {
    .myant-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
