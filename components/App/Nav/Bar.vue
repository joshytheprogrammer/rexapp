<template>
  <div class="block">
    <nav class="w-full flex items-center justify-between px-4 sm:px-8 md:px-8 lg:px-18 py-4 border-b">
      <div class="w-fit">
        <NuxtLink class="flex items-center space-around no-underline" to="/">
          <!-- <img src="" alt=""> -->
          <Icon class="text-green-800" size="4em" name="ph:car-fill" />
          <h1 class="font-bold text-xl md:text-2xl lg:text-4xl italic px-2">Rex<span class="text-green-800">app</span></h1>
        </NuxtLink>
      </div>
      <div class="search">
        <AppUtilsSearch />
      </div>
      <div class="flex items-center">
        <div class="cursor-pointer px-4">
          <NuxtLink @click.prevent="cartStore.toggleQuickCart()" class="block px-1">
            <span class="block rounded-xl text-center font-bold text-black text-xs">{{ cartStore.getCartNo }}</span>
            <Icon name="mdi:cart-outline" size="1.55em" />
          </NuxtLink>
        </div>
        <div>
          <NuxtLink v-if="!getUserData()" to="/account/auth" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white rounded-md px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Login</NuxtLink>
          <div class="profile-image text-white flex justify-center items-center border-2 rounded-full cursor-pointer hover:border-black hover:shadow-sm transition-all duration-300" v-else>
            <NuxtLink to="/account/my">
              <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle :cx="size" :cy="size" :r="size" fill="#166534" />
              <text :x="size" :y="size" font-size="40" text-anchor="middle" dy="0.35em" fill="white">
                {{ getUserData().name.charAt(0).toUpperCase() }}
              </text>
            </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <nav class="w-full flex justify-center px-4 sm:px-8 md:px-8 lg:px-18 py-6">
      <ul class="flex">
        <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/">Home</NuxtLink>
        </li>
        <span class="px-2">
          <Icon class="text-gray-500" name="tabler:minus-vertical" size="1em" />
        </span>
        <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium px-2">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/shop">Shop</NuxtLink>
        </li>
        <span class="px-2">
          <Icon class="text-gray-500" name="tabler:minus-vertical" size="1em" />
        </span>
        <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium px-2">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/blog">Blog</NuxtLink>
        </li>
        <span class="px-2">
          <Icon class="text-gray-500" name="tabler:minus-vertical" size="1em" />
        </span>
        <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium px-2">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/about">About</NuxtLink>
        </li>
        <span class="px-2">
          <Icon class="text-gray-500" name="tabler:minus-vertical" size="1em" />
        </span>
        <li class="cursor-pointer hover:text-green-800 transition-all duration-300 font-medium px-2">
          <NuxtLink class="link px-4 py-2 border border-transparent" to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const { getUserData } = useUserUtilities();
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const size = 50;

</script>

<style lang="postcss" scoped>
.link:hover {
  @apply rounded-full border-green-800 text-green-800  transition-all duration-300;
}
.router-link-exact-active.link {
  @apply rounded-full border-green-800 bg-green-800 text-white;
}
</style>