import { ENDPOINTS } from '@/shared/constants/endpoints'
import type { GetQuizResponse } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class QuizService {
  static async getQuiz(params: {
    count: number
    unit: number
  }): Promise<AxiosResponse<GetQuizResponse>> {
    const { count, unit } = params
    return api({
      method: 'get',
      url: ENDPOINTS.QUIZ(count, unit),
    })
  }

  static async uploadQuizFile(unit: number, file: File): Promise<AxiosResponse> {
    const formData = new FormData()
    formData.append('file', file)

    return api({
      method: 'post',
      url: ENDPOINTS.QUIZ_UPLOAD(unit),
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  static async downloadQuizFile(unit: number): Promise<void> {
    const response = await api({
      method: 'get',
      url: ENDPOINTS.QUIZ_DOWNLOAD(unit),
      responseType: 'blob',
    })

    const blob = response.data as Blob
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `quiz_unit_${unit}.xlsx`)
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  }
}
