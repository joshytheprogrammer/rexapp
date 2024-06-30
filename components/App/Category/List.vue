<template>
  <span class="block py-2 hover:text-green-800 text-gray-500 text-sm font-semibold transition-all duration-300">
    <NuxtLink :to="'/categories/'+data.category.slug">
      {{ data.category.name }}
    </NuxtLink>
  </span>
</template>

<script setup>
const props = defineProps(['id']);

const { data } = await useFetch(() => `/categories/byId/${props.id}`, {
  baseURL: useRuntimeConfig().public.baseURL,
});
</script>

<style lang="scss" scoped>

</style>