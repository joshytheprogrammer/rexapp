<template>
  <div class="w-full h-72 bg-gray-300 px-4 sm:px-8 md:px-8 lg:px-18 py-4 text-white bg-fixed bg-[url('https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_1440/v1694523145/rexapp/categories_bg_uuarnx.avif')] flex flex-col justify-center">
    <div class="space-y-4">
      <h2 class="w-fit text-2xl font-semibold relative">
        {{ name }}
        <span class="block rounded-md mt-2 inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-500 to-green-900"></span>
      </h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['name', 'desc']);
</script>
