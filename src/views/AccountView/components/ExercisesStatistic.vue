<template>
  <div class="w-full mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6 text-gray-800" v-if="showTitle">Statistic</h2>

    <div v-if="stat && stat.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(stat, index) in stat"
        :key="index"
        class="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <div class="flex items-center gap-4 mb-4">
          <div :class="exerciseIconClass(stat.exercise)" class="p-3 rounded-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="stat.exercise === 'quiz'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12l4-4m0 0l4-4m-4 4l-4-4"
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
    
    <div v-else class="flex justify-center items-center h-40">
      <p class="text-xl text-gray-500">Statistics are currently empty</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StatisticsItem } from '@/shared/interfaces/entities'

const props = defineProps<{ 
  stat: StatisticsItem[],
  showTitle?: boolean
}>()

const showTitle = props.showTitle !== false

const exerciseIconClass = (exercise: string) => {
  return (
    {
      words: 'bg-blue-500',
      gaps: 'bg-green-500',
      quiz: 'bg-purple-500',
    }[exercise] || 'bg-gray-500'
  )
}

const progressBarClass = (exercise: string) => {
  return (
    {
      words: 'bg-blue-400',
      gaps: 'bg-green-400',
      quiz: 'bg-purple-400',
    }[exercise] || 'bg-gray-400'
  )
}

const progressTextClass = (exercise: string) => {
  return (
    {
      words: 'text-blue-600',
      gaps: 'text-green-600',
      quiz: 'text-purple-600',
    }[exercise] || 'text-gray-600'
  )
}
</script>
