<template>
  <div class="add">
    <MHeader :back="true">详情</MHeader>
    <div class="container .col-md-8 .col-md-offset-2">
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
            <label for="bookCover">封面:</label>
            <input class="form-control" type="text" v-model.number="book.bookCover" id="bookCover">
          </div>
        </li>
        <li>
          <div class="form-group">
            <button class="btn btn-success" @click="add">确认</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../base/MHeader.vue';
import {addBook} from '../api/index.js';
export default {
  data() {
    return {
      book:{}
    }
  },
  components: {
    MHeader
  },
  methods:{
    async add(){
      await addBook(this.book);
      this.$router.push('/list');
    }
  }
}
</script>

<style scoped lang="less">
.add {
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
