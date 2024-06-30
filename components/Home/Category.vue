<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <ShopHeader title="Trending Categories" />
    <AppLoading v-if="pending" />
    <AppError v-else-if="error" :error="error"  />
    <div v-else class="lg:grid grid-cols-6 flex flex-wrap justify-center md:justify-start gap-4 items-baseline ">
      <AppCategoryCard class="block py-2" v-for="p in data.categories" :key="p.id" :p="p" />
    </div>
  </div>
</template>

<script setup>
const { data, pending, error} = await useLazyFetch('/categories/all?fields=id,name,slug,imageURL&sort=createdAt&limit=12', {
  baseURL: useRuntimeConfig().public.baseURL,
});

</script>

<style lang="scss" scoped>

</style>