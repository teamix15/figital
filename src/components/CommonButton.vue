<template>
  <button
    class="flex items-center justify-center text-center uppercase h-14 rounded-[40px] p-4 hover:cursor-pointer transition-all"
    :class="{
      'bg-primary text-[#111]': variant !== 'ghost',
      'bg-white border-[3px] border-primary text-[#111]': variant === 'ghost',
    }"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'ghost'
}

defineProps<Props>()
</script>
