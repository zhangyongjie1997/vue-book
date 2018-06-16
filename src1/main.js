import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import App from './App.vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted);
Vue.use(Vuex);
//声明状态
const state = {
  count: 0
};
const mutations = {
  add(state, count) { //state自动放入，默认☞的就是当前的state
    state.count += count;
  }
};
//声明容器 容器唯一
const store = new Vuex.Store({
  state,
  strict: true, //严格模式，只能通过mutation来改变状态，不支持异步，组件不能直接更改状态的值
  mutations,
  plugins:[logger()]  //logger日志插件，在控制台输出state变化，调用了哪些mutation
});
new Vue({
  el: '#app',
  ...App,
  components: {},
  store, //store被声明到实例上，现在所有组件都有一个this.$store属性
});
