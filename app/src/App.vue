<template>
  <div id="app">
    Mensagem do Servidor: {{ mensagem }}
  </div>
</template>

<script>

import api from './services/api';

export default {
  name: 'App',
  data() {
    return {
      mensagem: '',
    };
  },
  mounted() {
    api.get('http://localhost:3000')
      .then((response) => { this.mensagem = response.data; });
    console.log();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
