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
    <v-col cols="6" sm="6" md="6">
      <v-autocomplete
        slot="extension"
        v-model="select"
        :loading="isLoading"
        :items="items"
        :search-input.sync="search"
        cache-items
        append-icon=""
        class="mx-4"
        hide-no-data
        hide-details
        label="Pesquisar"
        solo
        dense
        clearable
      ></v-autocomplete>
    </v-col>
  </v-col>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    select: {},
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      console.log(val);
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch('https://api.coingecko.com/api/v3/coins/list')
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => { this.isLoading = false; });
    },
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
