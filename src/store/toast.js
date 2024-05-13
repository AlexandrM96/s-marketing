import {defineStore} from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    messages: [],
  }),
  actions: {
    flashMessage(message) {
      if (Array.isArray(message)) {
        this.messages = message
      } else {
        this.messages = [message]
      }
    },
  },
})
