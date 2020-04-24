<template>
  <div>
     eg2:$attrs属性传递，在父组件上通过$attrs做绑定并定义好传递的值传递给子孙组件(在孙组件也可以拿到)，
         $attrs是对象形式的数据
      my computer is {{$attrs.computer}} brand 
      my phone is {{$attrs.phone}} brand 
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>