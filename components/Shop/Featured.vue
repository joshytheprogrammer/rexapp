<template>
  <div class="">
    <ShopHeader title="Recently Uploaded Products" />
    <AppError v-if="error" :error="error"  />
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">  
      <AppProductLVCard v-for="index in 5" :key="index" v-if="pending" />
      <AppProductVCard v-else v-for="p in data.products" :key="p.id" :p="p"  />
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/products/recent', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
  query: {
    limit: 30
  }
});
</script>

<style lang="scss" scoped>

</style>