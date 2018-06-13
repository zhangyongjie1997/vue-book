import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      component: () => import ('../components/Home.vue')
    }, //路由元信息实现页面缓存  this.$route.meta.keepAlive
    {
      path: '/home',
      component: () => import ('../components/Home.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/add',
      component: () => import ('../components/Add.vue')
    },
    {
      path: '/list',
      component: () => import ('../components/List.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/collect',
      component: () => import ('../components/Collect.vue')
    },
    {
      path: '/detail/:bid',
      component: () => import ('../components/Detail.vue'),
      name: 'detail'
    }, ///detail/xxx  =>  {bid:xxx},带参数就必须给路径起名字
    {
      path: '*',
      redirect: '/home'
    },
  ]
})
