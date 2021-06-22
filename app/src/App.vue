<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item color="primary" class="item">Guia de Diabetes Mellitus</v-list-item>
          <v-list-item color="primary">Guia de Hipertensão</v-list-item>
          <v-list-item color="primary">Administrativo</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        color="primary"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="title" @click="$router.push('/')">Linhas de Cuidado</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-header v-show="isHome" />
      <router-view ref="routerRef"></router-view>
    </v-main>

    <v-footer color="primary" class="justify-center">
      <div class="footer-container">
        <img src="./assets/logo-footer.svg" />
        <p class="footer-text">
          Universidade Federal de Mato Grosso do Sul. Copyright © 2021
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import VHeader from './components/Header.vue';

export default {
  components: {
    VHeader,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isHome() {
      return Boolean(this.$route.name === 'Home');
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Poppins, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #3988b8 !important;
}

.title {
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #3988b8;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-text {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #ffffff;
    margin: 0;
  }
}
</style>
