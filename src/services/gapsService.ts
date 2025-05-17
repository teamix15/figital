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

  static async uploadGapsFile(unit: number, file: File): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return api({
      method: 'post',
      url: ENDPOINTS.UPLOAD_GAPS(unit),
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async downloadGapsFile(unit: number): Promise<void> {
    const response = await api({
      method: 'get',
      url: ENDPOINTS.DOWNLOAD_GAPS_FILE(unit),
      responseType: 'blob',
    });
    const blob = response.data as Blob;
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `gaps_unit_${unit}.xlsx`); // или другой формат
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }
}
