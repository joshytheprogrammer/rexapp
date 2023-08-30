import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {

  const authStore = useAuthStore();

  const token = authStore.getAuth.token;
  
  if (to.path === '/account/my') {
    if (!token) {
      return navigateTo('/account/auth');
    }
  } else if (to.path === '/account/auth') {
    if (token) {
      return navigateTo('/account/my');
    }
  }
});