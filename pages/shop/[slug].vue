<template>
  <div>
    <AppError v-if="error" :error="error" />
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

const { data: product, error } = await useFetch(() => `/products/bySlug/${productSlug.value}`, {
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
</script>

<style lang="scss" scoped>

</style>