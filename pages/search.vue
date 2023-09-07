<template>
  <div class="flex flex-col-reverse lg:grid grid-cols-4 gap-4 px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <section class="col-span-1">
      <SearchPCategories />
    </section>
    <section class="col-span-3"> 
      <div v-for="p in results.categories" :key="p._id"  class="categories">
        <AppCatCard />
      </div>
      <div v-for="p in results.products" :key="p._id" class="products">
        <AppProductLHCard v-if="pending" />
        <AppProductHCard :p="p" v-else />
      </div>
    </section>
  </div>
</template>

<script setup>
  const route = useRoute();

  const query = computed(() => route.query.q);
  const category_id = computed(() => route.query.c || 'all');
  
  const { data: results, pending, error, refresh } = await useFetch(() => `/search/exec?q=${query.value}&c=${category_id.value}`, {
    baseURL: useRuntimeConfig().public.baseURL,
    watch: [query, category_id],
    immediate: true,
  });
</script>

<style lang="scss" scoped>

</style>