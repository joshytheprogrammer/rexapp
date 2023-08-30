<template>
  <div class="w-full flex gap-2 justify-between items-center flex-wrap py-4">
    <form class="w-full lg:w-[48%]" @submit.prevent="submitNames">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">First name</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text" 
          autocomplete="firstName"
          required
          :disabled="!editingNames"
          v-model="names.firstName"
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
          <div class="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              :disabled="submittingNames"
              class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              v-if="editingNames"
            >
              {{ submittingNames ? '...' : 'Save'}}
            </button>
            <button
              type="button"
              class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              @click="toggleEditNames"
              v-else
            >
              Edit
            </button>
          </div>
      </div>
    </form>
    <form class="w-full lg:w-[48%]" @submit.prevent="submitNames">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">Last name</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text" 
          autocomplete="firstName"
          required
          :disabled="!editingNames"
          v-model="names.lastName"
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
          <div class="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              :disabled="submittingNames"
              class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              v-if="editingNames"
            >
              {{ submittingNames ? '...' : 'Save'}}
            </button>
            <button
              type="button"
              class="flex w-full justify-center rounded-r-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              @click="toggleEditNames"
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
const props = defineProps(['user', 'token']);

import { useNotificationStore } from '@/store/notification';

const notification = useNotificationStore();

// Handle First Names...
const names = reactive({
  firstName: props.user.firstName,
  lastName: props.user.lastName,
});

const editingNames = ref(false);
const submittingNames = ref(false);

function toggleEditNames() {
  editingNames.value = true;
}

async function submitNames() {
  submittingNames.value = true;

  const { data, error } = await useFetch('user/change-name', {
    baseURL: 'http://localhost:5000/api/',
    method: "POST",
    headers: {
      authorization: props.token,
    },
    body: names,
  });

  if (error.value) {
    const errorMessage = error.value.data?.message || "Something went wrong";

    notification.setNotification({
      type: 'error',
      message: errorMessage,
    });

    submittingNames.value = false;
    editingNames.value = false;
  }

  if(!data.value) {
    submittingNames.value = false;
    editingNames.value = false;
    return;
  }

  notification.setNotification({
    'type': 'success',
    'message': data.value.message
  });

  submittingNames.value = false;
  editingNames.value = false;
}
</script>

<style lang="scss" scoped>

</style>