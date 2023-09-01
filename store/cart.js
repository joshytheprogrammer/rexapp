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
    
      if (this.cart.some(item => item.partId === product.partId)) {
        notification.setNotification({
          type: 'error',
          message: 'Item already in cart',
        });
        return;
      }
    
      this.cart.push(product);
      useCookie('cart').value = this.cart;

      // If user is authenticated, sync cart with server
      if(this.isAuth){this.syncCart();}
    },
    removeItem(id) {
      const index = this.cart.findIndex(item => item.partId === id);

      if (index === -1) {
        return
      }

      this.cart.splice(index, 1);
      useCookie('cart').value = [...this.cart];

      // If user is authenticated, sync cart with server
      if(this.isAuth){this.syncCart();}
    },
    clearCart() {
      this.cart = [];
      useCookie('cart').value = this.cart;

      // If user is authenticated, sync cart with server
      if(this.isAuth){this.syncCart();}
    },
    async syncCart() {
      const notification = useNotificationStore();

      const { error } = await useFetch('/cart/sync-cart', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          authorization: useAuthStore().getAuth.token,
        },
        body: JSON.stringify({ cart: this.cart })
      });

      if (error.value) {
        const errorMessage = error.value.data?.message || "An error occurred wehn syncing your cart.";
      
        notification.setNotification({
          type: 'error',
          message: errorMessage,
        });
      
        return
      }

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
      return state.cart.some(p => p.partId === id);
    },
    isAuth() {
      return !!useAuthStore().getAuth.token
    }
  }
})