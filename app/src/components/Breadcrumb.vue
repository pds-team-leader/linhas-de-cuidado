<template>
<div>

    <v-breadcrumbs
      divider=">"
      :items="breadcrumbs"
    >
      <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        v-if="item.text === 'Home'"
        :href="item.href"
        :disabled="item.disabled"
        ripple
      >
        <v-img src="../assets/Home.svg"/>
      </v-breadcrumbs-item>

      <v-breadcrumbs-item
        v-else
        :href="item.href"
        :disabled="item.disabled"
        ripple
      >
        {{item.text}}
      </v-breadcrumbs-item>
    </template>
    </v-breadcrumbs>
    <v-divider />
</div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      let { breadcrumbs } = this.$route.meta;
      breadcrumbs = breadcrumbs.map((breadcrumb) => ({
        text: breadcrumb.text,
        href: breadcrumb.route,
      }));
      return breadcrumbs;
    },
  },

};
</script>

<style>

</style>
