<template>
  <div class="flex justify-between items-center px-4 sm:px-8 md:px-8 lg:px-18 py-4 border-b">
    <h2 class="text-lg font-semibold lg:font-medium lg:text-3xl leading-9 tracking-tight">{{ title }}</h2>
    <ul class="hidden md:flex items-center">
      <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium">
        <NuxtLink :class="pageID === 'profile' ? 'text-green-800' : ''" class="px-4 py-2 border border-transparent" to="?page=profile">My Profile</NuxtLink>
      </li>
      <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium px-2">
        <NuxtLink :class="pageID === 'orders' ? 'text-green-800' : ''" class=" px-4 py-2 border border-transparent" to="?page=orders">My Orders</NuxtLink>
      </li>
      <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium px-2">
        <NuxtLink :class="pageID === 'wishlist' ? 'text-green-800' : ''" class="px-4 py-2 border border-transparent" to="?page=wishlist">My Wishlist</NuxtLink>
      </li>
      <NuxtLink @click.prevent="authStore.logout()" to="/account/auth" class="bg-red-800 hover:bg-red-900 transition-all duration-300 text-white rounded-md px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Logout</NuxtLink>
    </ul>
    <nav class="block md:hidden ">
      <div class="w-fit cursor-pointer">
        <span v-if="!sideMenu" @click="toggleMenu">
          <Icon name="material-symbols:menu" size="1.55em" />
        </span>
        <span v-else @click="toggleMenu">
          <Icon name="material-symbols:close" size="1.55em" />
        </span>
      </div>
      <div v-show="sideMenu" class="w-fit my-4 right-8 bg-white block md:hidden border shadow-md rounded-md p-2 absolute z-50 ">
        <ul class="flex flex-col justify-start">
          <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium border-b py-2">
            <NuxtLink :class="pageID === 'profile' ? 'text-green-800' : ''" class="px-4 border border-transparent" to="?page=profile">My Profile</NuxtLink>
          </li>
          <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium border-b py-2">
            <NuxtLink :class="pageID === 'orders' ? 'text-green-800' : ''" class=" px-4 border border-transparent" to="?page=orders">My Orders</NuxtLink>
          </li>
          <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium py-3">
            <NuxtLink :class="pageID === 'wishlist' ? 'text-green-800' : ''" class="px-4 border border-transparent" to="?page=wishlist">My Wishlist</NuxtLink>
          </li>
          <NuxtLink @click.prevent="authStore.logout()" to="/account/auth" class="bg-red-800 hover:bg-red-900 transition-all duration-300 text-center text-white rounded-md px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Logout</NuxtLink>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";

const props = defineProps(['pageID']);
const authStore = useAuthStore();

let sideMenu = ref(false);

function toggleMenu() {
  sideMenu.value = !sideMenu.value
}

watch(() => props.pageID, () => {
  sideMenu.value = false;
});

const title = computed(() => {
  switch (props.pageID) {
    case 'profile':
      return 'Account Details';
    case 'orders':
      return 'Order History';
    case 'wishlist':
      return 'Products You Love';
    default:
      return 'Welcome Back ';
  }
});
</script>