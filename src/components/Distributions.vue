<template>
  <RouterLink
      v-for="distro in distros"
      :key="distro.id"
      :to="{
        name: 'Distribúcia',
        params: {
          slug: distro.slug,
        }
      }">

    <div class="gallery">
      <v-card class="c-grayish">
        <img
            class="gallery-img-fixed-210"
            :src="'/img/distributions/logo/' + distro.logo"
            :alt="distro.logoDesc"
        >
        <div class="gallery-text text-center">{{ distro.name }}</div>
      </v-card>
    </div>
  </RouterLink>
</template>

<script>
import distroData from "@/data/distributions.json"
export default {
  data() {
    return {
      distros: distroData.distros,
    }
  }
}
</script>

<style scoped>
.c-grayish {
  color: #444;
}
</style>