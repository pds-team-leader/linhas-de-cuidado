<template>
<div>
  <button-carousel />
  <v-col align="center">
    <p class="title">Guias e Conteúdos</p>

    <v-card
      width="326px"
    >
      <v-img
        height="140"
        src='../assets/diabetes.png'
      ></v-img>
      <v-card-title>Guia Diabetes Mellitus</v-card-title>
      <v-card-text>Manejo clínico na atenção primária à saúde.</v-card-text>
      <v-btn class="mb-6" color="primary" to="/guia-diabetes">Saber mais</v-btn>
    </v-card>

    <v-card
      width="326px"
      class="mt-4"
    >
      <v-img
        height="140"
        src='../assets/hipertensao.png'
      ></v-img>
      <v-card-title>Guia Hipertensão Arterial</v-card-title>
      <v-card-text>Manejo clínico na atenção primária à saúde.</v-card-text>
      <v-btn class="mb-6" color="primary" to="/guia-hipertensao">Saber mais</v-btn>
    </v-card>

    <v-card
      width="326px"
      class="mt-4"
    >
      <v-img
        height="140"
        src='../assets/extras.png'
      ></v-img>
      <v-card-title>Conteúdos Extras</v-card-title>
      <v-card-text>Videos, podcasts, artigos e diversos conteúdos.</v-card-text>
      <v-btn class="mb-6" color="primary">Saber mais</v-btn>
    </v-card>

  </v-col>
</div>
</template>

<script>
import ButtonCarousel from '../components/ButtonCarousel.vue';

export default {
  components: {
    ButtonCarousel,
  },

};
</script>

<style>

.title{
font-weight: bold;
font-size: 24px;
line-height: 32px;
letter-spacing: 1px;
color: #3988B8;
}

</style>
