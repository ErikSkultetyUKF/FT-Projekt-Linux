<template>
  <v-container>
    <v-btn @click="$router.back()">Späť</v-btn>

    <div class="d-flex align-center my-8">
      <img
          :src="'/img/distributions/logo/'+ distro.logo"
          :alt="distro.logoDesc"
          class="img-distro-logo"
      >
      <h3 class="text-h3">{{ distro.name }}</h3>
    </div>

    <div>
      <img class="img-distro" :src="'/img/distributions/' + distro.img" :alt="distro.imgDesc">
      <p class="my-10">{{ distro.text }}</p>
    </div>

    <div class="mt-0">
      <h5 class="text-h5"><b>Webová stránka:</b></h5>
      <a :href="distro.weblink" target="_blank">{{ distro.weblink }}</a>

      <h5 class="text-h5 mt-10"><b>Použité zdroje:</b></h5>
      <a href="https://www.atatus.com/blog/top-10-linux-distros/" target="_blank">https://www.atatus.com/blog/top-10-linux-distros/</a>
    </div>

    <v-btn @click="$router.back()" class="mt-8">Späť</v-btn>
  </v-container>
</template>

<script>
import distroData from "@/data/distributions.json"
export default {
  data() {
    return {
      distro: distroData.distros.find(
          distro => distro.slug === this.slug
      )
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>