<template>
  <div class="">
    <AppLoading v-if="pending" />
    <AppError v-else-if="error" />
    <div v-else class="flex justify-center items-baseline flex-col my-4 space-y-6 md:grid md:grid-cols-3 lg:grid-cols-5 ">
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
