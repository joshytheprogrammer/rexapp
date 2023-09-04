<template>
  <div class="flex flex-col-reverse lg:grid grid-cols-4 gap-4 px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <section class="col-span-1">
      <SearchPCategories />
    </section>
    <section class="col-span-3">  
      <!-- {{ results }} -->
      <div class="categories">
        <AppCatCard />
      </div>
      <div v-for="p in results.products" :key="p._id" class="products">

        <AppProductHCard />
        <AppProductLHCard />
      </div>
    </section>
    
    <!-- <h1>{{ pending }}</h1>
    <h2>Search Results for  {{ query }} with an ID of {{ searchID }} - products</h2>
    <p v-for="item in products" :key="item._id">
      {{ item }}
    </p>
    <h2>Search Results for  {{ query }} with an ID of {{ searchID }} - categories</h2>
    <p v-for="item in categories" :key="item._id">
      {{ item }}
    </p> -->
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