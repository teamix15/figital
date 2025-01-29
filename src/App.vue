<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '/src/components/AppHeader.vue'
import AppFooter from '/src/components/AppFooter.vue'
</script>
