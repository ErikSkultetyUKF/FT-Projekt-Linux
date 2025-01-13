<template>
  <v-container>
    <h3 class="text-h3 mt-5 mb-10">Populárne stránky na tému Linux</h3>

    <div
        v-for="webpage in webpages"
        :key="webpage.id"
        class="gallery"
    >
      <v-card>
        <a :href="webpage.link" target="_blank">
          <img
              class="img-gallery"
              :src="'/img/community/webpages/' + webpage.img"
              :alt="webpage.imgDesc"
          >
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