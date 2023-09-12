<template>
  <div class="w-full">
    <CategoryJumbotron :name="category.name" :desc="category.description" />
    <div class="px-4 sm:px-8 md:px-8 lg:px-18 py-4 ">
      <CategoryProducts :id="category._id" />
    </div>
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

const { data: category, error } = await useFetch(() => `/categories/bySlug/${productSlug.value}${queryParameters}`, {
  baseURL: useRuntimeConfig().public.baseURL,
  transform: (category) => {
    return category.category
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