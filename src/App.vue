<template>
  <div id="app">
    <Tab></Tab>
    <router-view></router-view>
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
</style>
