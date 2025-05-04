<template>
  <AccountWorkingLayout :unitNumber="unit">
    <main class="flex-1 bg-white pt-[58px]">
      <h1 class="text-2xl font-bold mb-8">1. EXERCISE FILL IN THE GAPS</h1>
      <GapsItem
        v-for="(sentence, index) in sentences"
        :key="index"
        :sentence="sentence"
        :step-number="index + 1"
        @update-stats="handleStatsUpdate"
      />

      <div v-if="showStatistics" class="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 class="text-xl font-bold mb-4">Exercise Results</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-green-600">✓ Correct: {{ totalCorrect }}</div>
          <div class="text-red-600">✗ Incorrect: {{ totalIncorrect }}</div>
        </div>
        <div class="mt-4">Success rate: {{ successRate }}%</div>
      </div>
    </main>
  </AccountWorkingLayout>
</template>

<script setup lang="ts">
import AccountWorkingLayout from '@/layouts/AccountWorkingLayout.vue'
import { useGapsStore } from '@/stores/gapsStore'
import { computed, onBeforeMount, ref, watch } from 'vue'
import GapsItem from './components/GapsItem.vue'

const props = defineProps<{ unit: number }>()

const gapsStore = useGapsStore()
const sentences = computed(() => gapsStore.sentences)

onBeforeMount(() => {
  gapsStore.fetchSentences({ unit: props.unit, count: 5 })
})

const stats = ref<Record<number, { correct: number; incorrect: number }>>({})
const showStatistics = ref(false)

const handleStatsUpdate = (payload: { correct: number; incorrect: number }, index: number) => {
  stats.value[index] = payload
  checkCompletion()
}

const checkCompletion = () => {
  showStatistics.value = Object.keys(stats.value).length === sentences.value.length
}

const totalCorrect = computed(() =>
  Object.values(stats.value).reduce((sum, item) => sum + item.correct, 0),
)

const totalIncorrect = computed(() =>
  Object.values(stats.value).reduce((sum, item) => sum + item.incorrect, 0),
)

const successRate = computed(() => {
  const total = totalCorrect.value + totalIncorrect.value
  return total > 0 ? Math.round((totalCorrect.value / total) * 100) : 0
})

watch(sentences, (newVal) => {
  stats.value = {}
  showStatistics.value = false
})
</script>
