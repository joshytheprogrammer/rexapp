<template>
  <Transition name="fade">
    <div class="px-4 sm:px-8 md:px-8 overflow-x-auto lg:px-18 bg-gray-400 py-4">
      <table class="border-collapse table-auto w-full text-sm">
        <caption v-if="orders.length > 0" class="text-black pt-4 text-xs caption-bottom font-medium text-center">
          Orders Version 1.0 - Displaying Your <span class="text-green-800 font-semibold">{{ orders.length }}</span> Recent Orders.
        </caption>
        <caption v-else class="text-black pt-4 text-xs caption-bottom font-medium text-center">
          You haven't made any recent orders. You can do so <NuxtLink class="hover:text-green-800" to="/shop">here</NuxtLink>
        </caption>
        <thead class="bg-green-800">
          <tr class="text-white text-left font-medium">
            <th class="border-b p-4 pb-3">Order ID</th>
            <th class="border-b p-4 pb-3">Date</th>
            <th class="border-b p-4 pb-3">Status</th>
            <th class="border-b p-4 pb-3">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white text-dark ">
          <tr v-for="item in orders" :key="item.id">
            <td class="border-b border-slate-100 p-4">{{ item.id }}</td>
            <td class="border-b border-slate-100 p-4">{{ new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ' ' + new Date(item.created_at).toLocaleTimeString() }}</td>
            <td class="border-b border-slate-200 p-4">{{ item.status }}</td>
            <td class="border-b border-slate-200 p-4">
              <NuxtLink class="hover:text-green-800" :to="'/orders?order='+item.id">View</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps(['orders', 'token']);

props.orders.sort((a, b) => {
  if (a.orderDate > b.orderDate) return -1; // Compare dates in descending order
  if (a.orderDate < b.orderDate) return 1;
  return 0;
});
</script>