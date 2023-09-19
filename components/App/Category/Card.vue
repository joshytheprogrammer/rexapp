<template>
  <NuxtLink :to="'/categories/' + p.slug + (sID !== null && sID !== undefined ? '?sID=' + sID : '')" >
    <div class="border px-6 py-8 w-fit rounded-md text-center hover:bg-gray-100 hover:text-green-800 cursor-pointer">
      <img :src="p.imageURL" :alt="p.name" class="w-full max-h-36 object-cover">
      <span  class="block pt-4 font-semibold text-base text-inherit">{{ p.name }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['p', 'sID']);
</script>