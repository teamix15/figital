<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="rounded-full px-6 py-2 font-medium flex items-center hover-effect"
      :style="{ backgroundColor: color, color: textColor }"
    >
      <span>{{ title }}</span>
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
          disabled
          class="flex items-center justify-between bg-[#ececec] text-[#c0c0c0] py-2 px-4 rounded-full w-full font-medium text-sm"
        >
          {{ unit }}
          <img src="@/shared/assets/icons/lock.svg" alt="lock" class="h-4 w-4 text-[#c0c0c0]" />
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
  units?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Select',
  color: '#7bb0ec',
  textColor: 'white',
  units: () => [
    'UNIT 1',
    'UNIT 2',
    'UNIT 3',
    'UNIT 4',
    'UNIT 5',
    'UNIT 6',
    'UNIT 7',
    'UNIT 8',
    'UNIT 9',
    'UNIT 10',
    'UNIT 11',
    'UNIT 12',
  ],
})

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>
