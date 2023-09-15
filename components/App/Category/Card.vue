<template>
  <div class="border px-6 py-8 w-fit rounded-md text-center hover:bg-gray-100 hover:text-green-800 cursor-pointer">
    <img :src="p.imageURL" alt="product1" class="w-full max-h-48 object-cover md:h-auto">
    <NuxtLink :to="'/categories/' + p.slug + (sID !== null && sID !== undefined ? '?sID=' + sID : '')" class="block pt-4 font-semibold text-base text-inherit">{{ p.name }}</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(['p', 'sID']);
</script>