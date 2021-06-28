<template>
  <div>
    <breadcrumb />
    <v-overlay color="primary" :value="showAlert" transition="fade-transition"/>
    <v-container class="vcontainer">
      <v-row justify="center">
        <v-col class="main-col">
            <v-alert
              v-if="showAlert"
              class="alert"
              :style="`top: ${alertPosition}% !important`"
              transition="fade-transition"
              tag="alert"
              color="white"
              elevation="12"
              width="290px"
            >
              <p>Tem certeza que deseja deletar a tag?</p>
              <v-row class="mt-5 mb-1" justify="space-around">
                <v-btn color="error" @click="deleteTag"> Deletar </v-btn>
                <v-btn color="primary" @click="showAlert = false">Cancelar</v-btn>
              </v-row>
            </v-alert>
          <v-sheet class="vsheet mb-8" outlined>
            <p class="title mt-6"> + Nova Tag </p>
          </v-sheet>
          <div class="vsheet">
            <v-row justify="start" style="align-items: baseline;">
              <v-col class="vcol" :cols="8">
                <v-text-field
                  v-model="newTag.text"
                  placeholder="Insira uma nova Tag"
                  solo
                  dense
                />
              </v-col>
              <v-col class="vcol" :cols="3">
                <v-btn
                  plain
                  color="error"
                  x-small
                  dense
                  :disabled="newTag.text === ''"
                  @click="newTag.text = ''"
                >
                  Cancelar
                </v-btn>
              </v-col>
              <v-col class="vcol" :cols="1">
                <v-btn
                  icon
                  color="primary"
                  :disabled="newTag.text === ''"
                  @click="createTag"
                >
                  <v-icon> mdi-check</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <v-sheet class="vsheet" outlined>
            <p class="title mt-6"> Editar Tags</p>
          </v-sheet>
          <div
            class="vsheet"
            v-for="tag in tags"
            :key="tag.id"
            outlined
          >
            <v-row justify="start" style="align-items: baseline;">
              <v-col class="vcol" :cols="8">
                <v-text-field
                  v-model="tag.text"
                  :placeholder="tag.text"
                  solo
                  dense
                  @input="tag.changed = true"
                />
              </v-col>
              <v-col class="vcol" :cols="3">
                <v-btn
                  plain
                  color="error"
                  x-small
                  dense
                  :disabled="!tag.changed"
                  @click="tag.text = restoreTag(tag.id); tag.changed = false"
                >
                  Cancelar
                </v-btn>
              </v-col>
              <v-col class="vcol" :cols="1">
                <v-btn
                  icon
                  color="error"
                  small
                  @click="tagToDelete = tag.id; showAlert = true"
                >
                  <v-icon> mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <v-row justify="center">
            <v-btn
              v-show="!hasChanges"
              rounded
              color="primary"
              class="vbtn white--text"
              elevation="8"
              @click="saveTags"
            >
              <v-icon color="white">mdi-check</v-icon>
              Salvar alterações
            </v-btn>
          </v-row>
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
  data() {
    return {
      tags: [],
      originalTags: [],
      newTag: {
        text: '',
      },
      showAlert: false,
      tagToDelete: null,
      alertPosition: 0,
    };
  },
  computed: {
    hasChanges() {
      return Boolean(this.tags.some((tag) => tag.changed === true));
    },
  },
  watch: {
    showAlert() {
      this.alertPosition = (window.scrollY / (window.screen.availHeight * 1.5)) * 100;
    },
  },
  methods: {
    async getTags() {
      const response = await api.get('/tag');
      this.originalTags = response.data.slice(0);
    },
    async getCopyTags() {
      const response = await api.get('/tag');
      this.tags = response.data.slice(0);
    },
    async deleteTag() {
      await api.delete(`tag/${this.tagToDelete}`);
      this.tagToDelete = null;
      this.showAlert = false;
      this.reset();
    },
    async saveTags() {
      this.tags.forEach(async (tag) => {
        await api.put(`/tag/${tag.id}`, {
          text: tag.text,
        });
        this.reset();
      });
    },
    async createTag() {
      await api.post('/tag', {
        text: this.newTag.text,
      });
      this.newTag.text = '';
      this.reset();
    },
    restoreTag(id) {
      const changedTag = this.originalTags.find((ogTag) => ogTag.id === id);
      changedTag.changed = false;
      return changedTag.text;
    },
    reset() {
      this.originalTags = [];
      this.tags = [];
      this.getTags();
      this.getCopyTags();
    },
  },
  mounted() {
    this.getTags();
    this.getCopyTags();
  },

};
</script>

<style lang="scss" scoped>

.vcontainer {
  display: flex;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

.main-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vsheet {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 900px;
  width: 100%;
  border-right: none;
  border-left: none;
  height: 56px;
  overflow: hidden;
  padding: 0rem 1rem;
  margin-top: 0.5rem;
}

@media only screen and (max-width: 600px) {
  .vsheet {
    height: 60px;
  }

  .vcol {
    padding: 0;
  }
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px !important;
  line-height: 32px;
  letter-spacing: 1px !important;
  color: #3988B8;
}

.vbtn {
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.alert {
  position: absolute;
  margin-top: 200px;
  z-index: 12;
}

</style>
