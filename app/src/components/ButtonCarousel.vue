<template>
  <v-sheet
    class="mx-auto"
    elevation="2"
  >
    <v-slide-group
      v-model="model"
      class="py-2 px-2"
      center-active
      show-arrows="false"
    >
      <v-slide-item
        v-for="option in options"
        :key="option.name"
      >
        <v-btn
          class="button ma-1"
          color="primary"
          elevation="2"
          small
        >
          {{ option.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: 'Classificação',
        },
        {
          name: 'Diagnóstico',
        },
        {
          name: 'Medicação',
        },
        {
          name: 'Prevenção',
        },
        {
          name: 'Consulta',
        },
        {
          name: 'Exame',
        },
        {
          name: 'Tratamento',
        },
        {
          name: 'Complicações',
        },
        {
          name: 'Orientações',
        },
        {
          name: 'Avaliação',
        },
      ],
    };
  },

};
</script>

<style>
.button{
  text-transform: capitalize !important;
}

</style>
