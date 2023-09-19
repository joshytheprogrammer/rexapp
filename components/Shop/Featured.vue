<template>
  <div class="">
    <ShopHeader title="Recently Uploaded Products" />
    <AppError v-if="error" :error="error"  />
    <div v-else class="flex flex-wrap gap-4 justify-start">  
      <AppProductLVCard v-for="index in 5" :key="index" v-if="pending" />
      <AppProductVCard v-else v-for="p in data.products" :key="p._id" :p="p"  />
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useLazyFetch('/products/recent?limit=6', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});
</script>

<style lang="scss" scoped>

</style>