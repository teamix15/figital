<template>
  <button
    class="flex items-center justify-center text-center uppercase h-14 rounded-[40px] p-4 hover-effect transition-all"
    :class="{
      'bg-gradient-to-r from-primary/90 to-primary/70 text-white shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:hover:scale-100 disabled:cursor-not-allowed':
        variant !== 'ghost',
      'bg-white border-2 border-primary text-primary shadow-sm hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.03] active:scale-[0.98] disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-white disabled:hover:text-gray-400 disabled:shadow-none disabled:hover:scale-100 disabled:cursor-not-allowed':
        variant === 'ghost',
    }"
    :disabled="disabled"
  >
    {{ label }}
    <span
      v-if="withArrow"
      class="ml-2 group-hover:translate-x-1 transition-transform duration-300"
      :class="{ 'opacity-50': disabled }"
    >
      →
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'ghost'
  withArrow?: boolean
  disabled?: boolean
}

defineProps<Props>()
</script>
