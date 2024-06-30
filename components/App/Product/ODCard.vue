<template>
  <li class="grid grid-cols-3 gap-4 justify-between items-center border-b py-8">
    <img loading="lazy" :src="data.product.imageURL" :alt="data.product.name+' Rexapp Product'" class="col-span-1 w-full max-h-48 object-contain">
    <div class="col-span-2 space-y-1">
      <span class="text-black capitalize font-semibold text-base">{{data.product.name}}</span>
      <p class="py-1 text-gray-500 text-sm font-medium ">
        <span>Made by: </span>
        <span class="text-black font-semibold">{{data.product.manufacturer}}</span>
      </p>
      <p>
        <AppCategoryList :id="data.product.category_id" />
      </p>
      <span class="block py-2 text-gray-700 font-semibold text-base"> {{ formatPrice(data.product.min_price) }} - {{ formatPrice(data.product.max_price) }}</span>
      <div class="flex">
        <span class="bg-gray-200 p-2 rounded-full border ">{{ p.quantity }}</span>
      </div>
    </div>
  </li>
</template>

<script setup>
const { formatPrice } = usePriceUtilities();
const props = defineProps(['p']);

const { data } = await useFetch(() => `/products/byId/${props.p.partId}`, {
  baseURL: useRuntimeConfig().public.baseURL,
});
</script>