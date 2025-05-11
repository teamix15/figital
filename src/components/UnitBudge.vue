<template>
  <div
    className="text-white text-xs px-3 py-1 rounded-full"
    :style="{ backgroundColor: `var(--color-unit-${unit})` }"
  >
    UNIT {{ unit }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  unit: Number,
})
</script>
