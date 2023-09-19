<template>
  <div class="bg-transparent border rounded-md w-72 mx-auto md:mx-2 my-4">
    <div class="animate-pulse">
      <div class="bg-gray-200 h-48"></div>
      <div class="p-4 text-gray-700 text-left">
        <div class="flex items-center justify-start">
          <div v-for="index in 5" :key="index" class="text-green-800 pr-2">
            <div class="bg-gray-300 h-4 w-4 rounded-md" ></div>
          </div>
          <div class="font-semibold text-gray-800 text-sm bg-gray-300 h-4 w-12 rounded-md" ></div>
        </div>
        <div class="py-4 space-y-2">
          <div class="bg-gray-300 h-6 rounded-md" ></div>
          <div class="block bg-gray-300 h-6 w-24 rounded-md"></div>
        </div>
        <div class="flex justify-between">
          <div class="bg-gray-400 hover:bg-gray-500 transition-all duration-300 text-white text-xs font-medium rounded-md px-4 py-2 h-8 w-20" ></div>
        </div>
      </div>
    </div>
  </div>
</template>
