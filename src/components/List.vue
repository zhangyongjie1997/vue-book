<template>
  <div>
    <MHeader :back="true">列表页</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore" >
      <!-- <scroller :on-refresh="refresh"> -->
        <ul>
          <router-link v-for="(book, index) in books"
                       :to="{name:'detail',params:{bid:book.bookId}}"
                       :key="index"
                       tag="li">
            <!-- tag="li"  router-link其实是li -->
            <img v-lazy="book.bookCover">
            <div class="line">
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>￥{{book.bookPrice}}</b>
              <button @click.stop="remove(book.bookId)">删除</button>
            </div>
          </router-link>
        </ul>
        <!-- <button v-if="!loading" @click="getMore" class="btn btn-block btn-default">加载更多</button> -->
        <vue-loading class="load"
                     v-if="loading"
                     type="bubbles"
                     color="#d9544e"
                     :size="{ width: '50px', height: '50px' }"></vue-loading>
      <!-- </scroller> -->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import vueLoading from 'vue-loading-template';
import MHeader from '../base/MHeader.vue';
import {pagination,removeBook} from '../api/index.js';
export default {
  data() {
    return {
      books:[],
      offset:0,    //当前书的位置
      hasMore:true,
      loading:true
    }
  },
  mounted(){
    let scroll = this.$refs.scroll;
    let top = scroll.offsetTop;
    let distance = 0;
    let isMove = false;
    scroll.addEventListener('touchstart',(e)=>{
      //滚动条在顶端  并且当前盒子在顶端时
      if(scroll.scrollTop !=0 || scroll.offsetTop != top) return;
      let start = e.touches[0].pageY;  //手指开始点击的位置
      let move = (e)=>{
        isMove = true;
        let current = e.touches[0].pageY;//获取移动中的位置  当前位置
        distance = current - start; //当前位置和开始点击位置的距离，大于0表示向下拉
        if(distance > 0){
          if(distance<=100){
            scroll.style.top = distance + top +'px';
          }else{
            distance = 100;
            scroll.style.top = top + distance + 'px';
          }
        }else{try{scroll.removeEventListener('touchmove',move);
        scroll.removeEventListener('touchend',end);
        }catch(e){console.log(e);}}
      };
      let end = (e)=>{
                console.log('111');
                
                if(!isMove)return;
                isMove = false;
                clearInterval(this.timer1);
                this.timer1 = setInterval(()=>{ // 一共distance 每次-1
                  if(distance<=0){
                    clearInterval(this.timer1);
                    distance = 0;
                    scroll.style.top = top+'px';
                    scroll.removeEventListener('touchmove',move);
                    scroll.removeEventListener('touchend',end);
                    this.books = []; // 先清空数据
                    this.offset = 0;
                    this.hasMore = true;
                    this.getData();
                    return
                  }
                  distance -=1;
                  scroll.style.top =top + distance+'px';
                },1);
              };
      scroll.addEventListener('touchend',end);
      scroll.addEventListener('touchmove',move);
    },false);
  },
  created(){this.getData();},
  components: {MHeader,vueLoading},
  methods:{
    refresh (done) {
        setTimeout(() => {
          var start = this.top - 1
          this.getData();
          this.top = this.top - 10
          done();
        }, 1500);
      },
    loadMore(){
      // scrollTop:滚动到上面的高度， clientHeight：屏幕视窗高度，scrollHeight：滚动部分总高度
      clearTimeout(this.timer);//节流，减少scroll事件次数
      this.timer = setTimeout(()=>{
        let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
        if(scrollTop + clientHeight + 20 >= scrollHeight){this.getData();}
      },13);
    },
    async getData(){
      if(this.hasMore){   //有更多的时候获取数据
        this.loading = true;
        let {hasMore,books} = await pagination(this.offset);
        this.books = [...this.books,...books];
        this.hasMore = hasMore;
        this.offset = this.books.length;
        this.loading = false;
      }
    },
    async remove(id){
      await removeBook(id);
      //更新前台数据
      this.books = this.books.filter(item => item.bookId !== id);
    },
    getMore(){
      this.loading = true;
      this.getData();
    }
    }}
</script>
<style scoped lang="less">
button {
  margin-bottom: 10px;
}
.content {
  background-color: #fff;
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
        button {
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
