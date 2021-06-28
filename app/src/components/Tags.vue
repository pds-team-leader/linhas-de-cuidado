<template>
  <div>
    <v-sheet class="vsheet" outlined>
      <v-row>
          <p>
            <strong>Tags:  </strong>
            <v-btn
              v-for="tag in tags"
              :key="tag.id"
              text
              small
              color="primary"
              :to="`/results/${tag.id}`"
            >
              {{ tag.text }}
            </v-btn>
          </p>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>

export default {
  props: {
    tags: Array,
  },

};
</script>

<style lang="scss" scoped>

.vsheet {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  max-width: 900px;
  width: 100%;
  padding: 1rem 1rem 0rem 1rem;
  border-right: none;
  border-left: none;
}

</style>
