export const ENDPOINTS = {
  AUTH: {
    REGISTER: '/auth/signUp',
    LOGIN: '/auth/signIn',
    REFRESH: '/auth/refresh',
    CHANGE_PASSWORD: '/auth/changePassword',
    PROFILE: '/auth/profile',
  },
  DICTIONARY: '/dictionary',

  WORDS: (count: number, unit: number) => `/words/${count}/unit/${unit}`,

  GAPS: (count: number, unit: number) => `/api/v1/gaps/${count}/unit/${unit}`
}
