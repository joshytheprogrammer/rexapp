<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <ShopHeader title="Trending Categories" />
    <div v-for="p in data.categories" :key="p._id"  class="lg:grid md:grid-cols-3 lg:grid-cols-5 gap-2">
      <AppCategoryCard class="mx-auto my-4" :p="p" />
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/categories/all?fields=_id,name,slug,imageURL&sort=createdAt&limit=10', {
  baseURL: useRuntimeConfig().public.baseURL,
});

</script>

<style lang="scss" scoped>

</style>