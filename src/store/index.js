import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        num: 3
    },
    getters:{
        count(state){
          return state.num;
        }
    },
    mutations:{
        doAdd(state, n = 0) {
            state.num += n
        },
        doReduce(state, n = 0) {
           state.num -= n
        }
    },
    actions:{
        doAjax(context,n=0){
            context.commit('doAdd',n)
            
        }
    }

})
// export default new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// })
export default store;