<template>
  <div class="block mx-auto mb-2 rounded-md shadow-lg border ">
    <AccountNav :pageID="pageID" />
    <div class="page">
      <Transition name="blur" mode="'out-in'">
        <AccountProfile v-show="pageID === 'profile'" :user="user" :token="token" />
      </Transition>
      <Transition name="blur" mode="'out-in'">
        <AppComingSoon v-show="pageID === 'orders'" />
      </Transition>
      <Transition name="blur" mode="'out-in'">
        <AppComingSoon v-show="pageID === 'wishlist'" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
defineProps(['user', 'pageID', 'token']);

</script>
