import { defineStore } from 'pinia'
import { useNotificationStore } from './notification'
import { useAuthStore } from './auth';

export const useCartStore = defineStore('cart', {
  state: () => ({
    showingQuickCart: false,
    cart: useCookie('cart').value || [],
    summary: {
      subtotal: {
        min: 0,
        max: 0
      },
      taxes: {
        min: 0,
        max: 0
      },
      total: {
        min: 0,
        max: 0
      }
    }
  }),
  actions: {
    toggleQuickCart(type) {
      this.showingQuickCart = type !== undefined ? type : !this.showingQuickCart;
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
      setCookie('cart').value = [...this.cart];

      // If user is authenticated, sync cart with server
      if(this.isAuth){this.syncCart();}
    },
    clearCart() {
      this.cart = [];
      useCookie('cart').value = this.cart;

      // If user is authenticated, sync cart with server
      if(this.isAuth){this.syncCart();}
    },
    updateQuantity(partId, newQuantity) {
      const notification = useNotificationStore();

      // Find the item in the cart by partId
      const cartItem = this.cart.find(item => item.partId === partId);

      if (!cartItem) {
        notification.setNotification({
          type: 'error',
          message: 'Item not found in cart',
        });
        return;
      }

      // Validate and update the quantity
      if (newQuantity <= 0) {
        notification.setNotification({
          type: 'error',
          message: 'Quantity must be greater than zero',
        });
        return;
      }

      // Update the quantity of the cart item
      cartItem.quantity = newQuantity;

      // If user is authenticated, sync cart with server
      if (this.isAuth) {
        this.syncCart();
      }

      // Update the cart in cookies or local storage
      useCookie('cart').value = this.cart;
    },
    async calcSummary() {
      // Pass the cart array and return subtotal
      const { data } = await useFetch('/guest/calculateSubtotal', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        body: JSON.stringify({ cart: this.cart })
      });

      this.summary.subtotal.min = data.value.minSubtotal
      this.summary.subtotal.max = data.value.maxSubtotal
      
      this.summary.taxes.min = ((7.5/100) * this.summary.subtotal.min)
      this.summary.taxes.max = ((7.5/100) * this.summary.subtotal.max)

      this.summary.total.min = this.summary.subtotal.min + this.summary.taxes.min
      this.summary.total.max = this.summary.subtotal.max + this.summary.taxes.max
    },
    clearSummary() {
      this.summary = {
        subtotal: 0,
        taxes: 0,
        total: 0
      }
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

      this.calcSummary()
    },
    async initializeCartFromServer() {
      const { data, error } = await useFetch('/cart/', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          authorization: useAuthStore().getAuth.token,
        },
      });

      const cartData = data.value.cart;

      const mergedCart = [...this.cart];

      // Iterate through each item in the received cartData
      for (const itemFromServer of cartData) {
        const existingItem = mergedCart.find(item => item.partId === itemFromServer.partId);

        if (existingItem) {
          existingItem.quantity += itemFromServer.quantity;
        } else {
          mergedCart.push(itemFromServer);
        }
      }

      this.cart = mergedCart;

      await this.syncCart();
    },
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
      return !!useAuthStore().getAuth.token;
    },
    isShowingQCart() {
      return this.showingQuickCart;
    },
    getSummary() {
      return this.summary
    }

  }
})