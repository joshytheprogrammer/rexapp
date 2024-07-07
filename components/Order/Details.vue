<template>
  <div class="block my-4">
    <!-- {{ order }} -->
    <div class="block lg:grid items-center grid-cols-8 gap-4">
      <div class="w-full col-span-6 mb-4 rounded-md shadow-lg border bg-white px-4  py-4 space-y-4">
        <h2 class=" text-xl lg:text-2xl font-normal underline underline-offset-8">Order Details</h2>
        <section class="lg:overflow-y-auto lg:max-h-96">
          <AppProductODCard v-for="p in order.items" :key="p.id" :p="p"  />
        </section>
      </div>
      <div class="w-full h-full col-span-2 block mb-4 rounded-md shadow-lg border bg-white px-4 lg:px-6 py-4 space-y-2 text-sm font-normal">
        <p class="flex flex-col">
          <span>Status: </span>
          <span class="font-medium text-green-800">{{ order.status }}</span>
        </p>
        <p class="flex flex-col">
          <span>Order ID: </span>
          <span class="font-medium text-xs text-green-800">{{ order.id }}</span> 
        </p>
        <p class="flex flex-col">
          <span>Ordered on: </span>
          <span class="font-medium text-green-800">{{ new Date(order.created_at).toDateString()}}</span>
        </p>
      </div>
    </div>
    <div class="">
      <OrderNotes />
    </div>
  </div>
</template>

<script setup>
defineProps(['order']);
</script>