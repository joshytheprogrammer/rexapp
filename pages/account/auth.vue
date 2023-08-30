<template>
  <div class="block w-full lg:flex gap-4 justify-around items-center bg-gray-100 px-4 sm:px-8 md:px-8 lg:px-18 py-4 ">
    <AuthLogin />
    <AuthRegister />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
});
</script>

<style lang="scss" scoped>

</style>