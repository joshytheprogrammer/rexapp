<template>
  <section class="flex justify-between gap-8 bg-white w-full items-center py-4 px-4 lg:px-8 rounded-md shadow-lg border ">
    <h2 class="hidden md:block w-fit text-xl lg:text-2xl font-medium">Track your Order</h2>
    <form class="w-full lg:w-1/2 inline-flex justify-end" @submit.prevent="performRedirect">
      <input class="w-full px-1 lg:px-2 py-3 outline-none border focus:border-green-800 rounded-l placeholder:text-slate-400 placeholder:font-light" type="text" placeholder="Enter your order ID" v-model="query" required>
      <button class="cursor-pointer h-full transition-all duration-300 bg-green-800 hover:bg-green-900 text-white px-2 lg:px-4 py-3 rounded-r ">
        <Icon name="tabler:search" size="1.55em" type="submit" />
      </button>
    </form>
  </section>
</template>

<script setup>
import { useNotificationStore } from '@/store/notification'

const route = useRoute();
const notification = useNotificationStore();
const {isValidObjectId} = useSearchUtilities();


let query = ref(route.query.order);

watch(() => route.query, () => {
  query.value = route.query.order;
});

function performRedirect() {
  if(!isValidObjectId(query.value)){notification.setNotification({type: 'error', message: 'Invalid Order ID',}); return;}
  
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