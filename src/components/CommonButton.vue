<template>
  <button
    class="flex items-center justify-center text-center uppercase h-14 rounded-[40px] p-4 transition-all duration-300 transform group cursor-pointer"
    :class="{
      'bg-gradient-to-r from-primary/90 to-primary/70 text-white shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]':
        variant !== 'ghost',
      'bg-white border-2 border-primary text-primary shadow-sm hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.03] active:scale-[0.98]':
        variant === 'ghost',
    }"
  >
    {{ label }}
    <span
      v-if="variant !== 'ghost'"
      class="ml-2 group-hover:translate-x-1 transition-transform duration-300"
    >
      →
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'ghost'
}

defineProps<Props>()
</script>
