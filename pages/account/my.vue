<template>
  <div class=" px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <AccountMy :user="user" :pageID="pageID" :token="token" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
});

import { useAuthStore } from "@/store/auth";
import { useNotificationStore } from '@/store/notification';

const route = useRoute();
const authStore = useAuthStore();
const notification = useNotificationStore();

const token = computed(() => authStore.getAuth.token);

const pageID = computed(() => route.query.page || "profile");

const { data: user, error } = await useFetch('/user/profile', {
  baseURL: 'http://localhost:5000/api',
  headers: {
    authorization: token,
  },
  transform: (user) => {
    return user.profile
  },
});

if (error.value) {
  const errorMessage = error.value.data?.message || "Something went wrong.";

  notification.setNotification({
    type: 'error',
    message: errorMessage,
  });
}
</script>