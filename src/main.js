// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'swiper/dist/css/swiper.css';//引入轮播图css
import 'bootstrap/dist/css/bootstrap.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';//导入轮播图插件
Vue.use(VueAwesomeSwiper);//使用轮播图插件
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
