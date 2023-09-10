<template>
  <Transition name="fade">
    <div class="px-4 sm:px-8 md:px-8 overflow-x-auto lg:px-18 bg-gray-400 py-4">
      <table class="border-collapse table-auto w-full text-sm">
        <caption class="text-black pt-4 text-xs caption-bottom font-medium text-center">
          Orders Version 1.0 - Displaying Your <span class="text-green-800 font-semibold">{{ orders.length }}</span> Recent Orders.
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
          <tr v-for="item in orders" :key="item._id">
            <td class="border-b border-slate-100 p-4">{{ item._id.substring(item._id.length - 8) }}</td>
            <td class="border-b border-slate-100 p-4">{{ new Date(item.orderDate).toLocaleString() }}</td>
            <td class="border-b border-slate-200 p-4">{{ item.status }}</td>
            <td class="border-b border-slate-200 p-4">
              <NuxtLink class="hover:text-green-800" :to="'/orders?order='+item._id">View</NuxtLink>
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
  if (a.status === 'pending' && b.status !== 'pending') return -1;
  if (a.status !== 'pending' && b.status === 'pending') return 1;
  return 0;
});
</script>