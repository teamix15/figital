import { AuthService } from '@/services/authService'
import type { LoginRequestParams, RegistrationRequestParams } from '@/shared/interfaces/entities'
import api from '@/shared/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const loginUser = async (params: LoginRequestParams) => {
    try {
      isLoading.value = true
      error.value = null

      const response = await AuthService.login(params)
      localStorage.setItem('access', response.data.access_token)
      localStorage.setItem('refresh', response.data.refresh_token)

      return response.data
    } catch (err: any) {
      error.value = err.response?.data
    } finally {
      isLoading.value = false
    }
  }

  const registerUser = async (params: RegistrationRequestParams) => {
    try {
      isLoading.value = true
      error.value = null

      const { email, password } = params

      await AuthService.register(params)

      const response = await AuthService.login({ email, password })
      localStorage.setItem('access', response.data.access_token)
      localStorage.setItem('refresh', response.data.refresh_token)

      return response.data
    } catch (err: any) {
      error.value = err.response?.data
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const getUserData = async () => {
    try {
      isLoading.value = true
      error.value = null

      await AuthService.register(params)

      const response = await AuthService.login({ email, password })
      localStorage.setItem('access', response.data.access_token)
      localStorage.setItem('refresh', response.data.refresh_token)

      return response.data
    } catch (err: any) {
      toast.error('Error')
      error.value = err.response?.data
      throw error
    } finally {
      isLoading.value = false
    }
  }

  return { user, error, isLoading, loginUser, registerUser }
})
