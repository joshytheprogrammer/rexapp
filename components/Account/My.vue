<template>
  <div class="block mx-auto mb-2 rounded-md shadow-lg border">
    <AccountNav :pageID="pageID" />
    <div class="page" v-if="Object.keys(user).length > 0">
      <AccountProfile v-if="pageID === 'profile'" :user="user" :token="token" />
      <AccountOrders v-if="user.orders && pageID === 'orders'" :orders="user.orders" :token="token" />
      <Transition name="fade">
        <AppComingSoon v-show="pageID === 'wishlist'" />
      </Transition>
    </div>
    <p class="px-4 sm:px-8 md:px-8 lg:px-18 py-2" v-else>Loading...</p>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import { useNotificationStore } from '@/store/notification';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const notification = useNotificationStore();

const token = computed(() => authStore.getAuth.token);
const pageID = computed(() => route.query.page || "profile");

let user = ref({});
let error = ref(null);

onMounted(async () => {
  if (!token.value) {
    notification.setNotification({
      type: 'error',
      message: 'Authentication token is missing.',
    });
    authStore.logout();
    router.push({ name: 'login' });
    return;
  }

  try {
    const { data, error: fetchError } = await useFetch('/user/profile', {
      baseURL: useRuntimeConfig().public.baseURL,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    });

    if (fetchError.value) {
      error.value = fetchError.value;
      const errorMessage = fetchError.value.data?.message || "Something went wrong.";
      notification.setNotification({
        type: 'error',
        message: errorMessage,
      });
      return;
    }

    user.value = data.value.profile;
  } catch (err) {
    error.value = err;
    console.log(err);
    notification.setNotification({
      type: 'error',
      message: 'An unexpected error occurred.',
    });
  }
});
</script>
