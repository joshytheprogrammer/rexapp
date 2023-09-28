<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <ShopHeader title="Featured Products" />
    <AppError v-if="error" :error="error"  />
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <AppProductLVCard v-for="index in 4" :key="index" v-if="pending" />
      <AppProductVCard v-else v-for="p in data.products" :key="p._id" class="mx-auto my-4" :p="p"/>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useLazyFetch('/products/random?limit=20&fields=_id,name,price,slug,imageURL,rating?sort=createdAt', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});

</script>

<style lang="scss" scoped>

</style>