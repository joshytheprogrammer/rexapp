<template>
 <div class="bg-transparent w-72 md:w-fit border rounded-md mb-4">
    <div class="max-w-fit md:max-w-full mx-auto md:py-6 md:px-4 lg:px-8">
      <div class="md:grid grid-cols-4 gap-4 items-center">
        <div class="col-span-1">
          <img :src="p.imageURL" class="w-full max-h-48 object-cover md:h-auto">
        </div>
        <div class="col-span-3">
          <div class="p-4 text-slate-700 text-left">
            <p class="">
              <NuxtLink :to="'/shop/'+p.slug" class="text-black font-semibold text-base md:text-lg hover:text-green-800"> {{ p.name }} </NuxtLink>
              <p class="flex items-center justify-start">
                <template v-for="(index) in 5">
                  <span class="text-green-800 pr-2" v-if="index <= p.rating">
                    <Icon name="clarity:star-solid" />
                  </span>
                  <span class="text-gray-800 pr-2" v-if="index > p.rating">
                    <Icon name="clarity:star-line" />
                  </span>
                </template>
                <span class="font-semibold text-gray-800 text-sm">
                  (10+) Review
                </span>
              </p>
              <p class="flex flex-col justify-start pt-2">
                <span class="font-semibold text-gray-800 text-sm">
                  {{ p.manufacturer }}
                </span>
                <p class="font-semibold text-black-800 text-sm space-x-2" >
                  [<AppCategoryList v-for="c in p.categories" :id="c" />]
                </p>
              </p>
            </p>
            <div class="py-4">
              <p class="pb-1 text-grey-700 font-semibold text-base"> {{ formatPrice(p.price.min) + " - " + formatPrice(p.price.max) }}</p>
              <p class="hidden md:block"> {{ p.description }} </p>
            </div>
            <div class="flex justify-between">
              <button v-if="cartStore.itemInCart(p._id)" @click="cartStore.toggleQuickCart()" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
                VIEW CART
              </button>
              <button v-else @click="cartStore.addItem({partId: p._id, quantity: 1})" class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();
const { formatPrice } = usePriceUtilities();

const props = defineProps(['p']);
</script>

<style lang="scss" scoped>

</style>