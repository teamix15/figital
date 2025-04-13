import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

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

export default api
