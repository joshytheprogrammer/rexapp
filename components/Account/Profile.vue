<template>
  <div class="px-4 sm:px-8 md:px-8 lg:px-18 py-2">
    <div class="w-full">
      <h2 class="py-4 text-2xl font-medium leading-9 tracking-tight text-gray-900">Personal Information</h2>
      <AccountProfileNames :user="user" :token="token" />
      <div class="w-full flex gap-2 justify-between items-center flex-wrap py-4">
        <AccountProfileUsername :user="user" :token="token" />
        <AccountProfileEmail :user="user" :token="token" />
      </div>
      <AccountProfilePassword :token="token" />
    </div>
    <div class="w-full">
      <h2 class="py-4 text-2xl font-medium leading-9 tracking-tight text-gray-900">Address Information</h2>
      <AccountProfileAddress :user="user" :token="token" />
    </div>
  </div>
</template>

<script setup>
defineProps(['user', 'token']);
</script>
