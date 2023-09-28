<template>
  <section>
    <AppProductLVCard v-for="index in 4" :key="index" v-if="pending" />
    <AppError v-else-if="error" :error="error"  />
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <AppProductVCard v-for="p in data.products" :key="p._id" :p="p" />
    </div>
  </section>
</template>

<script setup>
const { data, pending, error } = await useLazyFetch('/products/random?limit=10&fields=_id,name,price,slug,imageURL,rating', {
  baseURL: useRuntimeConfig().public.baseURL,
  immediate: true,
});
</script>

<style lang="scss" scoped>

</style>