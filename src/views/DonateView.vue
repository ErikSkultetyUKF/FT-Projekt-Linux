<template>
  <v-container>
    <h1>Kúpte nám čaj</h1>

    <h2 class="my-5">Suma: {{ cartStore.totalPrice }} €</h2>

    <v-btn @click="cartStore.increment()" class="bg-grey-lighten-3 ma-1">Zvýšiť</v-btn>
    <v-btn @click="cartStore.decrement()" class="bg-grey-lighten-3 ma-1">Znížiť</v-btn>
    <v-btn @click="cartStore.toggleDisable()" class="bg-grey-lighten-3 ma-1">Vlastné</v-btn>

    <v-row class="my-5">
      <v-col cols="12" md="6">
        <v-text-field
            v-model="cartStore.amount"
            label="Zadajte sumu v eurách"
            type="number"
            :disabled="cartStore.getDisabled"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn to="/" class="ma-1 bg-green">Prispieť</v-btn>
    <v-btn @click="$router.back()" class="ma-1 bg-red-accent-2">Radšej nie</v-btn>

  </v-container>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";

export default {
  data() {
    return {
      cartStore: useCartStore(),
    };
  }
};
</script>