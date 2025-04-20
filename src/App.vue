<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, onBeforeMount } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const userData = computed(() => userStore.userData)

onBeforeMount(() => {
  if (!userData.value) {
    userStore.getUserData()
  }
})
</script>
