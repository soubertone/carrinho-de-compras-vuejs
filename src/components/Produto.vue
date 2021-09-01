<template>
    
    <div class="col-12 col-md-3 mt-3 p-3 d-flex justify-content-center">
        <div class="card">
            <div class="card-header text-nowrap text-center">
                <h3>{{ product }}</h3>
            </div>

            <div class="card-body text-center border rounded-0">
                <img class="rounded img-fluid" src="assets/img/mountain_bg.jpg">
            </div>

            <div class="card-footer text-left border rounded-0 shadow-sm">
                <form @submit.prevent="addValue(product, price, quantity)">
                    <div class="form-row">

                        <div class="col-10 col-md-6 text-md-left" style="margin-right: 0px;">
                            <input 
                                class="form-control form-control-sm" 
                                v-model="quantity"
                                type="number" 
                                max="5" 
                                value="1" 
                                name="quantity" 
                                min="1" 
                                required
                            />
                        </div>

                        <div class="col-12 col-md-6 mt-3 mt-md-0 text-md-right">
                            <button class="btn btn-primary" type="submit">Adicionar</button>
                        </div>

                        <div class="col-12 mt-3 mt-md-0 text-monospace text-uppercase text-left">
                            <input 
                                type="text" 
                                class="form-control lead bg-transparent border border-light text-left" 
                                style="font-size: 20px; font-weight: bold" 
                                :value="'R$ '+price"
                            />
                        </div>

                    </div>
                </form>
            </div>

        </div>
    </div>

</template>

<script>
export default {

    props: {
        product: {
            type: String
        },
        price: {
            type: Number
        }
    },

    data() {
        return {
            quantity: 1,
            data_product: {}
        }
    },

    methods: {

        addValue(product, price, quantity) {

            this.data_product.product = product;
            this.data_product.price = price;
            this.data_product.quantity = quantity;

            this.quantity = 1;

            this.$store.commit("ADD_VALUE", this.data_product);
        }

    }
    
}
</script>