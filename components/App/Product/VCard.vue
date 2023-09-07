<template>
  <div class="bg-transparent border rounded-md w-72 mx-auto md:mx-2 my-4">
    <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product5.webp" class="w-full max-h-48 object-contain">
    <div class="p-4 text-gray-700 text-left">
      <p class="flex items-center justify-start">
        <template v-for="(index) in 5">
          <span class="text-green-800 pr-2" v-if="index <= rating">
            <Icon name="clarity:star-solid" />
          </span>
          <span class="text-gray-800 pr-2" v-if="index > rating">
            <Icon name="clarity:star-line" />
          </span>
        </template>
        <span class="font-semibold text-gray-800 text-sm">
          (126) Review
        </span>
      </p>
      <p class="py-4 space-y-2">
        <NuxtLink to="/shop/" class="text-black font-semibold text-base md:text-lg hover:text-green-800">Amazon Cloud Cam Security Camera</NuxtLink>
        <span class="block text-gray-700 font-semibold text-base"> {{ formatPrice(20000) + " - " + formatPrice(50000) }}</span>
      </p>
      <div class="flex justify-between">
        <button class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { formatPrice } = usePriceUtilities();
const rating = 4;

defineProps(['p']);
</script>

<style lang="scss" scoped>

</style>