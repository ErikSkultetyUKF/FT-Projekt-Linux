<template>
  <v-container>
    <div>
      <h1>Distribúcie</h1>

      <p>Linux má množstvo rôznych verzií, ktoré vyhovujú akémukoľvek typu používateľa. Od nových používateľov až po náročných používateľov nájdete „príchuť“ Linuxu, ktorá bude zodpovedať vašim potrebám. Tieto verzie sa nazývajú distribúcie. Takmer každá distribúcia Linuxu sa dá stiahnuť zadarmo, napáliť na disk (alebo USB kľúč) a nainštalovať.</p>

      <p>Každá distribúcia má iný pohľad na pracovnú plochu. Niektoré sa rozhodnú pre veľmi moderné používateľské rozhrania, zatiaľ čo iné zostanú pri tradičnejšom prostredí pracovnej plochy.</p>
    </div>

    <h1>Populárne distribúcie Linuxu</h1>

    <Distributions></Distributions>

    <div class="zdroje">
      <h3>Použité zdroje:</h3>
      <a href="https://www.linux.com/what-is-linux/" target="_blank">https://www.linux.com/what-is-linux/</a>
    </div>
  </v-container>
</template>

<script>
import Distributions from "@/components/Distributions.vue"
export default {
  components: {
    Distributions
  }
}
</script>