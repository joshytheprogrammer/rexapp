<template>
  <div class="border-b">
    <h2 class="text-center text-xl font-bold py-4">Search for anything</h2>
    <form class="flex items-center rounded my-4" @submit.prevent="">
      <input class="w-full px-1 lg:px-2 py-3 outline-none border border-gray-300 placeholder:text-slate-400 placeholder:font-light" type="text" placeholder="Search products and categories..." v-model="query">
      <button @click="performRedirect" class="h-full transition-all duration-300 bg-black hover:bg-green-800 text-white px-2 lg:px-4 py-3  rounded-r " type="submit">
        <Icon name="tabler:search" size="1.55em" />
      </button>
  </form>
  </div>
</template>

<script setup>
  const route = useRoute();
  const {buildQuery} = useSearchUtilities();

  let query = ref(route.query.q);

  watch(() => route.query, () => {
    query.value = route.query.q;
  });

  function performRedirect() {
    buildQuery(query.value)
  }
</script>

<style lang="scss" scoped>

</style>