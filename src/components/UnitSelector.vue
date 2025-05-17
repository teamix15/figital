<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="rounded-full px-6 py-2 font-medium flex items-center hover-effect"
      :style="{ backgroundColor: color, color: textColor }"
    >
      <span>{{ selectedUnit ? `UNIT ${selectedUnit}` : title }}</span>
      <svg
        class="w-5 h-5 ml-1 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute z-10 mt-1 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col gap-2 p-2 min-w-[150px]"
      >
        <button
          v-for="unit in units"
          :key="unit"
          @click="selectUnit(unit)"
          class="flex items-center justify-between py-2 px-4 rounded-full w-full font-medium text-sm transition-colors"
          :class="[unit === selectedUnit ? 'bg-[#7bb0ec] text-white' : 'hover:bg-gray-100']"
        >
          UNIT {{ unit }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  title?: string
  color?: string
  textColor?: string
  units?: number[]
  modelValue?: number | null
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Select',
  color: '#7bb0ec',
  textColor: 'white',
  units: () => Array.from({ length: 12 }, (_, i) => i + 1),
  modelValue: null,
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectedUnit = computed({
  get: () => props.modelValue,
  set: (value: number | null) => emit('update:modelValue', value),
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectUnit = (unit: number) => {
  selectedUnit.value = unit
  isOpen.value = false
}
</script>
