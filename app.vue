<template>
  <div class="app">
    <AppNavStrip />
    <AppUtilsNotification />
    <AppUtilsQCart />
    <AppNavMBar v-show="isMobile"  />
    <AppNavBar v-show="!isMobile" />
    <main>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main> 
    <AppToTop />
    <AppFooter />
  </div>
</template>

<script setup>
  useHead({
    title: 'Discover Your Automotive Needs with RexApp: Your One-Stop Auto Parts Solution',
  });

  import { useMobileStore } from '@/store/mobile';
  
  const device = useMobileStore();

  const isMobile = computed(() => device.getDevice);

  // Function to update the isMobile value
  function updateIsMobile() {
    device.checkWidth()
  }

  // Call the updateIsMobile function initially
  updateIsMobile()

  // Add event listeners on component mount and remove them on component unmount
  onMounted(() => {
    window.addEventListener('resize', updateIsMobile);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateIsMobile);
  });
</script>