import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { StatisticsItem, UserStatisticItem } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class StatisticsService {
  static async getUserStatistics(): Promise<AxiosResponse<StatisticsItem[]>> {
    return api({
      method: 'get',
      url: ENDPOINTS.STATISTICS,
    })
  }

  static async getAllUsersStatistics(): Promise<AxiosResponse<UserStatisticItem[]>> {
    return api({
      method: 'get',
      url: ENDPOINTS.STATISTICS_ALL,
    })
  }
}
