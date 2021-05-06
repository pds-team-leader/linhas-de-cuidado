<template>
  <div id="app">
    Mensagem do Servidor: {{ mensagem }}
  </div>
</template>

<script>

import api from './services/api';
import urls from './endpoints/urls';

const {
  HOME,
} = urls;

export default {
  name: 'App',
  data() {
    return {
      mensagem: '',
    };
  },
  mounted() {
    api.get(HOME)
      .then((response) => {
        this.mensagem = response.data;
      });
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
