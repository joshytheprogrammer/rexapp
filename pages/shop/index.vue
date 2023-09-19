<template>
  <div class="w-full px-4 sm:px-8 md:px-8 lg:px-18 py-4 mx-auto space-y-12">
    <ShopRandom />
    <ShopFeatured />
    <!-- <div class="">
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
    </div> -->
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Shop for products on Rexapp',
  ogTitle: 'Shop for products on Rexapp',
  ogImage: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1695123250/rexapp/logo_wmh7dg.png',
});
</script>

<style lang="scss" scoped>

</style>