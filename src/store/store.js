import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    }
    // doubleCounter(state) {
    //   return state.counter * 2
    // }
  },
  mutations: {
    increment: state => {
      state.counter++
    },
    decrement: state => {
      state.counter--
    }
  },
  actions: {
    increment: context => {
      context.commit('increment')
    },
    decrement: context => {
      context.commit('decrement')
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => {
        commit('increment')
      }, 2000)
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement')
      }, 2000)
    }
  }
})