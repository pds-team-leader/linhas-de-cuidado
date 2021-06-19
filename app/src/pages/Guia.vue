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
            v-for="dir in directories"
            :key="dir.id"
            outlined
            max-height="156px"
            @click="goToPublications(dir.id)"
          >
            <v-row>
              <v-col :cols="10">
                <div class="text-col">
                  <span class="title"> {{dir.title}} </span>
                  <p class="description"> {{dir.description}} </p>
                </div>
              </v-col>
              <v-col :cols="2">
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
    },
  },
  mounted() {
    this.reset();
    this.getDirectories();
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
