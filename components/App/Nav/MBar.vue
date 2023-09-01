<template>
  <div class="block">
    <div :class="!sideMenu ? 'hidden' : 'block fixed z-40 top-0 left-0 w-full h-full bg-black opacity-50'" @click="toggleMenu"></div>
    <nav class="w-full flex items-center justify-between p-4">
      <div class="w-fit cursor-pointer">
        <span @click="toggleMenu">
          <Icon name="material-symbols:menu" size="1.55em" />
        </span>
      </div>
      <div class="w-fit">
        <NuxtLink class="flex items-center space-around no-underline" to="/">
          <!-- <img src="" alt=""> -->
          <Icon class="text-green-800" size="2em" name="ph:car-fill" />
          <h1 class="font-bold text-xl md:text-2xl lg:text-4xl italic px-2">Rex<span class="text-green-800">app</span></h1>
        </NuxtLink>
      </div>
      <div class="flex items-end">
        <span class="block cursor-pointer" @click="toggleSearch">
          <Icon name="uil:search" size="1.55em" />
        </span>
        <NuxtLink @click.prevent="cartStore.toggleQuickCart()" class="block ml-8">
          <span class="block rounded-xl text-center font-bold text-black text-xs">{{ cartStore.getCartNo }}</span>
          <Icon name="mdi:cart-outline" size="1.55em" />
        </NuxtLink>
      </div>
    </nav>
    <section class="fixed z-50 top-0 left-0 p-4 h-full bg-white w-11/12 transform transition-transform" :class="{ '-translate-x-full': !sideMenu, 'translate-x-0': sideMenu }">
      <div class="w-full flex justify-between items-center">
        <NuxtLink class="flex items-center space-around no-underline" to="/">
          <Icon class="text-green-800" size="2em" name="ph:car-fill" />
          <h1 class="font-bold text-xl md:text-2xl lg:text-4xl italic px-2">Rex<span class="text-green-800">app</span></h1>
        </NuxtLink>
        <span class="cursor-pointer" @click="toggleMenu">
          <Icon name="material-symbols:close" size="1.55em"/>
        </span>
      </div>
      <ul class="flex flex-col py-4">
        <li class="w-full border-b py-4">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/">Home</NuxtLink>
        </li>
        <li class="w-full border-b py-4">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/shop">Shop</NuxtLink>
        </li>
        <li class="w-full border-b py-4">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/blog">Blog</NuxtLink>
        </li>
        <li class="w-full border-b py-4">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/about">About</NuxtLink>
        </li>
        <li class="w-full border-b py-4">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/contact">Contact</NuxtLink>
        </li>
      </ul>
      <p class="font-semibold px-4 py-2 ">
        <NuxtLink v-if="!getUserData()" to="/account/auth">Login / Signup</NuxtLink>  
        <p v-else>
          <span class="block font-normal">Welcome back</span>
          <NuxtLink to="/account/my" class="text-green-800 text-sm">{{ getUserData().name }}</NuxtLink>
        </p>
      </p>
    </section>
    <section class="fixed z-50 top-0 left-0 p-4 h-fit bg-white w-full transform transition-transform" :class="{ '-translate-y-full': !showSearch, 'translate-y-0': showSearch }">
      <div class="w-full flex justify-between items-center">
        <NuxtLink class="flex items-center space-around no-underline" to="/">
          <Icon class="text-green-800" size="2em" name="ph:car-fill" />
          <h1 class="font-bold text-xl md:text-2xl lg:text-4xl italic px-2">Rex<span class="text-green-800">app</span></h1>
        </NuxtLink>
        <span class="cursor-pointer" @click="toggleSearch">
          <Icon name="material-symbols:close" size="1.55em"/>
        </span>
      </div>
      <AppUtilsMSearch />
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const route = useRoute();
const { getUserData } = useUserUtilities();

const cartStore = useCartStore();

let sideMenu = ref(false);
let showSearch = ref(false);

watch(() => route.fullPath, () => {
  sideMenu.value = false;
  showSearch.value = false;
});


function toggleMenu() {
  sideMenu.value = !sideMenu.value
}

function toggleSearch() {
  showSearch.value = !showSearch.value
}
</script>

<style lang="postcss" scoped>
.link:hover {
  @apply rounded-full border-green-800 text-green-800  transition-all duration-300;
}
.router-link-exact-active.link {
  @apply rounded-full border-green-800 text-green-800;
}
</style>