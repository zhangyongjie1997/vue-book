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
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/add',component:Add},
    {path:'/list',component:List},
    {path:'/collect',component:Collect},
    {path:'/detail',component:Detail},
  ]
})
