<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <Navigation></Navigation>
    <v-main>
      <div class="idk">
        <RouterView :key="$route.fullPath"/>
      </div>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Navigation, Footer},
}
</script>


