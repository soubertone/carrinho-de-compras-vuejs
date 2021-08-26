<template>
    <div>
        <NavBar />
        <div class="container-fluid mt-5">
            <div class="row d-flex justify-content-center bg-light">
                <div class="col-6 py-2">
                    <p id="title-pag" class="h1 text-uppercase text-center bg-light shadow">
                        Carrinho de compras
                    </p>
                </div>

                <div class="col-12 px-4 mb-5">
                    <div class="row">
                        <Produto product="Produto 1" price="19.99"/>
                        <Produto product="Produto 2" price="22.99"/>
                        <Produto product="Produto 3" price="27.99"/>
                        <Produto product="Produto 4" price="32.99"/>
                        <Produto product="Produto 5" price="64.99"/>
                        <Produto product="Produto 6" price="72.99"/>
                        <Produto product="Produto 7" price="58.99"/>
                        <Produto product="Produto 8" price="99.99"/>
                    </div>
                </div>

                <div class="col-12 pt-0" style="background: #ffffff;">
                    <Footer />
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import NavBar from "../components/Navbar.vue";
import Produto from "../components/Produto.vue";
import Footer from "../components/Footer.vue"

export default {
  name: 'Home',

  components: {
      Produto,
      NavBar,
      Footer,
  },

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

<style scoped>
    @media only screen and (max-width: 728px) {
        #title-pag {
            font-size: 25px;
        }   
    }
</style>
