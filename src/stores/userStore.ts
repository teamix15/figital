import { AuthService } from '@/services/authService'
import type {
  LoginRequestParams,
  RegistrationRequestParams,
  UserData,
} from '@/shared/interfaces/entities'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router, { PATHS } from '@/router'
import api from '@/shared/utils/api'

export const useUserStore = defineStore('user', () => {
  const error = ref<string | null>(null)
  const isLoading = ref(false)
  const accessToken = ref<string | null>(localStorage.getItem('access'))
  const refreshToken = ref<string | null>(localStorage.getItem('refresh'))
  const tokenExpiry = ref<number | null>(Number(localStorage.getItem('token_expiry')))
  const userData = ref<UserData | null>(null)

  const isAuthenticated = computed(() => {
    return !!accessToken.value && (tokenExpiry.value ?? 0) > Date.now()
  })

  const setAuthData = (data: { access_token: string; refresh_token?: string }) => {
    accessToken.value = data.access_token
    refreshToken.value = data.refresh_token ?? null

    tokenExpiry.value = Date.now() + 14400000 // 4h

    localStorage.setItem('access', data.access_token)
    if (data.refresh_token) {
      localStorage.setItem('refresh', data.refresh_token)
    }
    localStorage.setItem('token_expiry', tokenExpiry.value.toString())
  }

  const clearAuthData = () => {
    accessToken.value = null
    refreshToken.value = null
    tokenExpiry.value = null

    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('token_expiry')

    router.push(PATHS.LOGIN)
  }

  const refreshAccessToken = async (): Promise<string> => {
    try {
      if (!refreshToken.value) throw new Error('No refresh token available')

      isLoading.value = true
      error.value = null

      const response = await AuthService.refresh({
        refresh_token: refreshToken.value,
      })

      setAuthData(response.data)
      return response.data.access_token
    } catch (err) {
      clearAuthData()
      error.value = err instanceof Error ? err.message : 'Failed to refresh token'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const loginUser = async (params: LoginRequestParams): Promise<void> => {
    try {
      isLoading.value = true
      error.value = null

      const response = await AuthService.login(params)
      setAuthData(response.data)

      router.push('/')
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const registerUser = async (params: RegistrationRequestParams): Promise<void> => {
    try {
      isLoading.value = true
      error.value = null

      await AuthService.register(params)

      const { email, password } = params
      await loginUser({ email, password })
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const getUserData = async (): Promise<void> => {
    try {
      isLoading.value = true
      error.value = null

      const response = await AuthService.getUserData()
      userData.value = response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to get userData'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const logoutUser = (): void => {
    clearAuthData()
    router.push('/sign-in')
  }

  const initializeAuth = async (): Promise<void> => {
    if (accessToken.value && tokenExpiry.value && tokenExpiry.value < Date.now()) {
      try {
        await refreshAccessToken()
      } catch {
        clearAuthData()
      }
    }
  }

  const setupAxiosInterceptor = () => {
    api.interceptors.request.use(async (config) => {
      if (
        accessToken.value &&
        tokenExpiry.value &&
        tokenExpiry.value - Date.now() < 5 * 60 * 1000
      ) {
        try {
          const newToken = await refreshAccessToken()
          config.headers.Authorization = `Bearer ${newToken}`
        } catch (error) {
          clearAuthData()
          throw error
        }
      } else if (accessToken.value) {
        config.headers.Authorization = `Bearer ${accessToken.value}`
      }
      return config
    })

    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          !originalRequest.url.includes('auth/refresh')
        ) {
          originalRequest._retry = true

          try {
            const newToken = await refreshAccessToken()
            originalRequest.headers.Authorization = `Bearer ${newToken}`
            return api(originalRequest)
          } catch (refreshError) {
            clearAuthData()
            return Promise.reject(refreshError)
          }
        }

        return Promise.reject(error)
      },
    )
  }

  return {
    error,
    isLoading,
    isAuthenticated,
    accessToken,
    userData,
    loginUser,
    registerUser,
    logoutUser,
    refreshAccessToken,
    initializeAuth,
    setupAxiosInterceptor,
    getUserData,
  }
})
