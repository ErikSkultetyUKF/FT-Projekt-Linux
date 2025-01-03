<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
</script>

<template>
  <v-app>
    <v-main>
      <HomeView></HomeView>
      <AboutView></AboutView>
    </v-main>
  </v-app>

  <RouterView />
</template>

<style>
#app { /* affects (app) id in index.html*/
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
