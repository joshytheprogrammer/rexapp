<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <ShopHeader title="Trending Categories" />
    <AppLoading v-if="pending" />
    <AppError v-else-if="error" :error="error"  />
    <div v-else v-for="p in data.categories" :key="p._id"  class="lg:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
      <AppCategoryCard class="mx-auto my-4" :p="p" />
    </div>
  </div>
</template>

<script setup>
const { data, pending, error} = await useLazyFetch('/categories/all?fields=_id,name,slug,imageURL&sort=createdAt&limit=10', {
  baseURL: useRuntimeConfig().public.baseURL,
});

</script>

<style lang="scss" scoped>

</style>