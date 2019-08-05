import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits:['苹果'],
    fruit:''
  },
  mutations: {
    GET_FRUITS(state,fruit){
      state.fruits.push(fruit)
    },
    SET_FRUIT(state,fruit){
      state.fruit = fruit
    }

  },
  actions: {

  },
  getters:{
    show(state){
      return state.fruits.join('、')
    }
  }
})
