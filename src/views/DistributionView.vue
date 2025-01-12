<template>

  <v-btn @click="$router.back()">Späť</v-btn>

  <div class="flex-center">
    <img id="logo" :src="'/img/distributions/logo/'+ distro.logo" :alt="distro.logoDesc">
    <h1>{{ distro.name }}</h1>
  </div>

  <img class="distro-img" :src="'/img/distributions/' + distro.img" :alt="distro.imgDesc">
  <p>{{ distro.text }}</p>

  <h3>Webová stránka:</h3>
  <div class="zdroje" style="margin-top: 0;">
    <a :href="distro.weblink" target="_blank">{{ distro.weblink }}</a>
  </div>

  <div class="zdroje">
    <h3>Použité zdroje:</h3>
    <a href="https://www.atatus.com/blog/top-10-linux-distros/" target="_blank">https://www.atatus.com/blog/top-10-linux-distros/</a>
  </div>
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