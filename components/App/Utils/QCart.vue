<template>
  <div class="" v-show="sideMenu">
    <div :class="!sideMenu ? 'hidden' : 'block fixed z-40 top-0 left-0 w-full h-full bg-black opacity-50'" @click="toggleMenu"></div>
    <section class="fixed z-50 top-0 right-0 p-4 h-full bg-white w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 transform transition-transform" :class="{ '-translate-x-full': !sideMenu, 'translate-x-0': sideMenu }">
      Testing form
    </section>
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