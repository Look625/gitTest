<template>
  <div>
     eg3:$refs
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