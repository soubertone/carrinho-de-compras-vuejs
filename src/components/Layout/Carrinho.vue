<template>

    <div>

        <b-button v-b-modal.modal-lg variant="primary" @click="getCarrinho" class="btn btn-primary rounded-circle fixed-bottom mb-4 ml-4 p-3 border border-dark">
            <h3>
                R$ {{ this.$store.state.value_carrinho }}
            </h3>
        </b-button>

        <b-modal id="modal-lg" size="lg" title="Meu carrinho" ok-only ok-title="OK" ok-variant="outline-primary">
            
            <div class="row">
                <div class="col-12">

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.product">
                                <td scope="row">{{ product.product }}</td>
                                <td>{{ product.quantity }}</td>
                                <td>{{ product.price }}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </b-modal>
    
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            products: null,
        }
    },

    methods: {

        getCarrinho() {
            this.products = this.$store.state.items_carrinho;
        }

    }
}
</script>

<style scoped>

button {
    font-family: Arial, Helvetica, sans-serif;
}

h3 {
    background: transparent;
}
</style>