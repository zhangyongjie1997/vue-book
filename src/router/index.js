import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue';
import Add from '../components/Add.vue';
import List from '../components/List.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:Home},  //路由元信息实现页面缓存  this.$route.meta.keepAlive
    {path:'/home',component:Home,meta:{keepAlive:true}},
    {path:'/add',component:Add},
    {path:'/list',component:List},
    {path:'/collect',component:Collect},
    {path:'/detail/:bid',component:Detail,name:'detail'},   ///detail/xxx  =>  {bid:xxx},带参数就必须给路径起名字
    {path:'*',redirect:'/home'},
  ]
})
