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
        :key="option.name"
      >
        <v-btn
          class="button ma-1"
          color="primary"
          elevation="2"
          small
          :to="`/results/${option.id}`"
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
          id: 1,
        },
        {
          name: 'Diagnóstico',
          id: 2,
        },
        {
          name: 'Medicação',
          id: 3,
        },
        {
          name: 'Prevenção',
          id: 4,
        },
        {
          name: 'Consulta',
          id: 5,
        },
        {
          name: 'Exame',
          id: 6,
        },
        {
          name: 'Tratamento farmacológico',
          id: 7,
        },
        {
          name: 'Tratamento não farmacológico',
          id: 8,
        },
        {
          name: 'Complicações',
          id: 9,
        },
        {
          name: 'Orientações',
          id: 10,
        },
        {
          name: 'Avaliação',
          id: 11,
        },
        {
          name: 'Insulina',
          id: 12,
        },
        {
          name: 'Monitoramento',
          id: 13,
        },
        {
          name: 'Rastreamento',
          id: 14,
        },
        {
          name: 'Comorbidades',
          id: 15,
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
