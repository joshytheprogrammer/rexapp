<template>
  <div class="bg-transparent w-full p-4 shadow-md rounded-lg mb-4 transition-all duration-300">
    <span class="text-black font-semibold text-base ">Popular Categories</span>
    <span class="block py-2"></span>
    <NuxtLink class="block my-1" v-for="item in data.categories" :key="item.id" :to="'/categories/'+item.slug">
      <div class="flex justify-start gap-4 cursor-pointer items-center p-2 border hover:border-green-800 rounded-md">
        <img :src="item.imageURL" class="w-14 object-cover md:h-auto">
        <span> {{ item.name }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { data } = await useFetch('/categories/all', {
  baseURL: useRuntimeConfig().public.baseURL,
  query: {
    fields:'id,name,slug,imageURL', 
    sort: 'name', 
    limit: 5
  },
});

</script>