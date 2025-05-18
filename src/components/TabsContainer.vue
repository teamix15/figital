<template>
  <div>
    <div class="flex gap-4 border-b border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="px-4 py-2 font-medium cursor-pointer"
        :class="{
          'text-primary border-b-2 border-primary': modelValue === tab.id,
          'text-gray-500 hover:text-gray-700': modelValue !== tab.id,
        }"
        @click="$emit('update:modelValue', tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="mt-4">
      <transition name="tab-transition" mode="out-in">
        <slot :name="modelValue" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  tabs: {
    type: Array as () => Array<{ id: string; label: string }>,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.tab-transition-enter-active,
.tab-transition-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tab-transition-enter-from,
.tab-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.tab-transition-enter-to,
.tab-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
