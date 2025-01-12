<template>
  <RouterLink v-for="distro in distros" :key="distro.id" :to="{
        name: 'distribution',
        params: {
          slug: distro.slug,
        }
      }">
    <div class="gallery">
      <v-card>
        <img class="gallery-img-fixed-210" :src="'/img/distributions/logo/' + distro.logo" :alt="distro.logoDesc">
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