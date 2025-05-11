<template>
  <slot />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useUiStore } from '@/stores/ui'
import { toast } from 'vue3-toastify'

const uiStore = useUiStore()

watch(
  () => uiStore.notification,
  (newNotification) => {
    if (!newNotification) return

    const options = {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    }

    switch (newNotification.type) {
      case 'success':
        toast.success(newNotification.message, options)
        break
      case 'error':
        toast.error(newNotification.description || newNotification.message, options)
        break
      case 'warning':
        toast.warn(newNotification.description || newNotification.message, options)
        break
      default:
        toast(newNotification.message, options)
    }

    uiStore.clearNotification()
  },
  { deep: true },
)
</script>
