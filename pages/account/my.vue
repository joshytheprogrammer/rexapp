<template>
  <div class="px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <AccountMy :pageID="pageID" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
});

const route = useRoute();
const pageID = computed(() => route.query.page || "profile");
</script>
