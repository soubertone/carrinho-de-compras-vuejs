import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

const store = {

  actions: {

    getProducts() {

      return new Promise( (resolve, reject) => {
        axios.get("http://localhost:3000/products")
          .then(response => {
            resolve(response.data.data)
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

    ADD_PRODUCT(state, {id, product, quantity, price}) {
      var i = null;
      if(state.items_carrinho.length > 0) {
        
        for (let index = 0; index < state.items_carrinho.length; index++) {
          const element = state.items_carrinho[index];
          if(element.id === id) {
            i=true;
            state.items_carrinho[index].quantity += parseInt(quantity);
            break;
          }
        }

      }

      if(!i) state.items_carrinho.push({id, product, quantity, price});
      state.value_carrinho += (price * parseFloat(quantity));
    },

    CLEAN_CART(state) {
      state.items_carrinho = [];
      state.value_carrinho = 0.00;
    },

  }

}

export default new Vuex.Store(store)
