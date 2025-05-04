import { GapsService } from '@/services/gapsService'
import type { GapsItem } from '@/shared/interfaces/entities'
import { defineStore } from 'pinia'

interface GapsState {
  sentences: GapsItem[]
  isLoading: boolean
  error: string | null
}

export const useGapsStore = defineStore('gaps', {
  state: (): GapsState => ({
    sentences: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getSentences: (state) => () => state.sentences,
  },

  actions: {
    async fetchSentences(params: { count: number; unit: number }) {
      this.isLoading = true
      this.error = null
      try {
        const response = await GapsService.getGaps(params)
        this.sentences = response.data.sentences || []
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch gaps sentences'
      } finally {
        this.isLoading = false
      }
    },
  },
})
