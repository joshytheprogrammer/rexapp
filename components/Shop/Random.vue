<template>
  <div class="flex justify-start">
    <AppProductLVCard v-if="pending" />
    <AppError v-else-if="error" :error="error"  />
    <AppProductVCard v-for="p in data.products" :key="p._id" :p="p" v-else />
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/products/random?limit=4&fields=_id,name,price,slug,imageURL,rating', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});
</script>

<style lang="scss" scoped>

</style>