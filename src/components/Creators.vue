<template>
  <v-container>
    <h1>Populárni tvorcovia na tému Linux</h1>

    <div v-for="creator in creators" :key="creator.id" class="gallery">
      <v-card>
        <a :href="creator.link" target="_blank">
          <img class="gallery-img" :src="'/img/community/content-creators/' + creator.img" :alt="creator.imgDesc">
          <div class="gallery-text text-center">{{ creator.name }}</div>
        </a>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import creatorData from '@/data/creators.json'
export default {
  data() {
    return {
      creators: creatorData.creators
    }
  }
}
</script>