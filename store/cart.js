import { defineStore } from 'pinia'
import { useNotificationStore } from './notification'
import { useAuthStore } from './auth';

export const useCartStore = defineStore('cart', {
  state: () => ({
    showingQuickCart: false,
    cart: useCookie('cart').value || [],
    summary: {
      subtotal: 0,
      taxes: 0,
      total: 0
    }
  }),
  actions: {
    toggleQuickCart() {
      this.showingQuickCart = !this.showingQuickCart;
    },
    addItem(product) {
      const notification = useNotificationStore();
    
      if (this.cart.some(item => item._id === product._id)) {
        notification.setNotification({
          type: 'error',
          message: 'Item already in cart',
        });
        return;
      }
    
      this.cart.push(product);
      useCookie('cart').value = this.cart;
    },
    removeItem(id) {
      const index = this.cart.findIndex(item => item._id === id);

      if (index === -1) {
        return
      }

      this.cart.splice(index, 1);
      useCookie('cart').value = [...this.cart];
    },
    clearCart() {
      this.cart = [];
      useCookie('cart').value = this.cart;
    },
    async syncCart() {
      const { data, error } = await useFetch('/cart/sync-cart', {
        baseURL: useRuntimeConfig().public.baseURL,
        headers: {
          authorization: token,
        },
      })

      
    }
  },
  getters: {
    getCartItems() {
      return this.cart;
    },
    getCartNo() {
      return this.cart.length;
    },
    itemInCart: (state) => (id) => {
      return state.cart.some(p => p._id === id);
    },
    isAuth() {
      return !!useAuthStore().getAuth.token
    }
  }
})