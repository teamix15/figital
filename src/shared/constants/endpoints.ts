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
  WORDS_UPLOAD: (unit: number) => `/words/upload/${unit}`,
  WORDS_DOWNLOAD: (unit: number) => `/words/download/${unit}`,

  GAPS: (count: number, unit: number) => `/gaps/${count}/unit/${unit}`,
  UPLOAD_GAPS: (unit: number) => `/gaps/upload/${unit}`,
  DOWNLOAD_GAPS_FILE: (unit: number) => `/gaps/download/${unit}`,
}
