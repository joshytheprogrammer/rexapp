<template>
  <form class="flex items-center border border-gray-300 rounded max-w-screen-md" @submit.prevent="performRedirect">
    <select class="border-r focus:border-green-800 outline-none cursor-pointer px-2 lg:px-4 py-3 sm:block md:hidden lg:block" v-model="category_id">
      <option value="all" selected>All Categories</option>
      <option value="loading" disabled v-if="pending">Loading...</option>
      <option v-for="c in categories" :key="c.id" :value="c.id" v-else>{{ c.name }}</option>
    </select>  
    <input class="lg:w-96 w-80 px-1 lg:px-2 py-3 outline-none border-none placeholder:text-slate-400 placeholder:font-light" type="text" placeholder="Search products..." v-model="query">
    <button class="cursor-pointer h-full transition-all duration-300 bg-black hover:bg-green-800 text-white px-2 lg:px-4 py-3 rounded-r ">
      <Icon name="tabler:search" size="1.55em" type="submit" />
    </button>
  </form>
</template>

<script setup>
  const route = useRoute();
  const {buildQuery} = useSearchUtilities();

  let query = ref(route.query.q);
  let category_id = ref(route.query.c || 'all');

  watch(() => route.query, () => {
    query.value = route.query.q;
  });
  
  const { data, pending } = await useFetch('/categories/all', {
    baseURL: useRuntimeConfig().public.baseURL,
    query: {
      fields:'id,name,slug', 
      sort: 'name',
    },
  });

  const categories = data.value?.categories;

  function performRedirect() {
    if(query.value.length < 3) {return;}
    buildQuery(query.value, category_id.value);
  }
</script>

<style lang="scss" scoped>

</style>