<!-- Tu sa využije Pinia -->

<template>
  <v-container>
    <h1>Kúpte nám čaj</h1>

    <v-row class="my-5">
      <v-col cols="12" md="6">
        <v-text-field
          label="Zadajte sumu v eurách"
          type="text"
          hint="Príklad: 4.50"
          persistent-hint
        ></v-text-field>
      </v-col>
    </v-row>


    <v-btn class="ma-1 bg-green">Prispieť</v-btn>
    <v-btn class="ma-1 bg-red-accent-2">Radšej nie</v-btn>

  </v-container>
</template>