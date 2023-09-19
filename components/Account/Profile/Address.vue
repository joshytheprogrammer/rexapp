<template>
  <form class="w-full flex gap-2 justify-between items-center flex-wrap py-4"  @submit.prevent="submitAddress">
    <div class="w-full lg:w-[48%]">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">Street</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text" 
          autocomplete="street"
          :disabled="!editingAddress"
          v-model="address.street"
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
      </div>
    </div>
    <div class="w-full lg:w-[48%]">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">State</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text" 
          autocomplete="state"
          :disabled="!editingAddress"
          v-model="address.state"
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
      </div>
    </div>
    <div class="w-full lg:w-[48%]">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">City</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text" 
          autocomplete="city"
          :disabled="!editingAddress"
          v-model="address.city"
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
      </div>
    </div>
    <div class="w-full lg:w-[48%]">
      <label class="block text-sm font-medium py-2 leading-6 text-gray-900">Landmark</label>
      <div class="relative rounded-md shadow-sm">
        <input 
          type="text" 
          autocomplete="landmark"
          :disabled="!editingAddress"
          v-model="address.landmark"
          class="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6 disabled:cursor-not-allowed">
      </div>
    </div>
    <div class="w-full my-4 flex items-center">
      <button
        type="submit"
        :disabled="submittingAddress"
        class="flex w-fit justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
        v-if="editingAddress"
      >
        {{ submittingAddress ? '...' : 'Save'}}
      </button>
      <button
        type="button"
        class="flex w-fit justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
        @click="toggleEditAddress"
        v-else
      >
        Edit
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(['user', 'token']);

import { useNotificationStore } from '@/store/notification';

const notification = useNotificationStore();

// Handle Address...
const address = reactive({
  street: props.user.address.street,
  city: props.user.address.city,
  state: props.user.address.state,
  landmark: props.user.address.landmark,
});

const editingAddress = ref(false);
const submittingAddress = ref(false);

function toggleEditAddress() {
  editingAddress.value = true;
}

async function submitAddress() {
  submittingAddress.value = true;

  const { data, error } = await useFetch('/user/change-address', {
    baseURL: useRuntimeConfig().public.baseURL,
    method: "POST",
    headers: {
      authorization: props.token,
    },
    body: address,
  });

  if (error.value) {
    const errorMessage = error.value.data?.message || "Something went wrong";

    notification.setNotification({
      type: 'error',
      message: errorMessage,
    });

    submittingAddress.value = false;
    editingAddress.value = false;
  }

  if(!data.value) {
    submittingAddress.value = false;
    editingAddress.value = false;
    return;
  }

  notification.setNotification({
    'type': 'success',
    'message': data.value.message
  });

  submittingAddress.value = false;
  editingAddress.value = false;
}
</script>
