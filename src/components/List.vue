<template>
  <div>
    <MHeader :back="true">列表页</MHeader>
    <div class="content">
      <ul>
        <router-link v-for="(book, index) in books" :to="{name:'detail',params:{bid:book.bookId}}" 
            :key="index" tag="li">   
            <!-- tag="li"  router-link其实是li -->
          <img :src="book.bookCover">
          <div class="line">
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>￥{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../base/MHeader.vue';
import {getBooks,removeBook} from '../api/index.js';
export default {
  data() {
    return {
      books:[]
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
    this.books = await getBooks();
    },
    async remove(id){
      await removeBook(id);
      //更新前台数据
      this.books = this.books.filter(item => item.bookId !== id);
    }
  }
}
</script>

<style scoped lang="less">
.content {
  width: 90%;
  margin-left: 5%;
  ul {
    padding: 10px;
    li {
      position: relative;
      list-style: none;
      vertical-align: middle;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      width: 100%;
      height: 90px;
      img {
        height: 100%;
      }
      .line {
        position: absolute;
        top: 0;
        width: 68%;
        display: inline-block;
        p {
          font-weight: lighter;
          font-size: 12px;
          color: gray;
        }
        b {
          color: red;
        }
        button{
          border: none;
          border-radius: 5px;
          background-color: rgb(255, 215, 40);
          color: #fff;
          width: 50px;
          height: 25px;
          outline: none;
        }
      }
    }
  }
}
</style>
