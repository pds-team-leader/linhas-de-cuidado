<template>
  <v-container fluid fill-height>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card elevation="4" class="login-card">
          <v-card-title class="primary white--text justify-center"
            >Login</v-card-title
          >
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    class="text"
                    name="user"
                    label="Usuário"
                    v-model="input.username"
                    type="user"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    class="text"
                    name="password"
                    label="Senha"
                    v-model="input.password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn class="primary white--text" v-on:click="authenticate()"
                    >Entrar</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../services/api';

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async authenticate() {
      const res = await api.post('/auth/authenticate', {
        email: this.input.username,
        password: this.input.password,
      });

      const token = `Bearer ${res.data.token}`;

      try {
        api.defaults.headers.common.Authorization = token;
        this.$emit('logado');
        this.$router.push('/');
      } catch (err) {
        if (err) this.$router.push('/login');
      }
    },
  },
};
</script>
<style>
</style>
