import { defineStore } from 'pinia'
import { DictionaryService } from '@/services/dictionaryService'
import type { DictionaryWord, DictionaryWordWithoutId } from '@/shared/interfaces/entities'

interface DictionaryState {
  words: DictionaryWord[]
  isLoading: boolean
  error: string | null
}

export const useDictionaryStore = defineStore('dictionary', {
  state: (): DictionaryState => ({
    words: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getWordById: (state) => (id: string) => {
      return state.words.find((word) => word._id === id)
    },
    sortedWords: (state) => {
      return [...state.words].sort((a, b) => a.english.localeCompare(b.english))
    },
  },

  actions: {
    async fetchAllWords() {
      this.isLoading = true
      this.error = null
      try {
        const response = await DictionaryService.getAllDictionaryWords()
        this.words = response.data.combinations || []
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch words'
        console.error('Error fetching words:', error)
      } finally {
        this.isLoading = false
      }
    },

    async addWord(word: Omit<DictionaryWordWithoutId, 'id'>) {
      this.isLoading = true
      try {
        const response = await DictionaryService.addWord(word)
        //TODO: make work with store
        // if (response.data) {
        //   this.words.push(response.data)
        //   return response.data
        // }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to add word'
        console.error('Error adding word:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async deleteWord(wordId: string) {
      this.isLoading = true
      try {
        await DictionaryService.deleteWord({ combinationId: wordId })
        this.words = this.words.filter((word) => word._id !== wordId)
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to delete word'
        console.error('Error deleting word:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    clearError() {
      this.error = null
    },
  },
})
