<template>
  <!-- This is the product card for the Quick Cart feature -->
  <li class="grid grid-cols-3 gap-4 justify-between border-b py-4">
    <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product5.webp" alt="Product 1" class="w-full max-h-48 object-contain">
    <div class="col-span-2">
      <span class="text-black font-semibold text-base">Amazon Cloud Cam Security Camera</span>
      <span class="block py-2 text-gray-700 font-semibold text-base"> {{ formatPrice(20000) + " - " + formatPrice(50000) }}</span>
      <div class="flex justify-between items-center">
        <select class="bg-gray-200 py-1 px-4 rounded-md border outline-none focus:border-green-800 cursor-pointer">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <a class="text-sm underline cursor-pointer" @click.prevent="">Remove</a>
      </div>
    </div>
  </li>
</template>

<script setup>
const { formatPrice } = usePriceUtilities();
</script>

<style lang="scss" scoped>

</style>