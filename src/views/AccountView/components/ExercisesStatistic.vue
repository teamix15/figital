<template>
  <div class="w-full mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Statistic</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(stat, index) in statistic"
        :key="index"
        class="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <div class="flex items-center gap-4 mb-4">
          <div :class="exerciseIconClass(stat.exercise)" class="p-3 rounded-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="stat.exercise === 'words'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
              <path
                v-if="stat.exercise === 'gaps'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-semibold capitalize text-gray-800">
              {{ stat.exercise }}
            </h3>
            <p class="text-sm text-gray-500">Unit {{ stat.unit }}</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Progress:</span>
            <span class="font-medium" :class="progressTextClass(stat.exercise)">
              {{ (stat.progress * 100).toFixed(1) }}%
            </span>
          </div>

          <div class="relative pt-1">
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                :class="progressBarClass(stat.exercise)"
                :style="{ width: `${stat.progress * 100}%` }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"
              ></div>
            </div>
          </div>

          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Completed:</span>
            <span class="font-medium text-gray-700"> {{ stat.completed }}/{{ stat.total }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStatisticsStore } from '@/stores/statisticsStore'
import { computed, onMounted } from 'vue'

const statisticsStore = useStatisticsStore()
const statistic = computed(() => statisticsStore.userStatistics)

const exerciseIconClass = (exercise: string) => {
  return (
    {
      words: 'bg-blue-500',
      gaps: 'bg-green-500',
    }[exercise] || 'bg-purple-500'
  )
}

const progressBarClass = (exercise: string) => {
  return (
    {
      words: 'bg-blue-400',
      gaps: 'bg-green-400',
    }[exercise] || 'bg-purple-400'
  )
}

const progressTextClass = (exercise: string) => {
  return (
    {
      words: 'text-blue-600',
      gaps: 'text-green-600',
    }[exercise] || 'text-purple-600'
  )
}

onMounted(() => {
  statisticsStore.fetchUserStatistics()
})
</script>
