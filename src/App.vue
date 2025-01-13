<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-theme-provider :theme="theme"class="pa-10">
    <v-app>

      <Navigation :theme="theme" @toggle-theme="switchTheme" ></Navigation>
      <v-main>
        <RouterView :key="$route.fullPath"/>
      </v-main>
      <Footer></Footer>
      
    </v-app>
  </v-theme-provider>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navigation, Footer },
  data() {
    return {
      theme: 'light'
    }
  },
  methods: {
    switchTheme() {
      if (this.theme === 'dark') {
        this.theme = 'light'
      } else {
        this.theme = 'dark'
      }
    }
  },
}
</script>


