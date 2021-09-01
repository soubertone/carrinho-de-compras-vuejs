import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({

  actions: {

    getProducts() {

      return new Promise( (resolve, reject) => {
        axios.get("http://localhost/api/produtos")
          .then(response => {
            resolve(response.data.data.data)
          })
          .catch(err => {
            reject(err)
          })
      });

    }

  },

  state: {
    items_carrinho: [],
    value_carrinho: 0.00,
  },

  mutations: {

    ADD_VALUE(state, payload) {
      state.items_carrinho.push(payload);
      state.value_carrinho += (payload.price * payload.quantity);
    },

    // REMOVE_VALUE(state, payload) {
    //   let value = (state.carrinho - payload);

    //   if(value < 0.00) {
    //     return false;
    //   } else {
    //     state.carrinho = value;
    //   }

    // }

  },

})
