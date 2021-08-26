<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Carrinho />
    <router-view/>
  </div>
</template>

<script>
import Carrinho from './components/Layout/Carrinho.vue'

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
