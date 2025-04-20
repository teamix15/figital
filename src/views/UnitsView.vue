<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-15">
      <UnitCard v-for="unit in 12" :key="unit" :unitNumber="unit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UnitCard from '@/components/UnitCard.vue'
</script>
