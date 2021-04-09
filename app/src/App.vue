<template>
  <div id="app">
    {{ mensagem }}
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
    this.mensagem = api.get('http://localhost:8000/');
    console.log(this.mensagem);
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
