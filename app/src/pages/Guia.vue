<template>
    <div>
    <breadcrumb />
    <v-overlay color="primary" :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-container class="vcontainer">
      <v-row>
        <v-col class="main-col" >
          <v-sheet
            v-if="admin"
            class="vsheet pt-3"
            outlined
            max-height="56px"
          >
            <p @click="$router.push('/nova-publicacao')" class="title" >+ Novo Diretório</p>
          </v-sheet>
          <v-sheet
            class="vsheet"
            v-for="dir in directories"
            :key="dir.id"
            outlined
          >
            <v-row>
              <v-col>
                <div class="text-col">
                  <span
                    class="title"
                    @click="goToPublications(dir.id)"
                  >
                    {{dir.title}}
                  </span>
                  <p class="description"> {{dir.description}} </p>
                </div>
                <v-row
                  v-if="admin"
                  style="margin-left: 1rem"
                >
                  <v-btn
                    style="border-radius: 12px"
                    color="primary"
                    @click="editar(dir.id)"
                  >
                    <div class="button-text">Editar</div>
                  </v-btn>
                  <v-btn
                    style="margin-left: 1rem; border-radius: 12px"
                    color="error"
                    @click="excluir(dir.id)"
                  >
                    <div class="button-text">Excluir</div>
                  </v-btn>
                </v-row>
              </v-col>
              <v-col :cols="2" v-if="!admin">
                <v-btn
                  color="primary"
                  icon
                  plain
                  tile
                  :ripple="false"
                  height="156px"
                  width="100%"
                  @click="goToPublications(dir.id)"
                >
                  <v-icon large color="primary">mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '../services/api';
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  components: { Breadcrumb },
  name: 'Guia',
  data() {
    return {
      directories: '',
      admin: true,
    };
  },
  computed: {
    guia() {
      return String(this.$route.name).toLowerCase();
    },
    overlay() {
      return this.directories === '';
    },
  },
  methods: {
    async getDirectories() {
      const response = await api.get(`/${this.guia}`);

      this.directories = response.data;
    },
    goToPublications(id) {
      this.$router.push(`/guia/${this.guia}/${id}`);
    },
    reset() {
      this.directories = '';
      this.getDirectories();
    },
    async editar(id) {
      this.$router.push(`/editar-publicacao/${this.guia}/${id}`);
    },
    async excluir(id) {
      const response = await api.delete(`/${this.guia}/${id}`);
      this.reset();
      return response;
    },
  },
  mounted() {
    this.reset();
  },

};
</script>

<style lang="scss" scoped>

.title{
  font-style: normal;
  font-weight: bold;
  font-size: 24px !important;
  line-height: 32px ;
  letter-spacing: 1px !important;
  color: #3988B8;

  &:hover {
    text-decoration: underline;
  }
}

.description {
  font-style: normal;
  font-weight: normal;
  font-size: 16px ;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #8C8C8C;
}

.vcontainer {
  display: flex;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

.text-col {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 1rem;
}

.vsheet {
  cursor: pointer;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-right: none;
  border-left: none;
  height: 156px;
  overflow: hidden;

  &:hover {
    background-color: #ececec;
  }
}

@media only screen and (max-width: 600px) {
  .vsheet {
    height: 180px;
  }

  .title {
    font-size: 22px !important;
  }

  .description {
    font-size: 14px;
  }
}
.main-col {
  display: flex;
  flex-direction: column;
  align-items: center;
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
