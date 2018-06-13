<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
      </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
      </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
      </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
      </router-link>
  </div>
</template>
<!--伸缩布局
  display:flex
  flex-drection:row行/column列
  justify-content: center  垂直居中
  align-items：center  水平居中
  flex:1  1:1:1..等分

  router-link-exact-active:/home     只能匹配/home
  router-link-active:/home,/home/a,/home/1  /home开头的都能匹配
-->
<style scoped lang="less">
.footer{
  z-index: 1000;
  border-top: 1px solid #ccc;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  a{
    color: #18adf8;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active{
    color: tomato;
  }
}
</style>
