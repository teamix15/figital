import { defineStore } from 'pinia'
import type { StatisticsItem, UserStatisticItem } from '@/shared/interfaces/entities'
import type { AxiosResponse } from 'axios'
import { StatisticsService } from '@/services/statisticsService'

interface StatisticsState {
  userStatistics: StatisticsItem[]
  allUsersStatistics: UserStatisticItem[]
  isLoading: boolean
  error: string | null
}

export const useStatisticsStore = defineStore('statistics', {
  state: (): StatisticsState => ({
    userStatistics: [],
    allUsersStatistics: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getUserStatistics: (state) => state.userStatistics,

    getAllUsersStatistics: (state) => state.allUsersStatistics,

    getIsLoading: (state) => state.isLoading,

    getError: (state) => state.error,
  },

  actions: {
    async fetchUserStatistics() {
      this.isLoading = true
      this.error = null

      try {
        const response: AxiosResponse<StatisticsItem[]> =
          await StatisticsService.getUserStatistics()
        this.userStatistics = response.data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch user statistics'
        console.error('Error fetching user statistics:', error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchAllUsersStatistics() {
      this.isLoading = true
      this.error = null

      try {
        const response: AxiosResponse<UserStatisticItem[]> =
          await StatisticsService.getAllUsersStatistics()
        this.allUsersStatistics = response.data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch all users statistics'
        console.error('Error fetching all users statistics:', error)
      } finally {
        this.isLoading = false
      }
    },

    resetStatistics() {
      this.userStatistics = []
      this.allUsersStatistics = []
      this.error = null
      this.isLoading = false
    },
  },
})
