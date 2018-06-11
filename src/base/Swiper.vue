<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides"
                  :key="index">
      <img :src="slide">
    </swiper-slide>
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
          el: '.swiper-pagination',

          },
          autoplay:{
            delay:3500
          },
          swiperWrapperSize:true,
          reverseDirection: true,
        },
      }
    }
  }
</script>
<style>
img {
  width: 100%;
}
</style>
