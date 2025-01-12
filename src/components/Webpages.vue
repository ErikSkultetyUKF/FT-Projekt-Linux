<template>
  <v-container>
    <h1>Populárne stránky na tému Linux</h1>

    <div v-for="webpage in webpages" :key="webpage.id" class="gallery">
      <v-card>
        <a :href="webpage.link" target="_blank">
          <img class="gallery-img" :src="'/img/community/webpages/' + webpage.img" :alt="webpage.imgDesc">
          <div class="gallery-text text-center">{{ webpage.name }}</div>
        </a>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import webpageData from "@/data/webpages.json"
export default {
  data() {
    return {
      webpages: webpageData.webpages
    }
  }
}
</script>