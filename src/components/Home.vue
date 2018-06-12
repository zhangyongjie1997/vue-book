<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h2>热门图书</h2>
        <ul>
          <li v-for="(hot,index) in hotBooks"
              :key="index">
            <img :src="hot.bookCover">
            <b>{{hot.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../base/MHeader.vue';
import Swiper from '../base/Swiper.vue';
import {getSliders,getHotBook} from '../api/index.js';  //对象解构赋值
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
    this.getSlider(); //获取轮播图
    this.getHot(); //获取热门图书  
  },
  methods:{
    async getSlider(){
      this.sliders = await getSliders();
    },
    async getHot(){
       this.hotBooks=await getHotBook();
    },
  },
  data() {
    return {
      sliders:[],
      hotBooks:[]
    }
  },
  components: {
    MHeader,
    Swiper
  }
}
</script>

<style scoped lang="less">
.container {
  width: 90%;
  margin: 0 auto;
  h2 {
    margin-bottom: 10px;
    text-align: center;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    li {
      img {
        width: 100%;
      }
      box-sizing: border-box;
      margin-top: 5px;
      width: 50%;
      padding: 5px 0px;
    }
  }
}
</style>
