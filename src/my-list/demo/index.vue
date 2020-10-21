<template>
  <view class="list-demo">
    <my-list>
      <my-list-item
        title="标题"
        content="内容"
        :arrow="true"
        :canClick="true"
        thumb="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"
      ></my-list-item>
      <my-list-item
        title="标题"
        content="内容"
        thumb="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"
      ></my-list-item>
      <my-list-item
        title="标题"
        content="内容"
      ></my-list-item>
    </my-list>
    <my-list>
      <my-list-item
        @click="handleClick"
        :canClick="true"
        title="标题"
        content="内容"
        :arrow="true"
        thumb="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"
      ></my-list-item>
    </my-list>
  </view>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      size: 'small'
    }
  },
  mounted() {
    console.log('list demo ！！2200')
  },
  methods: {
    handleClick() {
      console.log('点击事件')
    }
  }
}
</script>
<style scoped lang="less">
.list-demo {
  background: #f2f2f2;
  padding-top: 20px;
  overflow: hidden;
}
</style>
