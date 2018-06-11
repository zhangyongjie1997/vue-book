<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../base/MHeader.vue';
import Swiper from '../base/Swiper.vue';
import {getSliders} from '../api/index.js';  //对象解构赋值
export default {
  // created(){
  //   //给得到的对象中的data起别名叫做sliders
  //   let {data:sliders} = getSliders().then((res)=>{
  //     console.log(res);
  //     return res;
  //   });
  //  this.sliders = sliders;
  // },
  async created(){
    let {data:sliders} = await getSliders();
    this.sliders = sliders;
  },
  data() {
    return {
      sliders:[]
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
