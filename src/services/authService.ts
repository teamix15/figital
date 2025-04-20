import { ENDPOINTS } from '@/shared/constants/endpoints'
import type {
  LoginRequestParams,
  RegistrationRequestParams,
  UserData,
} from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import type { AxiosResponse } from 'axios'

export class AuthService {
  static async register(data: RegistrationRequestParams) {
    return api({
      method: 'post',
      url: ENDPOINTS.AUTH.REGISTER,
      data,
      withoutToken: true,
    })
  }

  static async login(data: LoginRequestParams): Promise<
    AxiosResponse<{
      access_token: string
      refresh_token: string
    }>
  > {
    return api({
      method: 'post',
      url: ENDPOINTS.AUTH.LOGIN,
      data,
      withoutToken: true,
    })
  }

  static async refresh(data: { refresh_token: string }): Promise<
    AxiosResponse<{
      access_token: string
    }>
  > {
    return api({
      method: 'post',
      url: ENDPOINTS.AUTH.REFRESH,
      data,
      withoutToken: true,
    })
  }

  static async getUserData(): Promise<AxiosResponse<UserData>> {
    return api({
      method: 'get',
      url: ENDPOINTS.AUTH.PROFILE,
      withoutToken: true,
    })
  }
}
