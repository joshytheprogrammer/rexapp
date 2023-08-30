<template>
  <div class="w-full flex items-center justify-between bg-black text-white px-4 sm:px-8 md:px-12 lg:px-18 border-b py-2 text-xs font-semibold">
    <ul class="w-fit hidden lg:flex items-center uppercase">
      <li class="cursor-pointer hover:text-green-500 transition-all duration-300"> <NuxtLink to="/orders/">Track</NuxtLink> </li>
      <span class="px-2">
        <Icon class="text-gray-500" name="tabler:minus-vertical" size="1.55em"/>
      </span>
      <li class="cursor-pointer hover:text-green-500 transition-all duration-300"> <NuxtLink to="/#">Delivery</NuxtLink> </li>
      <span class="px-2">
        <Icon class="text-gray-500" name="tabler:minus-vertical" size="1.55em" />
      </span>
      <li class="cursor-pointer hover:text-green-500 transition-all duration-300"> <NuxtLink to="/about/privacy">Guarantees</NuxtLink> </li>
      <span class="px-2">
        <Icon class="text-gray-500" name="tabler:minus-vertical" size="1.55em" />
      </span>
      <li class="cursor-pointer flex items-center"> 
        <Icon class="text-green-500" name="material-symbols:mail" size="1.55em" />
        <a class="p-1 hover:text-green-500 transition-all duration-300 lowercase font-normal" href="mailto:info@rexapp.com">
          info@rexapp.com
        </a> 
      </li>
    </ul>
    <ul class="w-fit flex items-center m-auto lg:m-0">
      <li class="cursor-pointer"> 
        <NuxtLink class=" flex items-center hover:text-green-500 transition-all duration-300" to="/account/wishlist">
          <Icon class="hover:text-green-500" name="mdi:heart-outline" size="1.55em" />
          <span class="pl-1">Wishlist</span>
        </NuxtLink> 
      </li>
      <span class="px-2">
        <Icon class="text-gray-500" name="tabler:minus-vertical" size="1.55em"/>
      </span>
      <li class="cursor-pointer"> 
        <NuxtLink class=" flex items-center hover:text-green-500 transition-all duration-300" to="/cart">
          <Icon class="hover:text-green-500" name="mdi:cart-outline" size="1.55em" />
          <span class="pl-1">Cart</span>
        </NuxtLink> 
      </li>
      <span class="px-2">
        <Icon class="text-gray-500" name="tabler:minus-vertical" size="1.55em" />
      </span>
      <li class="cursor-pointer"> 
        <NuxtLink class=" flex items-center hover:text-green-500 transition-all duration-300" to="/account/my">
          <Icon class="hover:text-green-500" name="mdi:user-outline" size="1.55em" />
          <span class="pl-1">My Account</span>
        </NuxtLink> 
      </li>
      <li class="hidden lg:flex">
        <span class="px-2">
          <Icon class="text-gray-500" name="tabler:minus-vertical" size="1.55em" />
        </span>
        <span class="px-2">
          <Icon class="cursor-pointer hover:text-green-500 transition-all duration-300" name="mdi:facebook" size="1.55em" />
        </span>
        <span class="px-2">
          <Icon class="cursor-pointer hover:text-green-500 transition-all duration-300" name="mdi:instagram" size="1.55em" />
        </span>
        <span class="px-2">
          <Icon class="cursor-pointer hover:text-green-500 transition-all duration-300" name="mdi:twitter" size="1.55em" />
        </span>
        <span class="px-2">
          <Icon class="cursor-pointer hover:text-green-500 transition-all duration-300" name="mdi:youtube" size="1.55em" />
        </span>
        <span class="px-2">
          <Icon class="cursor-pointer hover:text-green-500 transition-all duration-300" name="mdi:pinterest" size="1.55em" />
        </span>
      </li>
      
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>