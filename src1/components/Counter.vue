<template>
  <div>
    计数器: <button>-</button><br>
    当前:<br>
    计数器: <button @click="add">+</button>
  </div>
</template>
<script>
export default {
  methods:{
    add(){  
      //第一个参数默认是当前state，此处的2实际上作为第二个参数传入  载荷payload
      this.$store.commit('add',2);
    }
  }
}
</script>

<style scoped>
</style>
