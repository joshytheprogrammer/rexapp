<template>
  <li class="flex flex-col justify-center md:grid grid-cols-5 gap-4 md:justify-between items-center border-b py-4">
    <img loading="lazy" :src="product.imageURL" :alt="product.name+' Rexapp Product'" class="w-full max-h-36 object-contain col-span-1">
    <div class="text-center md:text-left block col-span-2">
      <span class="text-black capitalize font-semibold text-base">{{product.name}}</span>
      <p class="py-1 text-gray-500 text-sm font-medium ">
        <span>Made by: </span>
        <span class="text-black font-semibold">{{product.manufacturer}}</span>
      </p>
      <p>[<AppCategoryList v-for="c in product.categories" :id="c" />]</p>
      <p class="hidden py-1 md:block space-x-2 ">
        <NuxtLink class="text-sm underline hover:text-green-800 cursor-pointer" :to="'/shop/'+product.slug">View</NuxtLink>
        <a class="text-sm underline hover:text-green-800 cursor-pointer"  @click="cartStore.removeItem(p.partId)">Remove</a>
      </p>
    </div>
    <span class="col-span-1 block py-2 text-gray-700 font-semibold text-sm text-center"> {{ formatPrice(product.price.min) }} <br> - <br> {{ formatPrice(product.price.max) }}</span>
    <select class="bg-gray-200 py-1 px-2 rounded-md border outline-none focus:border-green-800 cursor-pointer" @change="updateQuantity" v-model="props.p.quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <p class="block py-1 md:hidden space-x-2 ">
      <NuxtLink class="text-sm underline hover:text-green-800 cursor-pointer" :to="'/shop/'+product.slug">View</NuxtLink>
      <a class="text-sm underline hover:text-green-800 cursor-pointer"  @click="cartStore.removeItem(p.partId)">Remove</a>
    </p>
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
  key: props.p.partId
});

const product = await data.value.product;

console.log(props.p.partId, product)
</script>