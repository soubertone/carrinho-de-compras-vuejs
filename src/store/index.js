import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    carrinho: 0.00,
  },

  mutations: {

    ADD_VALUE(state, payload) {
      state.carrinho = (state.carrinho + payload)
    },

    REMOVE_VALUE(state, payload) {
      if(state.carrinho === 0.00) {
        alert('O carrinho não pode ficar negativo')
      } else {
        state.carrinho = (state.carrinho - payload)
      }
    }

  },

})
