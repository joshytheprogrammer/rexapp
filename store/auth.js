import { defineStore } from 'pinia'
import { useNotificationStore } from './notification'

export const useAuthStore = defineStore('auth', {
  state: () => ({ 
    user: null,
    auth: {
      loading: false,
      token: useCookie('accessToken').value,
    }
  }),
  actions: {
    async login(regData) {
      const notification = useNotificationStore();

      this.auth.loading = true;

      const { data, error } = await useFetch('/auth/login', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        body: regData,
        credentials: 'include'
      });

      if (error.value) {
        const errorMessage = error.value.data?.message || "Attempt failed, it's probably our fault.";
      
        notification.setNotification({
          type: 'error',
          message: errorMessage,
        });
      
        this.auth.loading = false;
      }

      if(!data.value) {
        this.auth.loading = false;
        return;
      }

      const cookie = useCookie('accessToken');
      cookie.value = data.value.accessToken;
      
      useCookie('refreshToken').value = data.value.refreshToken;

      this.auth.token = cookie.value

      await this.me();

      notification.setNotification({
        'type': 'success',
        'message': 'Login Successful'
      });

      navigateTo('/account/my')
      

      this.auth.loading = false;
    },
    async register(regData) {
      const notification = useNotificationStore();
      this.auth.loading = true;

      const { data, error } = await useFetch('/auth/signup', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        body: regData,
      });

      if (error.value) {
        const errorMessage = error.value.data?.message || "Attempt failed, it's probably our fault.";
      
        notification.setNotification({
          type: 'error',
          message: errorMessage,
        });
      
        this.auth.loading = false;
      }

      if(!data.value) {
        this.auth.loading = false;
        return;
      }

      notification.setNotification({
        'type': 'success',
        'message': data.value.message + ' - Please Login!!!'
      });

      this.auth.loading = false;
    },
    async me() {
      const { data, error } = await useFetch('/auth/me', {
        baseURL: useRuntimeConfig().public.baseURL,
        headers: {
          authorization: this.auth.token,
        },
      });

      if (!data.value.data || error.value) {
        return navigateTo('/account/auth');
      }

      this.user = data.value.data

      const user = useCookie('user')
      user.value = data.value.data
    },
    async logout() {
      const refreshToken = useCookie('refreshToken').value;

      const { data, error } = await useFetch('/auth/logout', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: 'POST',
        body: { refreshToken },
        credentials: 'include'
      });

      if (error.value) {
        // Handle error here
        return;
      }

      // Clear cookies and reset state
      useCookie('accessToken').value = null;
      useCookie('refreshToken').value = null;
      useCookie('user').value = null;
      
      this.user = null;
      this.auth.token = null;

      navigateTo('/account/auth');
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getAuth(state) {
      return state.auth;
    }
  }
})