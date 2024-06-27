<template>
  <div class="w-full flex gap-2 justify-between items-center flex-wrap py-4">
    <form class="w-full lg:w-[48%]" @submit.prevent="submitPassword">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">Old Password</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text"
          :disabled="!editingPassword"
          v-model="formData.currentPassword"
          required
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
      </div>
    </form>
    <form class="w-full lg:w-[48%]" @submit.prevent="submitPassword">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">New Password</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text"
          :disabled="!editingPassword"
          v-model="formData.newPassword"
          required
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
          <div class="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              :disabled="submittingPasswords"
              class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              v-if="editingPassword"
            >
              {{ submittingPasswords ? '...' : 'Save'}}
            </button>
            <button
              type="button"
              class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              @click="toggleEditPassword"
              v-else
            >
              Edit
            </button>
          </div>
      </div>
    </form>
    
  </div>
</template>

<script setup>
const props = defineProps(['token']);

import { useNotificationStore } from '@/store/notification';

const notification = useNotificationStore();

// Handle First Names...
let formData = reactive({
  currentPassword: '',
  newPassword: ''
});

const editingPassword = ref(false);
const submittingPasswords = ref(false);

function toggleEditPassword() {
  editingPassword.value = true;
}

async function submitPassword() {
  submittingPasswords.value = true;

  const { data, error } = await useFetch('/user/change-password', {
    baseURL: useRuntimeConfig().public.baseURL,
    method: "POST",
    headers: {
      Authorization: 'Bearer '+props.token,
    },
    body: formData,
  });

  if (error.value) {
    const errorMessage = error.value.data?.message || "Something went wrong";

    notification.setNotification({
      type: 'error',
      message: errorMessage,
    });

    submittingPasswords.value = false;
    editingPassword.value = false;
  }

  if(!data.value) {
    submittingPasswords.value = false;
    editingPassword.value = false;

    formData = reactive({
      currentPassword: '',
      newPassword: ''
    });
    return;
  }

  notification.setNotification({
    'type': 'success',
    'message': data.value.message
  });

  submittingPasswords.value = false;
  editingPassword.value = false;

  formData = reactive({
    currentPassword: '',
    newPassword: ''
  });
}
</script>

