<template>
  <div class="w-full bg-black px-4 sm:px-8 md:px-8 lg:px-18 py-4">
    <div class="block mx-auto justify-center lg:mx-0 lg:mr-4 lg:flex lg:justify-between items-center py-8 text-white border-b border-gray-800">
      <div class="block text-center lg:text-left">
        <h2 class=" text-2xl lg:text-4xl font-semibold lg:font-medium tracking-tight text-white">Subscribe to our <span class="text-green-600">Newsletter.</span></h2>
        <p class="mt-4 text-md leading-8 text-gray-300">Don`t wait make a smart & logical quote here. Its pretty easy. </p>
      </div>
      <div class="flex lg:w-1/2 mt-4 lg:mt-0">
          <label for="email-address" class="sr-only">Email address</label>
          <input type="email" autocomplete="email" required class="flex-auto rounded-l-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm outline-none sm:leading-6" placeholder="Enter your email">
          <button type="submit" class="flex-none rounded-r-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
    </div>
    <div class="block mx-auto justify-center lg:flex lg:justify-between gap-4 py-8 text-white border-b border-gray-800">
      <div class="flex flex-col justify-between basis-1/2 text-center lg:text-left lg:pr-8 pb-8 lg:pb-0">
        <h3 class="text-xl font-semibold leading-9 tracking-tight">ABOUT US</h3>
        <p class="text-center lg:text-left text-md leading-8 text-gray-300">The RexApp project is driven by the mission to revolutionize the way automobile spare parts are procured in Nigeria. Through the creation of an intuitive and accessible web application, our goal is to streamline the entire process, making it easier and more convenient for individuals and businesses to source the necessary components for their vehicles.</p>
      </div>
      <div class="md:flex-nowrap text-center flex justify-between basis-1/2 gap-2 lg:text-left lg:gap-4">
        <div class="md:basis-1/3">
          <h3 class="text-xl font-semibold leading-9 tracking-tight">MY ACCOUNT</h3>
          <ul class="text-sm text-gray-200 md:text-base font-normal md:font-medium">
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/account/my">My Profile</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/cart">My Cart</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/account/my?page=wishlist">My Wishlist</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300" v-if="!getUserData()">
              <NuxtLink to="/account/auth#login">Login</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300" v-else>
              <NuxtLink to="/account/my?page=orders">My Orders</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300" v-if="!getUserData()">
              <NuxtLink to="/account/auth#register">Register</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300" v-else>
              <!-- <NuxtLink to="/account/auth#register">Register</NuxtLink> -->
            </li>
          </ul>
        </div>
        <div class="md:basis-1/3">
          <h3 class="text-xl font-semibold leading-9 tracking-tight">SITE RESOURCES</h3>
          <ul class="text-sm text-gray-200 md:text-base font-normal md:font-medium">
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/contact">Contact Us</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/about">About Us</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/account/my?page=orders">Track Orders</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/about/privacy">Privacy Policy</NuxtLink>
            </li>
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink to="/about/terms">Terms and Conditions</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="md:basis-1/3">
          <h3 class="text-xl text-gray-200 font-semibold leading-9 tracking-tight">FIND BY CATEGORY</h3>
          <ul class="text-sm text-gray-200 md:text-base font-normal md:font-medium" v-for="item in categories" :key="item.id">
            <li class="cursor-pointer py-2 hover:text-green-800 transition-all duration-300">
              <NuxtLink :to="'/categories/'+item.slug"> {{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center text-center md:text-left md:justify-between items-center py-6 text-white">
      <div class="w-fit">
        <NuxtLink class="flex items-center space-around no-underline" to="/">
          <img class="h-16" src="/logo.png" alt="Logo">
          <!-- <Icon class="text-green-800" size="4em" name="ph:car-fill" />
          <h1 class="font-bold text-xl md:text-2xl lg:text-4xl italic px-2">Rex<span class="text-green-800">app</span></h1> -->
        </NuxtLink>
      </div>
      <p class="py-4 md:py-0">
        &copy; {{ new Date().getFullYear() }} WallsandGates Limited. All Rights Reserved
      </p>
      <img class="max-w-xs h-16" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1693404461/rexapp/credit__cards_y6z2yy.png" alt="paywment_providers">
    </div>
  </div>
</template>

<script setup>
const { getUserData } = useUserUtilities();

const { data } = await useFetch('/categories/all', {
    baseURL: useRuntimeConfig().public.baseURL,
    query: {fields:'id,name,slug', sort: 'name', limit: 5},
  });

const categories = data.value?.categories;

</script> 