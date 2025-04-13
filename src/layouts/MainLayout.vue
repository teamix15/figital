<template>
  <div class="flex flex-col min-h-screen w-full">
    <AppHeader />

    <main class="flex-grow">
      <div class="min-h-[calc(100vh-headerHeight-footerHeight)]">
        <slot />
      </div>
    </main>

    <AppFooter class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
