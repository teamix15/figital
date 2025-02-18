<template>
  <div
    class="flex flex-col w-full sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px]"
  >
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
