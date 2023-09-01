<template>
  <div class="bg-transparent p-4 shadow-md rounded-lg mb-4 transition-all duration-300"> 
    <span class="text-black font-semibold text-base">Popular Categories</span>
    <div class="py-4">
      <NuxtLink v-for="item in categories" :key="item._id" :to="'/categories/'+item.slug" class="block p-2 my-2 border rounded-md hover:border-green-800 "> {{ item.name }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data, error } = await useFetch('/categories/all?fields=_id,name,slug&sort=name&limit=5', {
  baseURL: useRuntimeConfig().public.baseURL,
});

const categories = data.value?.categories;
</script>