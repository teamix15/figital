import type { USER_ROLES } from '../enums/common'

export interface ErrorResponse {
  message: string[]
  error: string
  statusCode: number
}

export interface RegistrationRequestParams {
  firstname: string
  surname: string
  password: string
  email: string
}

export interface LoginRequestParams {
  email: string
  password: string
}

// Dictionary
export interface DictionaryWord {
  _id: string
  english: string
  russian: string
}

export interface DictionaryWordWithoutId {
  english: string
  russian: string
}

export interface GetAllDictionaryWordsResponse {
  _id: string
  userId: string
  __v: number
  data: DictionaryWord[]
}

// User
export interface UserData {
  sub: string
  email: string
  surname: string
  firstname: string
  role: keyof typeof USER_ROLES
  iat: number
  exp: number
}

// Gaps
export interface GapsResponse {
  sentences: GapsItem[]
}

export interface GapsItem {
  text: string
  answers: string[]
}
