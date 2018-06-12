<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <div class="container .col-md-8 .col-md-offset-2">
      <div class="form-group"><img :src="book.bookCover" class="img-thumbnail"></div>
      <ul>
        <li>
          <div class="form-group form-inline">
            <label for="bookName">书名:</label>
            <input class="form-control" type="text" v-model="book.bookName" id="bookName">
           </div>
        </li>
        <li>
          <div class="form-group">
            <label for="bookInfo">信息:</label>
            <input class="form-control" type="text" v-model="book.bookInfo" id="bookInfo">
          </div>
        </li>
        <li>
          <div class="form-group">
            <label for="bookPrice">价格:</label>
            <input class="form-control" type="text" v-model.number="book.bookPrice" id="bookPrice">
          </div>
        </li>
        <li>
          <div class="form-group">
            <button class="btn btn-success">确认</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../base/MHeader.vue';
import {findOneBook} from '../api/index.js';
export default {
  watch:{
    $route(){
      this.getData();
    }
  },
  data() {
    return {
      book:{}
    }
  },
  created(){
    this.getData();
  },
  components: {
    MHeader
  },
  methods:{
    async getData(){
      this.book = await findOneBook(this.bid);
      //如果返回了空对象，就返回列表页
      Object.keys(this.book).length!==0?void(0):this.$router.push('/list');

    }
  },
  computed:{
    bid(){
      return this.$route.params.bid;  //取出路径参数
    }
  }
}
</script>

<style scoped lang="less">
.detail {
  padding: 10px;
  padding-top: 40px;
  z-index: 100;
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  img {
    height: 140px;
  }
}
</style>
