<template>
  <div class="flex items-center gap-4 my-4py-4 rounded-md text-center md:text-left">
    <div class="w-fit bg-transparent border border-green-800 rounded-full p-2">
      <div class="bg-green-800 rounded-full p-1"></div>
    </div>
    <h2 class=" text-black text-2xl font-medium">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps(['title']);
</script>