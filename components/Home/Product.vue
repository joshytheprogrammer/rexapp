<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <ShopHeader title="Featured Products" />
    <AppError v-if="error" :error="error"  />
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <AppProductLVCard v-for="index in 4" :key="index" v-if="pending" />
      <AppProductVCard v-else v-for="p in data.products" :key="p.id" class="mx-auto my-4" :p="p"/>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/products/random', {
  baseURL: useRuntimeConfig().public.baseURL,
  query: {fields:'id,name,min_price,max_price,slug,imageURL,rating', sort: 'createdAt', limit: 20},
});

</script>

<style lang="scss" scoped>

</style>