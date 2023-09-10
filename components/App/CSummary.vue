<template>
  <div class="w-full h-fit my-4 lg:my-0 p-4 shadow-lg rounded-md bg-white">
    <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
    
    <!-- Price Summary -->
    <div class="flex justify-between mb-2">
      <span>Subtotal:</span>
      <span>{{ formatPrice(cartStore.getSummary.subtotal.min) + " - " + formatPrice(cartStore.getSummary.subtotal.max) }}</span>
    </div>
    <div class="flex justify-between mb-2">
      <span>Taxes:</span>
      <span>{{ formatPrice(cartStore.getSummary.taxes.min) + " - " + formatPrice(cartStore.getSummary.taxes.max) }}</span>
    </div>
    <div class="flex justify-between mb-2">
      <span>Estimated Total:</span>
      <span>{{ formatPrice(cartStore.getSummary.total.min) + " - " + formatPrice(cartStore.getSummary.total.max)  }}</span>
    </div>
    
    <p class="text-gray-500 text-sm font-medium py-4">After checkout, we'll email you a price quote. No payment is required until then. Allow up to 24 hours.</p>

    <!-- Checkout Button -->
    <button :disabled="cartStore.getCartNo === 0" v-if="cartStore.isAuth" @click="cartStore.checkout()" class="w-full py-2 px-4 bg-green-800 text-white rounded hover:bg-green-900 focus:outline-none disabled:opacity-5 disabled:cursor-not-allowed">
      Checkout
    </button>
    <NuxtLink to="/account/auth/" class="w-full block text-center py-2 px-4 bg-green-800 text-white rounded hover:bg-green-900 focus:outline-none" v-else>Login to Checkout</NuxtLink>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const { formatPrice } = usePriceUtilities();
cartStore.calcSummary()
</script>

<style lang="scss" scoped>

</style>