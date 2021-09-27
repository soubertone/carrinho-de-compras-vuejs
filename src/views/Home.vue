<template>
    <div>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-6 py-2">
                    <p id="title-pag" class="h1 text-uppercase text-center bg-light shadow">
                        Carrinho de compras
                    </p>
                </div>

                <div class="col-12 px-4 mb-5">

                    <div :class="transaction" v-if="!data">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <p class="text-uppercase"> Buscando produtos... </p>
                    </div>

                    <div class="row">
                        <Produto v-for="product in data" :key="product.id" :id="product.id" :product="product.name" :price="product.price"/>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import Produto from "../components/Produto.vue";

export default {
  name: 'Home',

  components: {
      Produto,
  },

  data() {
      return {
          data: null,
          transaction: false,
      }
  },

  created() {

      setTimeout(() => {
          this.$store.dispatch("getProducts")
            .then(res => {
                this.data = res 
                this.transaction = true
            })
            .catch(err => {
                console.log("Error: "+err)
            })
      }, 500);

  },
}
</script>

<style scoped>
    @media only screen and (max-width: 728px) {
        #title-pag {
            font-size: 25px;
        }   
    }

    .transaction {
        opacity: 0;
        transition-duration: 1s;
    }

</style>
