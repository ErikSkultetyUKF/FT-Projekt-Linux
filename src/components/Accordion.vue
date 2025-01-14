<template>
  <v-expansion-panels
    class="my-4"
    variant="popout"
  >
    <v-expansion-panel
      v-for="accordion in accordions"
      :key="accordion.id"
    >
      <v-expansion-panel-title class="text-h5">
        <b>{{ accordion.title }}</b>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        {{ accordion.text }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title class="text-h5">
        <b>Podiel na trhu</b>
      </v-expansion-panel-title>

      <v-expansion-panel-text class="text-center">
        <img
          src="/img/misc/os-market-share-chart.png"
          alt="os-market-share-chart"
          class="img-chart"
        >
      </v-expansion-panel-text>
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