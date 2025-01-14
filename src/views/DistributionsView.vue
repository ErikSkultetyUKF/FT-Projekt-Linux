<template>
  <v-container>
    <h3 class="text-h3">
      Distribúcie
    </h3>

    <div class="my-10">
      <p>
        Linux má množstvo rôznych verzií, ktoré vyhovujú akémukoľvek typu používateľa. Od nových používateľov až po náročných používateľov nájdete „príchuť“ Linuxu, ktorá bude zodpovedať vašim potrebám. Tieto verzie sa nazývajú distribúcie. Takmer každá distribúcia Linuxu sa dá stiahnuť zadarmo, napáliť na disk (alebo USB kľúč) a nainštalovať.
      </p>
      <br>

      <p>
        Každá distribúcia má iný pohľad na pracovnú plochu. Niektoré sa rozhodnú pre veľmi moderné používateľské rozhrania, zatiaľ čo iné zostanú pri tradičnejšom prostredí pracovnej plochy.
      </p>
    </div>

    <h3 class="text-h3 mb-10">Populárne distribúcie Linuxu</h3>

    <Distributions></Distributions>

    <div class="mt-16">
      <h5 class="text-h5">
        <b>Použité zdroje:</b>
      </h5>

      <a
        href="https://www.linux.com/what-is-linux/"
        target="_blank"
      >
        https://www.linux.com/what-is-linux/
      </a>
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