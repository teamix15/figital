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

  static async uploadWords(
    params: {
      unit: number
    },
    file: File,
  ): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return api({
      method: 'post',
      url: ENDPOINTS.WORDS_UPLOAD(params.unit),
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async downloadWords(params: { unit: number }): Promise<void> {
    const response = await api({
      method: 'get',
      url: ENDPOINTS.WORDS_DOWNLOAD(params.unit),
      responseType: 'blob',
    });
    const blob = response.data as Blob;
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `words_unit_${params.unit}.xlsx`); // или другой формат
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }
}
