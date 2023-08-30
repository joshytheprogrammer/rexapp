import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({ 
    notification: {
      type: null, // success, warning, error, neutral
      message: null
    }
  }),
  actions: {
    setNotification(notification) {
      this.notification.type = notification.type
      this.notification.message = notification.message

      setTimeout(() => {
        this.clearNotification()
      }, 3000)
    },
    clearNotification() {
      this.notification.type = null
      this.notification.message = null
    }
  },
  getters: {
    getNotification(state) {
      return state.notification
    }
  }
})