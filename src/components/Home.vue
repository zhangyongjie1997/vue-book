<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper></Swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../base/MHeader.vue';
import Swiper from '../base/Swiper.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    MHeader,
    Swiper
  }
}
</script>

<style scoped>
</style>
