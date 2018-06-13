<template>
  <div id="app">
    <Tab></Tab>
    <!-- 需要缓存的 -->
    <transition name="fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <!-- 不需要缓存的 -->
    <transition name="fade">
      <keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
    </transition>
  </div>
</template>

<script>
import Tab from './base/Tab';
export default {
  data(){
    return {
      transitionName:'slide-left'
    }
  },
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
@import url("./css/reset.css");
.content {
  position: fixed;
  top: 40px;
  bottom: 50px;
  overflow: auto;
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
