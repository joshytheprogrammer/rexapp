<template>
  <form class="w-full lg:w-[48%]" @submit.prevent="submitEmail">
    <label class="block text-sm font-medium py-2 leading-6 text-gray-900">Email</label>
    <div class="relative rounded-md shadow-sm">
      <input 
        type="email" 
        autocomplete="email"
        :disabled="!editingEmail"
        v-model="email"
        class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
        <div class="absolute inset-y-0 right-0 flex items-center">
          <button
            type="submit"
            :disabled="submittingEmail"
            class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            v-if="editingEmail"
          >
            {{ submittingEmail ? '...' : 'Save'}}
          </button>
          <button
            type="button"
            class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            @click="toggleEditEmail"
            v-else
          >
            Edit
          </button>
        </div>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(['user', 'token']);

import { useNotificationStore } from '@/store/notification';

const notification = useNotificationStore();

const email = ref(props.user.email);

const editingEmail = ref(false);
const submittingEmail = ref(false);

function toggleEditEmail() {
  editingEmail.value = true;
}

async function submitEmail() {
  submittingEmail.value = true;

  const { data, error } = await useFetch('/user/change-email', {
    baseURL: useRuntimeConfig().public.baseURL,
    method: "POST",
    headers: {
      Authorization: 'Bearer '+props.token,
    },
    body: {email},
  });

  if (error.value) {
    const errorMessage = error.value.data?.message || "Something went wrong";

    notification.setNotification({
      type: 'error',
      message: errorMessage,
    });

    submittingEmail.value = false;
    editingEmail.value = false;
  }

  if(!data.value) {
    submittingEmail.value = false;
    editingEmail.value = false;
    return;
  }

  notification.setNotification({
    'type': 'success',
    'message': data.value.message
  });

  submittingEmail.value = false;
  editingEmail.value = false;
}
</script>

<style lang="scss" scoped>

</style>