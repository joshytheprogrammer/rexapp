<template>
  <div class="w-full">
    <CategoryJumbotron v-if="category" :name="category.name" :desc="category.description" />
    <AppError v-if="error" :error="error"  />
    <AppLoading v-else-if="pending" />
    <div v-else class="px-4 sm:px-8 md:px-8 lg:px-18 py-4 ">
      <CategoryProducts :id="category.id" />
    </div>
  </div>
</template>

<script setup>
import { useNotificationStore } from '@/store/notification';

const route = useRoute();
const notification = useNotificationStore();

const productSlug = computed(() => route.params.slug);
const searchId = computed(() => route.query.sID);

const queryParameters = searchId.value !== null && searchId.value !== undefined
  ? `?sID=${searchId.value}`
  : '';

const { data: category, pending, error } = await useLazyFetch(() => `/categories/bySlug/${productSlug.value}${queryParameters}`, {
  baseURL: useRuntimeConfig().public.baseURL,
  transform: (category) => {
    return category.category
  },
});

if (error.value) {
  const errorMessage = error.value.data?.message || "Something went wrong.";
  
  notification.setNotification({
    type: 'error',
    message: errorMessage,
  });
}

useSeoMeta({
  title: () => `Shop for ${category.value?.name} - Rexapp`,
  ogTitle: () => `Shop for ${category.value?.name} - Rexapp`,
  ogImage: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1695123250/rexapp/logo_wmh7dg.png',
});

useServerSeoMeta({
  title: () => `Shop for ${category.value.name} - Rexapp`,
  ogTitle: () => `Shop for ${category.value.name} - Rexapp`,
  ogImage: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1695123250/rexapp/logo_wmh7dg.png',
});
</script>

<style lang="scss" scoped>

</style>