<template>
  <DotsLoader v-if="isLoading" />
  <slot v-if="!isLoading" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import DotsLoader from '@/components/DotsLoader.vue'
import router from '@/router'

const isLoading = ref<boolean>(true)

onBeforeMount(() => {
  const access = localStorage.getItem('access')
  const refresh = localStorage.getItem('refresh')

  if (!access || !refresh) {
    isLoading.value = false
    router.push(`/sign-up`)
  }
})
</script>
