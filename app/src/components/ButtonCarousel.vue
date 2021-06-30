<template>
  <v-sheet
    class="mx-auto"
    elevation="2"
  >
    <v-slide-group
      class="py-2 px-2"
      center-active
    >
      <v-slide-item
        v-for="option in options"
        :key="option.id"
      >
        <v-btn
          class="button ma-1"
          color="primary"
          elevation="2"
          small
          :to="`/results/${option.value}`"
        >
          {{ option.text }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      options: [],
    };
  },
  methods: {
    async getTags() {
      const response = await api.get('/tag');
      const tags = response.data;
      this.options = tags.map((tag) => ({ text: tag.text, value: tag.id }));
    },
  },
  mounted() {
    this.getTags();
  },

};
</script>

<style>
.button{
  text-transform: capitalize !important;
}

</style>
