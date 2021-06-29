<template>
  <div v-show="admin">
    <breadcrumb/>
    <v-container class="vcontainer">
      <v-row>
        <v-col class="main-col">
          <v-sheet
            v-if="admin"
            class="vsheet pt-3"
            outlined
            max-height="56px"
          >
            <p class="title" >Nova publicação</p>
          </v-sheet>

          <v-container class="forms">
            <v-form v-model="isValid">

              <v-row>
                <v-select
                  v-model="guia"
                  :items="[
                    {text: 'Guia Diabetes Mellitus', value: 'diabetes'},
                    {text: 'Guia Hipertensão Arterial', value: 'hipertensao'},
                    {text: 'Conteúdos Extras', value: 'extras'}
                  ]"
                  dense
                  label="Guia"
                  outlined
                  :rules="inputRules"
                  required
                  style="max-width: 335px"
                ></v-select>
              </v-row>
              <v-row class="directoryRow">
                <v-col style="padding: 0">
                  <v-text-field
                    v-model="dirTitle"
                    outlined
                    dense
                    label="Título"
                    :rules="inputRules"
                    required
                    style="max-width: 335px; "
                  />
                  <v-text-field
                    v-model="dirDescription"
                    outlined
                    dense
                    label="Descrição"
                    :rules="inputRules"
                    required
                    style="max-width: 335px;"
                  />
                </v-col>
                <v-col style="padding: 0">
                  <v-autocomplete
                    class="vautocomplete"
                    v-model="selectedTags"
                    :items="tags"
                    dense
                    outlined
                    multiple
                    color="primary"
                    label="Tags"
                    height="106px"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <div v-for="(section, index) in sections" :key="`${index}`">
                <v-row>
                  <v-text-field
                    v-model="section.title"
                    outlined
                    dense
                    label="Título da seção"
                    :rules="inputRules"
                    required
                    style="max-width: 335px; margin-top: 1rem"
                  />
                </v-row>
                <v-row>
                  <v-textarea
                    v-model="section.text"
                    outlined
                    dense
                    label="Texto da seção"
                    :rules="inputRules"
                    required
                  />
                </v-row>
              </div>

              <v-row justify="center">
                <v-btn
                  fab
                  small
                  color="primary"
                  @click="addSection"
                >
                <v-icon color="white">mdi-plus</v-icon>
                </v-btn>
              </v-row>
              <v-btn
                class="vbtn"
                color="primary"
                type="submit"
                pr
                :disabled="!isValid"
                @click.prevent.stop="addDirectory"
              >
                Salvar
                </v-btn>
            </v-form>
          </v-container>
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
      sections: [
        {
          title: '',
          text: '',
        },
      ],
      dirTitle: '',
      dirDescription: '',
      guia: '',
      isValid: false,
      inputRules: [
        (v) => !!v || 'Campo Obrigatório',
      ],
      tags: [],
      selectedTags: [],
    };
  },
  methods: {
    addSection() {
      this.sections.push({ title: '', text: '' });
    },
    trataTags() {
      this.selectedTags = this.tags
        .filter((tag) => this.selectedTags.includes(tag.text))
        .map((selectedTag) => selectedTag.id);
    },
    async addDirectory() {
      this.trataTags();
      const directory = await api.post(`/${this.guia}`, {
        title: this.dirTitle,
        description: this.dirDescription,
        tagIds: this.selectedTags,
      });

      this.sections.forEach(async (section) => {
        await api.post('/publications', {
          title: section.title,
          directory: directory.data.id,
          description: section.text,
          isFromGuide: true,
        });
      });

      this.$router.push(`/guia/${this.guia}`);
    },
    async getTags() {
      const response = await api.get('/tag');
      this.tags = response.data;
    },
  },
  mounted() {
    this.getTags();
  },
  computed: {
    admin() {
      return Boolean(api.defaults.headers.common.Authorization);
    },
  },

};
</script>

<style lang="scss" scoped>

.main-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vcontainer {
  display: flex;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

.forms {
  padding: 2rem;
}

.vsheet {
  cursor: pointer;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-right: none;
  border-left: none;
  height: 156px;
  overflow: hidden;

}

.vbtn {
  margin: 3rem 1rem 1rem 1rem;
}

.title{
  font-style: normal;
  font-weight: bold;
  font-size: 24px !important;
  line-height: 32px ;
  letter-spacing: 1px !important;
  color: #3988B8;
}

.directoryRow {
  display: flex;
  padding: 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
}

.vautocomplete {
  overflow: hidden;
}

</style>
