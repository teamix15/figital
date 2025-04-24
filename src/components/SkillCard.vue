<template>
  <div class="rounded-3xl p-6 text-white relative hover-effect" :style="{ backgroundColor }">
    <div class="flex justify-between">
      <h3 class="text-2xl font-medium" v-if="!hideProgress">0/0</h3>
      <h3 class="text-2xl font-medium invisible" v-else>0/0</h3>
      <button class="bg-white rounded-full p-1">
        <!-- <Info size="16" :style="{ color: `var(--color-unit-${unitNumber})` }" /> -->
      </button>
    </div>
    <h2 class="text-2xl font-bold mt-4">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
// import Info from './icons/Info.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  unitNumber: {
    type: Number,
    required: true,
  },
  hideProgress: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
})
</script>
