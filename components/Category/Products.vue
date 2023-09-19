<template>
  <div class="">
    <AppLoading v-if="pending" />
    <AppError v-else-if="error" />
    <div class="flex justify-start">
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
