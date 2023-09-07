<template>
  <div class="flex justify-start">
    <AppProductLVCard v-if="pending" />
    <AppProductVCard v-for="p in data.products" :key="p._id" :p="p" v-else />
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch('/products/random?limit=4&fields=_id,name,price,slug,imageURL,rating', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});

console.log(data.value)
</script>

<style lang="scss" scoped>

</style>