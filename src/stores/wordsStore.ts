import { defineStore } from 'pinia'
import { WordsService } from '@/services/wordsService'
import type { DictionaryWord } from '@/shared/interfaces/entities'

interface WordsState {
  words: DictionaryWord[]
  isLoading: boolean
  error: string | null
  currentUnit: number
  wordsCount: number
}

export const useWordsStore = defineStore('words', {
  state: (): WordsState => ({
    words: [],
    isLoading: false,
    error: null,
    currentUnit: 1,
    wordsCount: 4,
  }),

  getters: {
    getWordsByUnit: (state) => state.words,
    hasWords: (state) => state.words.length > 0,
  },

  actions: {
    async fetchWords() {
      this.isLoading = true
      this.error = null
      try {
        const response = await WordsService.fetchWords({
          unit: this.currentUnit,
          count: this.wordsCount,
        })
        this.words = response.data.words
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch words'
        console.error('Error fetching words:', err)
      } finally {
        this.isLoading = false
      }
    },

    setUnit(unit: number) {
      this.currentUnit = unit
    },

    setWordsCount(count: number) {
      this.wordsCount = count
    },

    clearWords() {
      this.words = []
    },
  },
})
