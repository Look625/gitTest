<template>
  <div>
     eg4:$children
      my phone is {{msg}} brand 
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:""
    }
  },
  methods:{
    getMessage(m){
      this.msg = m
    }
  }
}
</script>

<style>

</style>