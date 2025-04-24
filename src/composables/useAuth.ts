import { ref, onMounted, onUnmounted } from 'vue'

export function useAuth() {
  const isAuthorized = ref(false)

  const checkAuth = () => {
    const access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    isAuthorized.value = Boolean(access && refresh)
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'access' || event.key === 'refresh') {
      checkAuth()
    }
  }

  onMounted(() => {
    checkAuth()
    window.addEventListener('storage', handleStorageChange)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', handleStorageChange)
  })

  return { isAuthorized }
}
