<template>
  <div>
    {{ results }}
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