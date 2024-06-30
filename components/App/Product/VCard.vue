<template>
  <div class="bg-transparent border rounded-md w-72 mx-auto md:mx-2 my-4">
    <img @click="$router.push('/shop/'+p.slug)" loading="lazy" :src="p.imageURL" class="w-full max-h-48 object-contain">
    <div class="p-4 text-gray-700 text-left">
      <p class="flex items-center justify-start">
        <template v-for="(index) in 5">
          <span class="text-green-800 pr-2" v-if="index <= p.rating">
            <Icon name="clarity:star-solid" />
          </span>
          <span class="text-gray-800 pr-2" v-if="index > p.rating">
            <Icon name="clarity:star-line" />
          </span>
        </template>
        <span class="font-semibold text-gray-800 text-sm">
          (10+) Reviews
        </span>
      </p>
      <p class="py-4 space-y-2">
        <NuxtLink :to="'/shop/'+p.slug" class="text-black font-semibold capitalize text-base md:text-lg hover:text-green-800"> {{ p.name }} </NuxtLink>
        <span class="block text-gray-700 font-semibold text-base"> {{ formatPrice(p.min_price) + " - " + formatPrice(p.max_price) }}</span>
      </p>
      <div class="flex justify-between">
        <button v-if="cartStore.itemInCart(p.id)" @click="cartStore.toggleQuickCart()" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
          VIEW CART
        </button>
        <button v-else @click="cartStore.addItem({partId: p.id, quantity: 1})" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();
const { formatPrice } = usePriceUtilities();

const props = defineProps(['p']);
</script>

<style lang="scss" scoped>

</style>