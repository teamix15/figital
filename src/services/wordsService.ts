import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { DictionaryWord } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class WordsService {
  static async fetchWords({
    unit,
    count,
  }: {
    unit: number
    count: number
  }): Promise<AxiosResponse<{ words: DictionaryWord[] }>> {
    return api({
      method: 'get',
      url: ENDPOINTS.WORDS(count, unit),
    })
  }
}
