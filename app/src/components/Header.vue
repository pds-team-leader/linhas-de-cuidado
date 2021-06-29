<template>
  <v-app-bar
    class="header"
    height="236"
    flat
    align='center'
  >
  <v-col align="center">

    <p
      class="title"
    >
      O que você procura?
    </p>
    <v-col sm="6" md="6">
      <v-autocomplete
        v-model="selectedId"
        :loading="isLoading"
        :items="titles"
        :item-text="publications.title"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        hide-details
        :allow-overflow="false"
        label="Pesquisar"
        solo
        dense
        clearable
        @input="goToDir"
      ></v-autocomplete>
    </v-col>
  </v-col>
  </v-app-bar>
</template>

<script>
import api from '../services/api';

export default {
  data: () => ({
    publications: [],
    model: null,
    search: null,
    tab: null,
    selectedId: '',
    titles: [],
  }),
  computed: {
    isLoading() {
      return this.publications.length === 0;
    },
  },
  methods: {
    async getPublications() {
      const response = await api.get('/publications');
      this.publications = response.data;
      this.titles = this.publications.map((pub) => ({ text: pub.title, value: pub.directory }));
    },
    async goToDir() {
      const selectedPublication = this.publications.find(
        (pub) => pub.directory === this.selectedId,
      );
      let guia = 'diabetes';
      if (selectedPublication.directories.guide === 2) {
        guia = 'hipertensao';
      }
      if (selectedPublication.directories.guide === 3) {
        guia = 'extras';
      }
      this.$router.push(`/guia/${guia}/${this.selectedId}`);
    },
    reset() {
      this.publications = [];
      this.selectedId = '';
      this.titles = [];
      this.getPublications();
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  text-align: center;
  background-color: #3988B8 !important;

  .title {
    font-weight: normal;
    font-size: 34px !important;
    line-height: 32px;
    color: #FFFFFF;
  }

  .v-autocomplete{
    margin-top: 16px;
  }
}

</style>
