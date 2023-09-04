<template>
  <div>
    <div class="bg-transparent mx-auto w-72 md:w-fit border rounded-md mb-4">
      <div class="max-w-fit md:max-w-full mx-auto md:py-6 md:px-4 lg:px-8">
        <div class="md:grid grid-cols-4 gap-4 items-center">
          <div class="col-span-1">
            <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product2.webp" class="w-full max-h-48 object-cover md:h-auto">
          </div>
          <div class="col-span-3">
            <div class="p-4 text-gray-700 text-left">
              <p class="">
                <NuxtLink to="/shop/" class="text-black font-semibold text-base md:text-lg hover:text-green-800">Amazon Cloud Cam Security Camera</NuxtLink>
                <p class="flex items-center justify-start">
                  <template v-for="(index) in 5">
                    <span class="text-green-800 pr-2" v-if="index <= rating">
                      <Icon name="clarity:star-solid" />
                    </span>
                    <span class="text-gray-800 pr-2" v-if="index > rating">
                      <Icon name="clarity:star-line" />
                    </span>
                  </template>
                  <span class="font-semibold text-gray-800 text-sm">
                    (126) Review
                  </span>
                </p>
              </p>
              <div class="py-4">
                <p class="pb-1 text-grey-700 font-semibold text-base"> {{ formatPrice(20000) + " - " + formatPrice(50000) }}</p>
                <p class="hidden md:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit aliquam earum pariatur itaque deleniti.</p>
              </div>
              <div class="flex justify-between">
                <button class="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const { formatPrice } = usePriceUtilities();
const rating = 2;
</script>

<style lang="scss" scoped>

</style>