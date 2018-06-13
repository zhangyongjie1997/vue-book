<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-icon-" v-if="back" @click="goBack"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    back:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {

    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="less">
  .header{
    z-index: 100;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    font-style: '微软雅黑';
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    height: 40px;
    color: #fff;
    background: #167ed3;
    i{
      position: absolute;
      left: 10px;
    }
  }
</style>
