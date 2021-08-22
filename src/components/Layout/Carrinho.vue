<template>

    <button class="btn btn-primary rounded-circle fixed-bottom mb-4 ml-4 p-3 border border-dark">
        <h3>
            R$ {{ this.$store.state.carrinho.toFixed(2) }}
        </h3>
    </button>
    
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
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