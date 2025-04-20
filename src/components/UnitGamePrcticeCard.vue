<template>
  <div
    className="relative bg-[#8a8a8a] rounded-lg overflow-hidden h-[150px] cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
  >
    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-end flex-col p-4">
      <div
        className="text-white text-xs px-3 py-1 rounded-full"
        :style="{ backgroundColor: `var(--color-unit-${unit})` }"
      >
        UNIT {{ unit }}
      </div>
      <div className="text-white text-xs">{{ title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  unit: Number,
  title: String,
})
</script>
