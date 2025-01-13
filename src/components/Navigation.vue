<template>
  <v-app-bar>
    <v-tabs>

      <v-tab to="/" class="pa-6">Domov</v-tab>
      <v-tab
         v-for="page in pages"
         :key="page.id"
         :to="{
           name: page.name,
           params: {
             slug: page.slug
           }
         }"
         class="pa-6"
         >{{ page.name }}</v-tab>

    </v-tabs>

    <v-spacer></v-spacer>
    <v-label>MOTÍV</v-label>
    <v-switch class="d-flex justify-center mx-5" @click="switchTheme"></v-switch>

  </v-app-bar>
</template>

<script>
import pageData from "@/data/pages.json";

export default {
  data() {
    return {
      pages: pageData.pages
    }
  },
  methods: {
    switchTheme() {
      this.$emit("toggle-theme")
    },
  },
  props: {
    theme: String
  }
}
</script>