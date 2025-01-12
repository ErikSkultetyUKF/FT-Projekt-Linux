import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        amount: 3,
        isDisabled: true
    }),
    actions: {
        increment() {
          this.amount++;
        },
        decrement() {
          if (this.amount >0) {this.amount--;}
        },
        toggleDisable() {
          this.isDisabled = !this.isDisabled;
        },
    },
    getters: {
        totalPrice() {
            return this.amount;
        },
        getDisabled() {
            return this.isDisabled;
        }
    },
});