<template>
  <div class="w-full px-4 sm:px-8 md:px-8 lg:px-18 py-4 bg-gray-200">
    <OrderSearch />
    <AppError v-if="error" :error="error" />
    <AppLoading v-else-if="pending" />
    <OrderDetails v-else :order="order" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
});

import { useAuthStore } from "@/store/auth";
import { useNotificationStore } from '@/store/notification'

const route = useRoute();
const authStore = useAuthStore();
const notification = useNotificationStore();
const {isValidObjectId} = useSearchUtilities();

const token = computed(() => authStore.getAuth.token);

const orderID = computed(() => route.query.order || "");

if(!isValidObjectId(orderID.value)){
  notification.setNotification({type: 'error', message: 'Enter Valid Order ID',});
}

const { data: order, pending, error } = await useLazyFetch(() => `/orders/byId/${orderID.value}`, {
  baseURL: useRuntimeConfig().public.baseURL,
  headers: {
    Authorization: 'Bearer ' + this.auth.token,
  },
});
</script>