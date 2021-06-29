<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app color="#f5f5f5">
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
          @click="$router.push('/')"
          color="primary">Página Principal</v-list-item>
          <v-list-item
          @click="$router.push('/guia/diabetes')"
          color="primary">Guia de Diabetes Mellitus</v-list-item>
          <v-list-item
          @click="$router.push('/guia/hipertensao')"
          color="primary">Guia de Hipertensão</v-list-item>
          <v-list-item
          @click="$router.push('/guia/extras')"
          color="primary">Conteúdos Extras</v-list-item>
          <v-list-item
          v-if="!admin"
          @click="$router.push('/login')"
          color="primary">Administrativo</v-list-item>
          <v-list-item
          v-if="admin"
          @click="$router.push('/tags')"
          color="primary">Tags</v-list-item>
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
      <v-spacer></v-spacer>
        <v-btn
          v-if="admin"
          style="margin-left: 1rem"
          color="error"
          @click="logout"
        >
          <div class="button-text">Logout</div>
        </v-btn>
    </v-app-bar>

    <v-main>
      <v-header v-if="isHome" />
      <router-view ref="routerRef" @logado="admin = true" ></router-view>
    </v-main>

    <v-footer color="primary" class="footer">
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
import api from './services/api';
import VHeader from './components/Header.vue';

export default {
  components: {
    VHeader,
  },
  data() {
    return {
      drawer: false,
      admin: false,
    };
  },
  methods: {
    logout() {
      delete api.defaults.headers.common.Authorization;
      this.admin = false;

      this.$router.push('/login');
    },
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

.appbar {
  display:flex;
  justify-content: space-between !important;
}

.button-text {
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: #ffffff;
}
</style>
