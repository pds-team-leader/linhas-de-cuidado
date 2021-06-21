<template>
  <v-container fluid fill-height>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card elevation="4" class="login-card">
          <v-card-title class="primary white--text justify-center">Login</v-card-title>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      class="text"
                      name="user"
                      label="Usuário"
                      id="user"
                      v-model="user"
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
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn class="primary white--text" type="submit">Entrar</v-btn>
                  </v-flex>
                </v-layout>
              </form>
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
  methods: {
    async authenticate(req) {
      const { email, password } = req.body;

      const res = await api.post('/login', { email, password });
      try {
        api.defaults.headers.common.Authorization = res.data.token;
        res.sendStatus(200).send('Auth successfull');
        this.$router.push('/');
      } catch (err) {
        if (err) this.$router.push('/login');
        // to-do warning alert
      }
    },
  },
};
</script>
<style>
</style>
