<template>
  <AccountWorkingLayout :unitNumber="unit">
    <div class="flex-1 bg-white pt-[58px]">
      <h1 class="text-2xl font-bold mb-8">1. EXERCISE FILL IN THE GAPS</h1>
      <GapsItem
        v-for="(sentence, index) in sentences"
        :key="index"
        :sentence="sentence"
        :step-number="index + 1"
        :check-result="checkResultsData[index]"
        :show-results="showResults"
        @update-answers="handleAnswersUpdate"
        @completed="handleStepCompleted"
      />

      <div class="flex gap-2 mt-8 mb-8">
        <CommonButton
          label="Check Result"
          @click="checkResults"
          class="h-[40px]"
          :disabled="isChecking || showResults || !allStepsCompleted"
        />
        <CommonButton
          label="Next"
          @click="handleNext"
          class="h-[40px]"
          :disabled="!showResults || isLoading"
        />
      </div>

      <DotsLoader v-if="isLoading || isChecking" />
    </div>
  </AccountWorkingLayout>
</template>

<script setup lang="ts">
import AccountWorkingLayout from '@/layouts/AccountWorkingLayout.vue'
import { useGapsStore } from '@/stores/gapsStore'
import { computed, onBeforeMount, ref, watch } from 'vue'
import GapsItem from './components/GapsItem.vue'
import DotsLoader from '@/components/DotsLoader.vue'
import { WebHookService } from '@/services/webHookService'
import CommonButton from '@/components/CommonButton.vue'
import type { WebhookResultItem } from '@/shared/interfaces/entities'

const props = defineProps<{ unit: number }>()

const gapsStore = useGapsStore()
const isLoading = computed(() => gapsStore.isLoading)
const sentences = computed(() => gapsStore.sentences)
const webhookUrl = computed(() => gapsStore.webhookUrl)

const answers = ref<string[][]>([])
const completedSteps = ref<number[]>([])
const isChecking = ref(false)
const checkResultsData = ref<WebhookResultItem[][]>([])
const showResults = ref(false)

onBeforeMount(() => {
  gapsStore.fetchSentences({ unit: props.unit, count: 5 })
})

const handleAnswersUpdate = (payload: string[], index: number) => {
  answers.value[index] = payload
}

const handleStepCompleted = (index: number) => {
  if (!completedSteps.value.includes(index)) {
    completedSteps.value.push(index)
  }
}

const allStepsCompleted = computed(() => {
  return completedSteps.value.length === sentences.value.length
})

const checkResults = async () => {
  if (!webhookUrl.value) {
    return
  }

  const parts = webhookUrl.value.split('/')
  const webhookId = parts[parts?.length - 1]

  try {
    isChecking.value = true
    const response = await WebHookService.getResult({ id: webhookId }, { answers: answers.value })
    checkResultsData.value = response.data
    showResults.value = true
    console.log('Results:', response.data)
  } catch (error) {
    console.error('Error checking results:', error)
  } finally {
    isChecking.value = false
  }
}

const handleNext = async () => {
  await gapsStore.fetchSentences({ unit: props.unit, count: 1 })
}

watch(sentences, () => {
  answers.value = sentences.value.map(() => [])
  completedSteps.value = []
  checkResultsData.value = []
  showResults.value = false
})
</script>
