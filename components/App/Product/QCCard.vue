<template>
  <li class="grid grid-cols-3 gap-4 justify-between border-b py-8" >
    <img loading="lazy" :src="product.imageURL" :alt="product.name+' Rexapp Product'" class="col-span-1 w-full max-h-48 object-contain">
    <div class="col-span-2 space-y-2">
      <span class="text-black capitalize font-semibold text-base">{{product.name}}</span>
      <p class="py-1 text-gray-500 text-sm font-medium ">
        <span>Made by: </span>
        <span class="text-black font-semibold">{{product.manufacturer}}</span>
      </p>
      <span class="block py-2 text-gray-700 font-semibold text-base"> {{ formatPrice(product.min_price) }} - {{ formatPrice(product.max_price) }}</span>
      <div class="flex justify-between items-center">
        <select class="bg-gray-200 py-1 px-4 rounded-md border outline-none focus:border-green-800 cursor-pointer" @change="updateQuantity" v-model="props.p.quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p class="block py-1 space-x-2 ">
          <NuxtLink class="text-sm underline hover:text-green-800 cursor-pointer" :to="'/shop/'+product.slug">View</NuxtLink>
          <a class="text-sm underline hover:text-green-800 cursor-pointer"  @click="cartStore.removeItem(p.partId)">Remove</a>
        </p>
      </div>
    </div>
  </li>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();
const { formatPrice } = usePriceUtilities();
const props = defineProps(['p']);

const updateQuantity = () => {
  cartStore.updateQuantity(props.p.partId, props.p.quantity);
};

const { data } = await useFetch(() => `/products/byId/${props.p.partId}`, {
  baseURL: useRuntimeConfig().public.baseURL,
  key: `${props.p.partId}`
});

const product = await data.value?.product;

</script>

<style lang="scss" scoped>

</style>