<template>
  <div class="w-full px-4 sm:px-8 md:px-8 lg:px-18 py-4 mx-auto">
    <ShopRandom />
    <div class="">
      <ShopHeader title="Recently Uploaded Products" />
      <div class="flex justify-start">  
        <AppProductVCard />
        <AppProductVCard />
        <AppProductVCard />
      </div>
    </div>
    <div class="">
      <ShopHeader title="Frequently Bought Products" />
      <div class="flex flex-wrap justify-start">  
        <AppProductVCard />
      </div>
    </div>
    <div class="">
      <ShopHeader title="Trending this Season" />
      <div class="flex justify-start">  
        <AppProductVCard />
        <AppProductVCard />
        <AppProductVCard />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>