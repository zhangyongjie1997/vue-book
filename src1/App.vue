<template>
  <div>
    <button @click="toast">++</button>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
export default {
  data() {
    return {

    }
  },
  methods:{
    toast(){
      this.$toasted.show("Toasted !!", { 
	    theme: "bubble", 
	    position: "top-center", 
	    duration : 2000
    });
    }
  }
}
</script>

<style scoped>
</style>
