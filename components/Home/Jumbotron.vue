<template>
  <div class="hero w-full bg-green-200 text-white lg:text-black bg-scroll bg-clip-border bg-no-repeat bg-right-bottom px-4 sm:px-8 md:px-8 lg:px-18 py-36 uppercase text-center md:text-left flex items-center md:items-start flex-col justify-center">
    <div class="text-xl space-y-8">
      <p class="font-semibold ">best price</p>
      <p class="text-4xl lg:text-6xl text-green-800 font-bold">Everything</p>
      <p class="capitalize">High Quality | Extreme Performance</p>
      <p ><NuxtLink class="block mx-auto md:mx-0 bg-green-800 rounded-full border border-green-800 text-white w-fit px-8 py-4" to="/shop" >Shop Now</NuxtLink></p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.hero {
  @apply bg-gradient-to-r from-lime-500 to-green-500 md:bg-[url('https://res.cloudinary.com/dsgvwxygr/image/upload/v1695040788/rexapp/home3-slider1-layer_mbkyb3.webp')];
}
</style>