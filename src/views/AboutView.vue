<template>
  <v-container>
    <h3 class="text-h3">Čo je to Linux?</h3>

    <div class="my-10">
      <p>Rovnako ako Windows, iOS a Mac OS, aj Linux je operačný systém. V skutočnosti jedna z najpopulárnejších platforiem na svete, Android, je poháňaná operačným systémom Linux. Linux existuje od polovice 90-tych rokov a odvtedy dosiahol používateľskú základňu, ktorá pokrýva celý svet.</p>
      <br>
      <p>Od smartfónov po autá, superpočítače a domáce spotrebiče, domáce desktopy až po podnikové servery, operačný systém Linux je všade. Ale okrem toho, že Linux je platformou desktopov, serverov a vstavaných systémov na celom svete, je jedným z najspoľahlivejších, najbezpečnejších a bezstarostných operačných systémov.</p>
    </div>

    <Accordion></Accordion>

    <div class="zdroje mt-16">
      <h5 class="text-h5"><b>Použité zdroje:</b></h5>
      <a href="https://www.linux.com/what-is-linux/" target="_blank">https://www.linux.com/what-is-linux/</a><br>
      <a href="https://gs.statcounter.com/os-market-share/" target="_blank">https://gs.statcounter.com/os-market-share/</a>
    </div>
  </v-container>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
export default {
  components: {
    Accordion
  }
}
</script>