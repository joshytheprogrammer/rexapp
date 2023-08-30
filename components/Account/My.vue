<template>
  <div class="block mx-auto mb-2 rounded-md shadow-lg w-11/12 border ">
    <AccountNav :pageID="pageID" />
    <div class="page">
      <AccountProfile v-show="pageID === 'profile'" :user="user" :token="token" />
    </div>
  </div>
</template>

<script setup>
defineProps(['user', 'pageID', 'token']);

</script>
