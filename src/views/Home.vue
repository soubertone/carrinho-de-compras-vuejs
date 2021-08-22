<template>
  <div>
    <h1> Home </h1>

    <div class="row">

      <div class="col-12 col-md-6">
        
        <div class="btn-group px-3" role="group" aria-label="">
          <button type="button" @click="add(1.00)" class="btn btn-success">Adicionar R$ 1,00</button>
          <button type="button" @click="add(2.50)" class="btn btn-success">Adicionar R$ 2,50</button>
          <button type="button" @click="add(3.00)" class="btn btn-success">Adicionar R$ 3,00</button>
        </div>

      </div>

      <div class="col-12 col-md-6 mt-4 mt-md-0">

        <div class="btn-group px-3" role="group" aria-label="">
          <button type="button" @click="remove(1.00)" class="btn btn-success">Remover R$ 1,00</button>
          <button type="button" @click="remove(2.50)" class="btn btn-success">Remover R$ 2,50</button>
          <button type="button" @click="remove(3.00)" class="btn btn-success">Remover R$ 3,00</button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {

    add(value) {
      this.$store.commit('ADD_VALUE', value)
    },

    remove(value) {
      if(!this.$store.commit('REMOVE_VALUE', value)) {
        console.log('Carrinho com valor negativo!');
      }
    }

  },
}
</script>
