<template>
  <div class="flex justify-center">
    <div class="w-11/12 lg:w-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-4 rounded relative" role="alert">
      <span class="block sm:inline">{{ error?.data?.message || "Something went wrong." }}</span>
      <a @click="this.$nuxt.$router.go()" class="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer">
        <Icon name="tabler:refresh" size="1.55em" />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style lang="scss" scoped>

</style>