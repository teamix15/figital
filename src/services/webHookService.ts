import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { GapsResponse } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class WebHookService {
  static async getResult(
    params: { id: string },
    data: { answers: string[][] },
  ): Promise<AxiosResponse<GapsResponse>> {
    return api({
      method: 'get',
      url: ENDPOINTS.WEBHOOK(params.id),
      data,
    })
  }
}
