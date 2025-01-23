<template>
  <AppHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '/src/components/AppHeader.vue'
</script>
