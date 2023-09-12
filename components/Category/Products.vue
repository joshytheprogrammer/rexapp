<template>
  <div class="flex justify-start">
    <AppProductVCard v-for="p in data.products" :key="p._id" :p="p" />
  </div>
</template>

<script setup>
const props = defineProps(['id']);

const { data } = await useFetch(() => `/products/byCatId/${props.id}`, {
  baseURL: useRuntimeConfig().public.baseURL,
});
</script>

<style lang="scss" scoped>

</style>