<template>
  <div class="">
    <AppLoading v-if="pending" />
    <AppError v-else-if="error" />
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <AppProductVCard v-for="p in data.products" :key="p._id" :p="p" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['id']);

const { data, pending, error } = await useLazyFetch(() => `/products/byCatId/${props.id}`, {
  baseURL: useRuntimeConfig().public.baseURL,
});
</script>
