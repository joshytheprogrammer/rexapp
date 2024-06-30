<template>
  <section>
    <AppProductLVCard v-for="index in 4" :key="index" v-if="pending" />
    <AppError v-else-if="error" :error="error"  />
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <AppProductVCard v-for="p in data.products" :key="p.id" :p="p" />
    </div>
  </section>
</template>

<script setup>
const { data, pending, error } = await useLazyFetch('/products/random?limit=10&fields=id,name,min_price,slug,imageURL,rating,max_price', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});
</script>

<style lang="scss" scoped>

</style>