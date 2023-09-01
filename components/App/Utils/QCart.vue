<template>
  <div class="" v-show="sideMenu">
    <Transition name="fade">
      <div class="fixed z-40 top-0 left-0 w-full h-full bg-black opacity-50" @click="toggleMenu"></div>
    </Transition>
    <div class="fixed z-50 top-0 right-0 p-4 h-full bg-white w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 transform transition-transform duration-500 overflow-y-auto" :class="{ '-translate-x-full': !sideMenu, 'translate-x-0 ': sideMenu }">
      <div class="py-4 border-b">
        <div class="w-full flex justify-between items-center">
          <h2 class="text-xl font-semibold">Quick Checkout</h2>
          <span class="cursor-pointer" @click="toggleMenu">
            <Icon name="material-symbols:close" size="1.55em"/>
          </span>
        </div>
        
        <p class="pt-4 text-gray-600">Experience the ultimate convenience of completing your purchase in a matter of seconds.</p>
      </div>
      <ul class="">
        <AppProductQCCard />
        <AppProductQCCard />
        <AppProductQCCard />
      </ul>
      <div class="flex justify-between text-white py-4">
        <NuxtLink to="/cart/"  class="px-4 py-2 bg-green-800 hover:bg-green-900 border-green-800 border rounded-md">View Cart</NuxtLink>
        <button class="px-4 py-2 bg-green-800 hover:bg-green-900 border-green-800 border rounded-md" v-if="cartStore.isAuth">Checkout</button>
        <NuxtLink to="/account/auth/" class="px-4 py-2 bg-green-800 hover:bg-green-900 border-green-800 border rounded-md" v-else>Login to Checkout</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';

const route = useRoute();
const cartStore = useCartStore();

let sideMenu = computed(() => cartStore.showingQuickCart);

function toggleMenu() {
  cartStore.toggleQuickCart()
}

watch(() => route.fullPath, () => {
  cartStore.toggleQuickCart(false)
});

watch(sideMenu, (newValue) => {
  if (newValue) {
    document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');

  } else {
    document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
  }
});
</script>

<style lang="scss" scoped>

</style>