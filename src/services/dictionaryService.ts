import { ENDPOINTS } from '@/shared/constants/endpoints'
import type {
  DictionaryWord,
  DictionaryWordWithoutId,
  GetAllDictionaryWordsParams,
  PaginatedResponse,
} from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class DictionaryService {
  static async addWord(data: DictionaryWordWithoutId): Promise<AxiosResponse> {
    return api({
      method: 'post',
      url: ENDPOINTS.DICTIONARY,
      data,
    })
  }

  static async deleteWord(data: { combinationId: string }) {
    return api({
      method: 'delete',
      url: ENDPOINTS.DICTIONARY,
      data,
    })
  }

  static async getAllDictionaryWords(
    params: GetAllDictionaryWordsParams,
  ): Promise<AxiosResponse<PaginatedResponse<DictionaryWord>>> {
    return api({
      method: 'get',
      url: ENDPOINTS.DICTIONARY,
      params,
    })
  }
}
