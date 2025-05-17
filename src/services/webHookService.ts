import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { WebhookResultItem } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class WebHookService {
  static async getResult(
    params: { id: string },
    data: { answers: string[][] },
  ): Promise<AxiosResponse<WebhookResultItem[][]>> {
    return api({
      method: 'post',
      url: ENDPOINTS.WEBHOOK(params.id),
      data,
    })
  }
}
