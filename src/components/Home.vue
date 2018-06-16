<template>
  <div>
    <vue-loading class="load"
                 v-if="loading"
                 type="spiningDubbles"
                 color="#d9544e"
                 :size="{ width: '50px', height: '50px' }"></vue-loading>
    <MHeader :back="true">首页</MHeader>
    <template v-if="!loading">
      <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot,index) in hotBooks"
                :key="index">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import vueLoading from 'vue-loading-template';
import MHeader from '../base/MHeader.vue';
import Swiper from '../base/Swiper.vue';
import {getAll} from '../api/index.js';  //对象解构赋值
export default {
  // created(){
  //   //给得到的对象中的data起别名叫做sliders
  //   let {data:sliders} = getSliders().then((res)=>{
  //     console.log(res);
  //     return res;
  //   });
  //  this.sliders = sliders;
  // },
  created(){
    this.getData();
    // this.getSlider(); //获取轮播图
    // this.getHot(); //获取热门图书  
  },
  methods:{
    async getData(){
      let [sliders,hotBooks] = await getAll();// [sliders,books]
      this.sliders = sliders;
      this.hotBooks = hotBooks;
      let that = this;
      // .... 轮播图和热门图书已经获取完成
      this.loading = false;
    }
  },
  data() {
    return {
      sliders:[],
      hotBooks:[],
      loading:true
    }
  },
  components: {
    MHeader,
    Swiper,
    vueLoading
  }
}
</script>

<style scoped lang="less">
.load {
  position: fixed;
  top: 45%;
  left: 45%;
}
.container {
  width: 90%;
  margin: 0 auto;
  h3 {
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
