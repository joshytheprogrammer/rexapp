<template>
  <div class="flex flex-col-reverse items-center justify-center lg:grid lg:items-start lg:justify-start grid-cols-4 gap-4 px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <section class="col-span-1 w-full">
      <SearchPCategories />
    </section>
    <section class="col-span-3">
      <AppLoading v-if="pending" />
      <section v-else-if="results.categories.length === 0 & results.products.length === 0 || results.length === 0">
        <p class="text-center lg:text-left text-gray-800 mt-4">
          We couldn't find anything. Please try using the <NuxtLink class="text-green-800 underline" to="/#rexapp_s_c">search constructor</NuxtLink> 
        </p>
      </section>
      <section v-else>
        <div class="mb-2 block md:flex gap-4 justify-start items-baseline flex-wrap">
          <AppCategoryCard v-for="p in results.categories" :key="p._id" class="mx-auto md:mx-0" :p="p" :sID="results.searchId"/>
        </div>
        <div v-for="p in results.products" :key="p._id" class="mb-2">
          <AppProductHCard class="mx-auto md:mx-0" :p="p" :sID="results.searchId" />
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { useNotificationStore } from '@/store/notification';

const route = useRoute();
const notification = useNotificationStore();

const query = computed(() => route.query.q);
const category_id = computed(() => route.query.c || 'all');

const { data: results, pending, error } = await useLazyFetch(() => `/search/exec?q=${query.value}&c=${category_id.value}`, {
  baseURL: useRuntimeConfig().public.baseURL,
  watch: [query, category_id],
  immediate: true,
});

if(error.value) {
  notification.setNotification({
    'type': 'error',
    'message': error.value.message
  });
}

useSeoMeta({
  title: () => `Showing results for ${query.value}`,
  ogTitle: () => `Showing results for ${query.value}`,
  ogImage: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1695123250/rexapp/logo_wmh7dg.png',
});
</script>