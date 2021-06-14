<template>
<div>
  <button-carousel />
  <v-col align="center">
    <p class="titulo">Guias e Conteúdos</p>

    <div class="home-cards">
      <v-card
        width="326px"
      >
        <v-img
          height="140"
          src='../assets/diabetes.png'
        ></v-img>
        <v-card-title>Guia Diabetes Mellitus</v-card-title>
        <v-card-text>Manejo clínico na atenção primária à saúde.</v-card-text>
        <v-btn class="mb-6" color="primary">Saber mais</v-btn>
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
        <v-btn class="mb-6" color="primary">Saber mais</v-btn>
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
    </div>

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

<style lang="scss" scoped>

.titulo{
  margin-top: 90px;
  font-weight: bold;
  font-size: 34px;
  line-height: 32px;
  letter-spacing: 1px;
  color: #3988B8;
}

.home-cards {
  display: flex;
  justify-content: center;
  column-gap: 80px;
  margin-top: 60px;

  @media screen and (max-width: 1140px) {
  flex-direction: column;
  align-items: center;
}
}

</style>
