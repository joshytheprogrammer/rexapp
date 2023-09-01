import { defineStore } from 'pinia'
import { useNotificationStore } from './notification'

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    auth: !!useCookie('user'),
    showingQuickCart: false,
    cart: useCookie('cart').value || [],
  }),
  actions: {
    toggleQuickCart() {
      this.showingQuickCart = !this.showingQuickCart
    },
    addItem(product) {
      const notification = useNotificationStore();
    
      const cartItemExists = this.cart.some(item => item._id === product._id);
    
      if (cartItemExists) {
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
    }
  },
  getters: {
    getCartItems() {
      return this.cart
    },
    getCartNo() {
      return this.cart.length
    },
    itemInCart: (state) => (id) => {
      return state.cart.some(p => p._id === id)
    },
  }
})