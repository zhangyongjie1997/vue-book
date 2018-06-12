<template>
  <div id="app">
    <Tab></Tab>
    <!-- 需要缓存的 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Tab from './base/Tab';
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
@import url('./css/reset.css');
.content{
  position: fixed;
  top: 40px;
  bottom: 50px;
  overflow: auto;
  width: 100%;
}
</style>
