<template>
  <section class="register w-full py-4 py-8 lg:bg-white rounded-xl lg:shadow-lg" id="register">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account </h2>
    </div>

    <div class="mt-10 w-full sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="register">
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input type="text" autocomplete="username" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6" v-model="user.username">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input type="email" autocomplete="email" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6" v-model="user.email">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6" v-model="user.password">
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            v-if="!loading"
          >
            Create account
          </button>
          <button
            type="button"
            class="flex w-full justify-center items-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 cursor-not-allowed " 
            disabled
            v-else
          >
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.86 3 7.978l3-2.687z"
              ></path>
            </svg>
            Creating...
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <a href="#login" class="font-semibold leading-6 text-green-800 hover:text-green-700">Login?</a>
      </p>
    </div>
  </section>
</template>

<script setup>
  import { useAuthStore } from "@/store/auth";
  const auth = useAuthStore();

  const loading = computed(() => auth.auth.loading);

  const user = reactive({
    username: '',
    email: '',
    password: ''
  });

  function register() {
    auth.register(user)
  }

</script>

<style lang="scss" scoped>

</style>