<template>
  <v-container class="text-center">
    <h1 class="text-h2">Kúpte nám čaj</h1>
    <p class="my-5">Suma: {{ formStore.totalPrice }} €</p>

    <v-btn
        @click="formStore.increment()"
        class="ma-1"
    >Zvýšiť</v-btn>

    <v-btn
        @click="formStore.decrement()"
        class="ma-1"
        :disabled="formStore.totalPrice <= 1"
    >Znížiť</v-btn>
    <br>

    <v-btn
        @click="formStore.makeDouble()"
        class="ma-1"
    >Zdvojnásobiť</v-btn>

    <v-btn
        @click="formStore.makeHalf()"
        class="ma-1"
        :disabled="formStore.totalPrice <= 1"
    >Polovica</v-btn>
    <br>

    <v-btn @click="formStore.toggleDisable()"
           class="ma-1"
    >Vlastné</v-btn>

    <v-row class="my-5 justify-center">
      <v-col cols="12" md="4">

        <v-text-field
            v-model="formStore.amount"
            label="Zadajte sumu v eurách"
            type="number"
            min="1"
            :disabled="formStore.getFieldDisabled"
        ></v-text-field>

      </v-col>
    </v-row>

    <v-btn
        @click="showConfirmDialog()"
        :disabled="formStore.totalPrice <= 0"
        class="ma-1 bg-green"
        size="large"
    >Prispieť</v-btn>

    <v-btn
        @click="$router.back()"
        class="ma-1 bg-red-accent-2"
        size="large"
    >Radšej nie</v-btn>

  </v-container>
</template>

<script>
import { useFormStore } from "@/stores/FormStore.js";

export default {
  data() {
    return {
      formStore: useFormStore(),
    };
  },
  methods: {
    showConfirmDialog() {
      const userChoice = window.confirm('Toto rozhodnutie nie je možné odvrátiť.\nSte si istí, že chcete pokračovať?');

      if (userChoice) {this.$router.push('/dakujeme')}
      else {alert('Zrušili ste príspevok!')}
    },
  }
};
</script>