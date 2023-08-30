<template>
  <div class="w-full z-50 bottom-4 md:right-4 fixed flex justify-center md:justify-end" v-if="message">
    <div :class="typeClass+' flex justify-center items-center border px-4 py-2 rounded-md text-white'">
      <p class="pr-8">{{ message }}</p>
      <span @click="clearNotification" class="cursor-pointer p-1">
        <Icon name="material-symbols:close" size="1.55em" />
      </span>
    </div>
  </div>

</template>

<script setup>
import { useNotificationStore } from "@/store/notification";

const notificationStore = useNotificationStore();

const type = computed(() => notificationStore.getNotification.type);
const message = computed(() => notificationStore.getNotification.message);

const typeClass = computed(() => {
  switch (type.value) {
    case 'success':
      return 'bg-green-800 border-green-800'; // Replace with your desired background color class
    case 'warning':
      return 'bg-yellow-800 border-yellow-800'; // Replace with your desired background color class
    case 'error':
      return 'bg-red-800 border-red-800'; // Replace with your desired background color class
    default:
      return 'bg-white';
  }
});

const clearNotification = () => {
  notificationStore.clearNotification();
};
</script>