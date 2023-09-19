<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <ShopHeader title="Recent Products" />
    <div class="lg:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      <AppProductLVCard v-if="pending" />
      <AppProductVCard v-for="p in data.products" :key="p._id"  class="mx-auto my-4" :p="p" v-else />
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/products/random?limit=20&fields=_id,name,price,slug,imageURL,rating', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});

</script>

<style lang="scss" scoped>

</style>