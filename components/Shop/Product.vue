<template>
  <div class="block border rounded-md shadow-md lg:grid grid-cols-2 gap-4 items-center py-8 bg-white">
    <img :src="product.imageURL" :alt="'Rexapp Product - '+ product.name" class="col-span-1 max-h-96 w-full object-contain md:h-auto">
    <div class="col-span-1 py-4 px-8 space-y-4">
      <span class="text-black font-semibold text-xl md:text-2xl ">{{ product.name }}</span>
      <p class="text-grey-700 font-medium text-lg"> {{ formatPrice(product.price.min) + " - " + formatPrice(product.price.max) }}</p>
      <p class="flex items-center justify-start">
        <template v-for="(index) in 5">
          <span class="text-green-800 pr-2" v-if="index <= product.rating">
            <Icon name="clarity:star-solid" />
          </span>
          <span class="text-gray-800 pr-2" v-if="index > product.rating">
            <Icon name="clarity:star-line" />
          </span>
        </template>
        <span class="font-normal text-gray-600 text-sm">
          (10+) Reviews
        </span>
      </p>
      <p class="flex flex-col justify-start pt-2">
        <span class="font-medium text-gray-600 text-sm">
          {{ product.manufacturer }}
        </span>
        <p class="font-normal text-black text-sm space-x-2" >
          [<AppCategoryList v-for="c in product.categories" :id="c" />]
        </p>
      </p>
      <p class="block"> {{ product.description }} </p>
      <p class="font-normal text-black text-sm ">
        {{ product.partNumber }}, {{ product.specification }}
      </p>
      <div class="flex justify-between">
        <NuxtLink to="/cart" v-if="cartStore.itemInCart(product._id)" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
          VIEW CART
        </NuxtLink>
        <button v-else @click="cartStore.addItem({partId: product._id, quantity: 1})" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

const props = defineProps(['product']);
const { formatPrice } = usePriceUtilities();
</script>

<style lang="scss" scoped>

</style>