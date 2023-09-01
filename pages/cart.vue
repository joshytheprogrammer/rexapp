<template>
  <div class="bg-gray-100 px-4 sm:px-8 md:px-8 lg:px-18 py-4 block lg:grid grid-cols-3 gap-4 justify-between">
    <div class="col-span-2 w-full bg-white border rounded-md p-4">
      <div class="flex items-center justify-between pb-4">
        <h2 class="text-2xl font-semibold relative">
          Shopping Cart
          <span class="block rounded-md mt-2 inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 to-green-900"></span>
        </h2>

        <NuxtLink class="text-green-800 underline lg:hidden" to="#checkout">Checkout</NuxtLink>
      </div>
      <ul class="py-4 min-h-screen">
        <AppProductCCard />
      </ul>
    </div>
    <div id="checkout" class="col-span-1 w-full h-fit my-4 lg:my-0 p-4 shadow-lg rounded-md bg-white">
      <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
      
      <!-- Price Summary -->
      <div class="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>{{ calculateSubtotal }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Taxes:</span>
        <span>{{ calculateTaxes }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Estimated Total:</span>
        <span>{{ calculateTotal }}</span>
      </div>
      
      <p class="text-gray-500 text-sm font-medium py-4">After checkout, we'll email you a price quote. No payment is required until then. Allow up to 24 hours.</p>

      <!-- Checkout Button -->
      <button v-if="cartStore.isAuth" @click="checkout" class="w-full py-2 px-4 bg-green-800 text-white rounded hover:bg-green-900 focus:outline-none">
        Checkout
      </button>
      <NuxtLink to="/account/auth/" class="w-full block text-center py-2 px-4 bg-green-800 text-white rounded hover:bg-green-900 focus:outline-none" v-else>Login to Checkout</NuxtLink>
    </div>
    <!-- <p>
      Is the user authenticated {{ cartStore.isAuth }}
    </p>
    <p>
      There are {{ cartStore.getCartNo }} items in cart
    </p>
    <p>
      The items include {{ cartStore.getCartItems }}
    </p>
    <p> 
      Is item 1 in cart {{ cartStore.itemInCart(1) }}
    </p>
    <p> 
      Is item 2 in cart {{ cartStore.itemInCart(2) }}
    </p>
    <button @click="cartStore.addItem({partId: '64ee6fb06725f623424c7b20', quantity: 1})">Add item1</button>
    <button @click="cartStore.addItem({partId: '64ee6fb06525f623424c7b20', quantity: 1})">Add item2</button>
    <button @click="cartStore.removeItem('64ee6fb06725f623424c7b20')">Remove item</button>
    <button @click="cartStore.clearCart()">Clear cart</button> -->
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

onMounted(() => {
  if(cartStore.isAuth){cartStore.syncCart()}
});
</script>