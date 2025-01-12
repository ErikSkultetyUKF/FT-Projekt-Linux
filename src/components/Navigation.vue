<template>
  <v-app-bar>
    <v-tab to="/" class="pa-6">Domov</v-tab>
    <v-tab v-for="page in pages" :key="page.id" :to="{
         name: page.name,
         params: {
           slug: page.slug
         }
        }"
        class="pa-6"
       >{{ page.name }}</v-tab>
  </v-app-bar>
</template>

<script>
import pageData from "@/data/pages.json";

export default {
  data() {
    return {
      pages: pageData.pages
    }
  }
}
</script>