<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black/50"
      @click.self="emit('click')"
    >
      <div @click.stop>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, onUnmounted } from 'vue'

interface Props {
  isOpen: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'click'): void
}>()

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
