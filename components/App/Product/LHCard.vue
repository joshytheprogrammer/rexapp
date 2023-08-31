<template>
  <div>
    <div class="bg-transparent w-full border rounded-md my-4">
      <div class="max-w-fit md:max-w-full md:mx-auto md:py-6 md:px-4 lg:px-8">
        <div class="md:grid grid-cols-4 gap-4 items-center">
          <div class="col-span-1">
            <div class="animate-pulse bg-gray-200 h-48 w-full max-h-48 object-cover"></div>
          </div>
          <div class="col-span-3">
            <div class="animate-pulse p-4 text-gray-700 text-left">
              <div class="pb-4">
                <div class="bg-gray-300 h-6 w-48 rounded-md mb-2"></div>
                <div class="flex items-center justify-start">
                  <div v-for="index in 5" :key="index" class="text-green-800 pr-2">
                    <div class="bg-gray-300 h-4 w-4 rounded-md"></div>
                  </div>
                  <div class="font-semibold text-gray-800 text-sm bg-gray-300 h-4 w-16 rounded-md"></div>
                </div>
              </div>
              <div class="py-4">
                <div class="bg-gray-300 h-6 w-32 rounded-md mb-1"></div>
                <div class="hidden md:block bg-gray-300 h-12 w-full rounded-md"></div>
              </div>
              <div class="flex justify-between">
                <div class="bg-gray-400 hover:bg-gray-500 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 bg-gray-300 h-8 w-24 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
