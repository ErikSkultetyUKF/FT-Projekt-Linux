<template>
  <v-expansion-panels
      class="my-4"
      variant="popout"
  >
    <v-expansion-panel v-for="accordion in accordions" :key="accordion.id">
      <v-expansion-panel-title><h2><b>{{ accordion.title }}</b></h2></v-expansion-panel-title>
      <v-expansion-panel-text>{{ accordion.text }}</v-expansion-panel-text>
    </v-expansion-panel>

  </v-expansion-panels>
</template>

<script>
import accordionData from "@/data/accordions.json"
export default {
  data() {
    return {
      accordions: accordionData.accordions
    }
  }
}
</script>