<template>
  <div class="" v-show="sideMenu">
    <div class="fixed z-40 top-0 left-0 w-full h-full bg-black opacity-50" @click="toggleMenu"></div>
    <div class="fixed z-50 top-0 right-0 p-4 h-full bg-white w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 transform transition-transform duration-500" :class="{ '-translate-x-full': !sideMenu, 'translate-x-0 overflow-y-auto': sideMenu }">
      <div class="py-4 border-b">
        <div class="w-full flex justify-between items-center">
          <h2 class="text-xl font-semibold">Quick Checkout</h2>
          <span class="cursor-pointer" @click="toggleMenu">
            <Icon name="material-symbols:close" size="1.55em"/>
          </span>
        </div>
        
        <p class="pt-4 text-gray-600">Experience the ultimate convenience of completing your purchase in a matter of seconds.</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
let sideMenu = computed(() => cartStore.showingQuickCart);

function toggleMenu() {
  cartStore.toggleQuickCart()
}
</script>

<style lang="scss" scoped>

</style>