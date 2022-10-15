<template>
  <div class="app-layout">
    <SiderbarCom class="siderbar"/>
    <router-view />
  </div>
</template>
<script>
import SiderbarCom from './page/siderbar.vue'
export default {
  name: 'App',
  components: { SiderbarCom },
}
</script>
<style>
html, body {
  height: 100%;
  margin: 0;
}
</style>
<style scoped>
.app-layout {
  display: flex;
  height: 100%;
}
.siderbar {
    width: 240px;
    height: 100%;
}
</style>

