import { defineStore } from 'pinia'

interface Notification {
  type?: 'success' | 'error' | 'warning' | 'info'
  message?: string
  description?: string
}

export const useUiStore = defineStore('ui', {
  state: () => ({
    notification: null as Notification | null,
  }),
  actions: {
    setNotification(notification: Notification) {
      this.notification = notification
    },
    clearNotification() {
      this.notification = null
    },
  },
})
