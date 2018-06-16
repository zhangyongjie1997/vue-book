// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'swiper/dist/css/swiper.css';//引入轮播图css
import 'bootstrap/dist/css/bootstrap.css';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img0.imgtn.bdimg.com/it/u=2401895806,821799314&fm=27&gp=0.jpg',
  loading: 'http://a.hiphotos.baidu.com/zhidao/pic/item/b90e7bec54e736d1afec42129d504fc2d5626929.jpg',
  attempt: 1
});
import VueAwesomeSwiper from 'vue-awesome-swiper';//导入轮播图插件
Vue.use(VueAwesomeSwiper);//使用轮播图插件
import VueScroller from 'vue-scroller';
Vue.use(VueScroller);
Vue.config.productionTip = false;
/* eslint-disable no-new */
router.beforeEach(function (to,from,next) {  //每一次在进入路由之前都会执行此方法,全局钩子，可以执行一些拦截
  document.title = to.meta.title;
  // if(....){
  //   next(path:'....');
  // }
  next();//继续向下走，不写就不会向下走
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
