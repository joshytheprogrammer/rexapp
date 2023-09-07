<template>
  <span class="hover:text-green-800">
    <NuxtLink :to="'categories/'+data.category.slug">
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