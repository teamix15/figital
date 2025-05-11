import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import { ENDPOINTS } from '../constants/endpoints'
import { AuthService } from '@/services/authService'
import { useUiStore } from '@/stores/ui'
import { handleApiError, DEFAULT_ERROR_MESSAGE } from './get-error-message'

interface RequestConfig extends AxiosRequestConfig {
  _retry?: boolean
  handle400?: boolean
  withoutToken?: boolean
}

interface CustomAxiosInstance extends AxiosInstance {
  <T>(config: RequestConfig): Promise<AxiosResponse<T>>
}

const api: CustomAxiosInstance = axios.create({
  baseURL: 'http://figital.mehrubon.ru/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig & RequestConfig) => {
    const accessToken = localStorage.getItem('access')

    if (accessToken && !config.withoutToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalConfig = error.config as RequestConfig
    const refreshToken = localStorage.getItem('refresh')
    const isCorsError = error.code === 'ERR_NETWORK' && originalConfig?.url !== ENDPOINTS.AUTH.LOGIN

    const uiStore = useUiStore()

    const retryRefreshToken = async (): Promise<unknown> => {
      if (!originalConfig._retry) {
        try {
          originalConfig._retry = true

          if (!refreshToken) {
            localStorage.clear()
            return
          }

          const response = await AuthService.refresh({
            refresh_token: refreshToken,
          })

          localStorage.setItem('access', response.data.access_token)

          return api.request(originalConfig)
        } catch (err) {
          localStorage.clear()
          return Promise.reject(err)
        }
      }

      return Promise.reject(error)
    }

    if (
      !originalConfig?.url?.includes(ENDPOINTS.AUTH.LOGIN) &&
      !originalConfig?.url?.includes(ENDPOINTS.AUTH.REFRESH) &&
      (isCorsError || error.response?.status === 401)
    ) {
      return retryRefreshToken()
    }

    const status = error.response?.status ?? 0
    const code = (error.response?.data as { code: string })?.code

    if (
      status >= 400 &&
      status < 500 &&
      (originalConfig?.handle400 === undefined || originalConfig?.handle400)
    ) {
      const errorMessages = handleApiError(error)

      if (code === 'token_not_valid') {
        uiStore.setNotification({
          type: 'warning',
          message: 'Session expired',
          description: 'Please log in again',
        })
      } else {
        uiStore.setNotification({
          type: 'warning',
          message: 'Something went wrong',
          description: errorMessages.join('\n') || DEFAULT_ERROR_MESSAGE,
        })
      }
    }

    if (status >= 500) {
      uiStore.setNotification({
        type: 'error',
        message: 'Server error',
        description: handleApiError(error).join('\n') || 'Please try again later',
      })
    }

    return Promise.reject(error)
  },
)

export default api
