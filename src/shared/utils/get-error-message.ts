// error-handler.ts
import { AxiosError } from 'axios'

export type ErrorData = { [key: string]: string | ErrorData | string[] }

export const DEFAULT_ERROR_MESSAGE = 'An error occurred, please try again later'

export const NOT_HANDLED_ERROR_KEYS = ['detail', 'nonFieldError']

export const ERRORS_FIELDS_MAP: Record<string, { label: string }> = {
  /*
  email: { label: "Email" },
  password: { label: "Password" }
  */
}

const getKey = (key: string): string | null => {
  if (NOT_HANDLED_ERROR_KEYS.includes(key)) return null
  return ERRORS_FIELDS_MAP[key]?.label || key
}

const getErrorText = (key: string, error: string): string => {
  const resultKey = getKey(key)
  return resultKey ? `${resultKey}: ${error}` : error
}

export const getErrorMessages = (data: ErrorData): string[] => {
  return Object.entries(data).reduce<string[]>((result, [key, error]) => {
    if (typeof error === 'object' && !Array.isArray(error)) {
      return [...result, ...getErrorMessages(error)]
    }

    if (Array.isArray(error)) {
      return [...result, ...error.map((err) => getErrorText(key, err))]
    }

    return [...result, getErrorText(key, error)]
  }, [])
}

export const handleApiError = (error: unknown): string[] => {
  const axiosError = error as AxiosError<{
    message?: string | string[] | { [key: string]: any }
  }>

  if (!axiosError?.response?.data) {
    return [DEFAULT_ERROR_MESSAGE]
  }

  const responseData = axiosError.response.data

  if (responseData.message) {
    return extractMessages(responseData.message)
  }

  return [DEFAULT_ERROR_MESSAGE]
}

const extractMessages = (message: any): string[] => {
  if (typeof message === 'string') return [message]

  if (Array.isArray(message)) return message.map(String)

  if (typeof message === 'object') return [DEFAULT_ERROR_MESSAGE]
  return [DEFAULT_ERROR_MESSAGE]
}
