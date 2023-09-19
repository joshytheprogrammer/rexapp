<template>
  <div class="w-full px-4 sm:px-8 md:px-8 lg:px-18 py-4 mx-auto bg-gray-100">
    <AppError v-if="error" :error="error" />
    <AppLoading v-else-if="pending" />
    <ShopProduct v-else :product="product" />
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import { useNotificationStore } from '@/store/notification';

const route = useRoute();
const authStore = useAuthStore();
const notification = useNotificationStore();

const productSlug = computed(() => route.params.slug);
const searchId = computed(() => route.query.sID);

const queryParameters = searchId.value !== null && searchId.value !== undefined
  ? `?sID=${searchId.value}`
  : '';

const { data: product, pending, error } = await useLazyFetch(() => `/products/bySlug/${productSlug.value}${queryParameters}`, {
  baseURL: useRuntimeConfig().public.baseURL,
  transform: (product) => {
    return product.product
  },
});

if (error.value) {
  const errorMessage = error.value.data?.message || "Something went wrong.";
  authStore.logout();
  
  notification.setNotification({
    type: 'error',
    message: errorMessage,
  });
}
useSeoMeta({
  title: () => `Buy ${product.value?.name} - Rexapp`,
  ogTitle: () => `Buy ${product.value?.name} - Rexapp`,
  ogImage: () => `${product.value?.imageURL}`,
});

useServerSeoMeta({
  title: () => `Buy ${product.value.name} - Rexapp`,
  ogTitle: () => `Buy ${product.value.name} - Rexapp`,
  ogImage: () => `${product.value.imageURL}`,
});
</script>

<style lang="scss" scoped>

</style>