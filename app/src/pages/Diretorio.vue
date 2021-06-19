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
            class="vsheet"
            outlined
            max-height="156px"
          >
            <v-row>
              <v-col :cols="10">
                <div class="text-col">
                  <span class="title"> {{directory.title}} </span>
                  <p class="description"> {{directory.description}} </p>
                </div>
              </v-col>
            </v-row>
          </v-sheet>
          <div v-for="pub in publications" class="text-col" :key="pub.id">
            <p class="pub-title">{{pub.title}}</p>
            <p class="pub-description">{{pub.description}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import api from '../services/api';

export default {
  name: 'Diretorio',
  components: { Breadcrumb },
  data() {
    return {
      directory: '',
      publications: '',
    };
  },
  computed: {
    overlay() {
      return this.directory === '';
    },
    directoryId() {
      return this.$route.params.id;
    },
    guia() {
      let guia = 'diabetes';

      if (String(this.$route.path).includes('hipertensao')) {
        guia = 'hipertensao';
      }
      return guia;
    },
  },
  methods: {
    async getDirectory() {
      const query = `/${this.guia}/${this.directoryId}`;

      const response = await api.get(query);
      this.directory = response.data;
    },
    async getPublications() {
      const query = `/publications/dir/${this.directoryId}`;

      const response = await api.get(query);
      this.publications = response.data;
    },
    reset() {
      this.directory = '';
      this.publications = '';
    },
  },
  mounted() {
    this.reset();
    this.getDirectory();
    this.getPublications();
  },
};
</script>

<style lang="scss" scoped>

.title{
  padding-top: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 24px !important;
  line-height: 32px ;
  letter-spacing: 1px !important;
  color: #3988B8;
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
  padding-top: 0;
  overflow: hidden;
}

.text-col {
  display: flex;
  flex-direction: column;
  text-align: start;
  max-width: 900px;
  width: 100%;

  .pub-title {
    padding-top: 1rem;
    margin-bottom: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: black;

    @media only screen and (max-width: 600px) {
      &::before {
        content: '•';
      }
    }
  }

  .pub-description {
    margin-bottom: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #8C8C8C;
    text-align: justify;
  }
}

.vsheet {
  cursor: pointer;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-right: none;
  border-left: none;

  &:hover {
    background-color: #ececec;
  }
}

.main-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
