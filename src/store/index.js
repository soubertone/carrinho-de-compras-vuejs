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
      let value = (state.carrinho - payload);

      if(value < 0.00) {
        return false;
      } else {
        state.carrinho = value;
      }

    }

  },

})
