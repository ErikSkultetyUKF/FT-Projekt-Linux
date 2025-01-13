import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
    state: () => ({
        amount: 3,
        isFieldDisabled: true
    }),
    actions: {
        increment() {
          this.amount++
        },
        decrement() {
          if (this.amount > 1) {this.amount--}
        },
        makeDouble() {
            this.amount *= 2
        },
        makeHalf() {
            this.amount = Math.round(this.amount / 2)
        },
        toggleDisable() {
          this.isFieldDisabled = !this.isFieldDisabled
        },
    },
    getters: {
        totalPrice() {
            return this.amount
        },
        getFieldDisabled() {
            return this.isFieldDisabled
        }
    },
});