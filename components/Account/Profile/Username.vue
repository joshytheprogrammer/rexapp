<template>
  <form class="w-full lg:w-[48%]" @submit.prevent="submitName">
    <label class="block text-sm font-medium py-2 leading-6 text-gray-900">Username</label>
    <div class="relative rounded-md shadow-sm">
      <input 
        type="text" 
        autocomplete="username"
        :disabled="!editingName"
        v-model="username"
        class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
        <div class="absolute inset-y-0 right-0 flex items-center">
          <button
            type="submit"
            :disabled="submittingName"
            class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            v-if="editingName"
          >
            {{ submittingName ? '...' : 'Save'}}
          </button>
          <button
            type="button"
            class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            @click="toggleEditName"
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

const username = ref(props.user.username);

const editingName = ref(false);
const submittingName = ref(false);

function toggleEditName() {
  editingName.value = true;
}

async function submitName() {
  submittingName.value = true;

  const { data, error } = await useFetch('/user/change-username', {
    baseURL: useRuntimeConfig().public.baseURL,
    method: "POST",
    headers: {
      authorization: props.token,
    },
    body: {username},
  });

  if (error.value) {
    const errorMessage = error.value.data?.message || "Something went wrong";

    notification.setNotification({
      type: 'error',
      message: errorMessage,
    });

    submittingName.value = false;
    editingName.value = false;
  }

  if(!data.value) {
    submittingName.value = false;
    editingName.value = false;
    return;
  }

  notification.setNotification({
    'type': 'success',
    'message': data.value.message
  });

  submittingName.value = false;
  editingName.value = false;
}
</script>

<style lang="scss" scoped>

</style>