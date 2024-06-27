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
      this.calcSummary();
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
      this.calcSummary();
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
      this.calcSummary()
    },
    clearSummary() {
      this.summary = {
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
    },
    async checkout() {
      const notification = useNotificationStore();

      if(this.getCartNo <= 0){return;}

      const { data, error } = await useFetch('/cart/checkout', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          Authorization: 'Bearer ' + useAuthStore().getAuth.token,
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

      if(!data.value){return;}

      this.clearCart();
      await this.syncCart();
      await this.calcSummary();

      notification.setNotification({
        type: 'success',
        message: data.value.message,
      });

      navigateTo('/account/my?page=orders')
    },
    async calcSummary() {
      if(this.getCartNo === 0){this.clearSummary(); return;}
      // Pass the cart array and return subtotal
      const { data } = await useFetch('/guest/calculateSubtotal', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        body: JSON.stringify({ cart: this.cart })
      });

      if(!data.value){this.clearSummary(); return;}

      this.summary.subtotal.min = data.value.minSubtotal
      this.summary.subtotal.max = data.value.maxSubtotal
      
      this.summary.taxes.min = ((7.5/100) * this.summary.subtotal.min)
      this.summary.taxes.max = ((7.5/100) * this.summary.subtotal.max)

      this.summary.total.min = this.summary.subtotal.min + this.summary.taxes.min
      this.summary.total.max = this.summary.subtotal.max + this.summary.taxes.max
    },
    async syncCart() {
      const notification = useNotificationStore();

      const { error } = await useFetch('/cart/sync', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          Authorization: 'Bearer ' + useAuthStore().getAuth.token,
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
    },
    async initializeCartFromServer() {
      const { data, error } = await useFetch('/cart/', {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          Authorization: 'Bearer ' + useAuthStore().getAuth.token,
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