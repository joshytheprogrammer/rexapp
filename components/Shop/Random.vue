<template>
  <section>
    <AppProductLVCard v-if="pending" />
    <AppError v-else-if="error" :error="error"  />
    <div v-else class="flex flex-wrap gap-4 justify-start">
      <AppProductVCard v-for="p in data.products" :key="p._id" :p="p" />
    </div>
  </section>
</template>

<script setup>
const { data, pending, error } = await useLazyFetch('/products/random?limit=4&fields=_id,name,price,slug,imageURL,rating', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});
</script>

<style lang="scss" scoped>

</style>