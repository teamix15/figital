import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { DictionaryWord, GetAllDictionaryWordsResponse } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class DictionaryService {
  static async addWord(data: DictionaryWord) {
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

  static async getAllDictionaryWords(): Promise<AxiosResponse<GetAllDictionaryWordsResponse>> {
    return api({
      method: 'get',
      url: ENDPOINTS.DICTIONARY,
    })
  }
}
