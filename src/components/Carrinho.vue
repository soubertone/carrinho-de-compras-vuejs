<template>

    <div>

        <b-button v-b-modal.modal-lg variant="primary" @click="getCarrinho" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary rounded-circle fixed-bottom mb-4 ml-4 p-3 border border-dark">
            <h3>
                R$ {{ this.$store.state.value_carrinho }}
            </h3>
        </b-button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Produto</th>
                                            <th>Quantidade</th>
                                            <th>Preço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="product in products" :key="product.id">
                                            <td scope="row">{{ product.id }}</td>
                                            <td>{{ product.product }}</td>
                                            <td>{{ product.quantity }}</td>
                                            <td>{{ product.price }}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" @click="limparCarrinho" data-dismiss="modal">Limpar carrinho</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>

                </div>
            </div>
        </div>
    
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
        },
        
        limparCarrinho() {
            this.$store.commit("CLEAN_CART");
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