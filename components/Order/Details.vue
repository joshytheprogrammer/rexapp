<template>
  <div class="block my-4">
    <!-- {{ order }} -->
    <div class="block lg:grid items-center grid-cols-8 gap-4">
      <div class="w-full col-span-6 mb-4 rounded-md shadow-lg border bg-white px-4 lg:px-10 py-4 space-y-2">
        <h2 class="text-xl font-semibold mb-4">Order Details</h2>
        <section class="lg:overflow-y-auto lg:max-h-96">
          <AppProductODCard v-for="p in order.items" :key="p.partId" :p="p"  />
        </section>
      </div>
      <div class="w-full h-full col-span-2 block mb-4 rounded-md shadow-lg border bg-white px-4 lg:px-6 py-4 space-y-2 text-sm font-normal">
        <p class="flex flex-col">
          <span>Status: </span>
          <span class="font-medium text-green-800">{{ order.status }}</span>
        </p>
        <p class="flex flex-col">
          <span>Order ID: </span>
          <span class="font-medium text-xs text-green-800">{{ order._id }}</span> 
        </p>
        <p class="flex flex-col">
          <span>Ordered on: </span>
          <span class="font-medium text-green-800">{{ new Date(order.orderDate).toDateString()}}</span>
        </p>
      </div>
    </div>
    <div class="">
      <div class="w-fit block mb-4 rounded-md shadow-lg border bg-white px-4 py-8 lg:p-10 space-y-2 text-sm font-medium">
        <h2 class="text-xl font-semibold mb-4">Order Notes</h2>
        <p class="space-y-4 text-gray-600">
          <p>
            Dear Customer,
          </p>

          <p>
            We have dispatched an email to the email address you provided, containing the current price quotation for the products listed in your order summary. Within the email, you will find a convenient payment link. Once your payment is successfully processed, your selected items will be promptly dispatched to the address you have previously provided.
          </p>

          <p>
            Upon your receipt of the product, please take a moment to confirm its safe arrival. Subsequently, we will promptly update the order status to reflect its successful delivery.
          </p>

          <p>
            Should you wish to cancel your order for any reason, please do not hesitate to reach out to our dedicated support team at <NuxtLink to="mailto:support@rexapp.com" class="underline text-green-800">support@rexapp.com</NuxtLink>. We are here to assist you with any inquiries or requests you may have.
          </p>

          <p>
            Thank you for choosing RexApp for your shopping needs.
          </p>

          <p >
            Best Regards,<br>
            RexApp Team
          </p>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['order']);
</script>