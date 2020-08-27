<script lang="ts">
export default {
  mpType: 'app',
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
page {
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
}
</style>
