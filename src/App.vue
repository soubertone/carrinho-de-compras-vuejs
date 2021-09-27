<template>
  <div id="app">
    <Carrinho />
    <router-view/>
  </div>
</template>

<script>
import Carrinho from './components/Carrinho.vue'

export default {
  components: {
    Carrinho,
  },
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  scroll-behavior: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: white;
}
</style>
