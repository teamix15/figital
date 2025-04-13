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
  id?: string
  english: string
  russian: string
}

export interface GetAllDictionaryWordsResponse {
  _id: string
  userId: string
  __v: number
  combinations: DictionaryWord[]
}
