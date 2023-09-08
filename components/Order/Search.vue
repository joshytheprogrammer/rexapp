<template>
  <form class="w-full flex justify-center" @submit.prevent="performRedirect">
    <input class="w-11/12 lg:w-1/2 px-1 lg:px-2 py-3 outline-none border rounded-l placeholder:text-slate-400 placeholder:font-light" type="text" placeholder="Enter your order ID" v-model="query" required>
    <button class="cursor-pointer h-full transition-all duration-300 bg-green-800 hover:bg-green-900 text-white px-2 lg:px-4 py-3 rounded-r ">
      <Icon name="tabler:search" size="1.55em" type="submit" />
    </button>
  </form>
</template>

<script setup>
import { useNotificationStore } from '@/store/notification'

const route = useRoute();
const notification = useNotificationStore();


let query = ref(route.query.order);

watch(() => route.query, () => {
  query.value = route.query.order;
});

function isValidObjectId(id) {
  const objectIdPattern = /^[0-9a-fA-F]{24}$/; // MongoDB ObjectId pattern
  return objectIdPattern.test(id);
}

function performRedirect() {
  if(!isValidObjectId(query.value)){notification.setNotification({type: 'error', message: 'Invalid Order ID',});}
  
  navigateTo({
    path: '/orders',
    query: {
      order: query.value
    }
  });
}
</script>

<style lang="scss" scoped>

</style>