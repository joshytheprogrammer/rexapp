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
      <section>
        <ul class="py-4" v-if="cartStore.getCartNo > 0" >
          <AppProductCCard v-for="p in cartStore.getCartItems" :key="p.partId" :p="p" />
        </ul>
        <div v-else>
          <p>No items in cart</p>
        </div>
      </section>
    </div>
    <div class="col-span-1" id="checkout">
      <AppCSummary />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

onMounted(() => {
  if(cartStore.isAuth){cartStore.syncCart()}
});

useSeoMeta({
  title: 'Your cart on Rexapp :- Order the best automobile parts',
  ogTitle: 'Your cart on Rexapp :- Order the best automobile parts',
  ogImage: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1695123250/rexapp/logo_wmh7dg.png',
});
</script>