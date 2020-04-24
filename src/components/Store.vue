<template>
  <div>
    <h2>test-vuex</h2>
    <h3>{{ num }}</h3>
    <h1>{{$store.state.num}}</h1>
    <h2>{{count}}</h2>
   <div>
        <button @click="add(5)">+</button>
        <button @click="reduce(5)">-</button>
        <button @click="ajax(10)">ajax</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
     // num: this.$store.state.num
    };
  },
  computed: {
    // count(){
    //   return this.$store.getters.count
    // }
    ...mapState({
        num:'num'
    }),
    ...mapGetters({
        count:'count'
    })
  },
  methods: {
      ...mapMutations({
         add:'doAdd',
         reduce:'doReduce'
      }),
      ...mapActions({
          ajax:'doAjax'
      })
    // add() {
    //     this.$store.commit('doAdd',5)
    // },
    // reduce() {
    //     this.$store.commit('doReduce',5)
    // },
    // ajax() {
    //     this.$store.dispatch('doAjax',10)
    // }
  }
};
</script>

<style></style>
