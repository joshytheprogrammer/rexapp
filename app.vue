<template>
  <div class="app">
    <AppNavStrip />
    <AppUtilsNotification />
    <AppNavMBar v-show="isMobile"  />
    <AppNavBar v-show="!isMobile" />
    <main>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
  import { useMobileStore } from '@/store/mobile';

  useHead({
    title: 'Discover Your Automotive Needs with RexApp: Your One-Stop Auto Parts Solution',
  });
  
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