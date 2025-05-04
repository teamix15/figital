import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { GapsResponse } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class GapsService {
  static async getGaps(params: {
    count: number
    unit: number
  }): Promise<AxiosResponse<GapsResponse>> {
    const { count, unit } = params
    return api({
      method: 'get',
      url: ENDPOINTS.GAPS(count, unit),
    })
  }

  static async uploadGapsFile(unit: number, data: { file: File }): Promise<AxiosResponse> {
    return api({
      method: 'post',
      url: ENDPOINTS.UPLOAD_GAPS(unit),
      data,
    })
  }

  static async downloadGapsFile(unit: number): Promise<AxiosResponse<{ file: File }>> {
    return api({
      method: 'get',
      url: ENDPOINTS.DOWNLOAD_GAPS_FILE(unit),
    })
  }
}
