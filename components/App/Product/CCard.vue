<template>
  <li class="flex flex-col justify-center md:grid grid-cols-5 gap-4 justify-between items-center border-b py-4">
    <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product5.webp" alt="Product 1" class="w-full max-h-36 object-contain col-span-1">
    <div class="text-center md:text-left block col-span-2">
      <span class="text-black font-semibold text-base">Amazon Cloud Cam Security Camera</span>
      <p class="py-1 text-gray-500 text-sm font-medium ">
        <span>Made by: </span>
        <span class="text-black font-semibold">Toyota</span>
      </p>
      <NuxtLink to="#" class="py-1 hover:text-green-800 text-gray-500 text-sm font-semibold transition-all duration-300">
        Exhaust Accessories
      </NuxtLink>
      <a class="hidden py-1 md:block text-sm underline hover:text-green-800 cursor-pointer" @click.prevent="">Remove</a>
    </div>
    <span class="col-span-1 block py-2 text-gray-700 font-semibold text-sm text-center"> {{ formatPrice(20000) }} <br> - <br> {{ formatPrice(50000) }}</span>
    <select class="bg-gray-200 py-1 px-2 rounded-md border outline-none focus:border-green-800 cursor-pointer">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <a class="block py-1 md:hidden text-sm underline hover:text-green-800 cursor-pointer" @click.prevent="">Remove</a>
  </li>
</template>

<script setup>
const { formatPrice } = usePriceUtilities();
</script>

<style lang="scss" scoped>

</style>