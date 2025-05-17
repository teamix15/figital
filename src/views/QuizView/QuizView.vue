<template>
  <AccountWorkingLayout :unitNumber="unit">
    <div class="mt-[58px]">
      <h2 class="text-xl font-bold mb-4">2. EXERCISE MULTIPLE CHOICE QUIZ</h2>
      <p class="uppercase font-medium mb-6">Choose the right variant</p>

      <div v-if="loading" class="flex justify-center">
        <DotsLoader />
      </div>

      <div v-else class="space-y-8">
        <div v-for="(question, index) in questions" :key="index" class="space-y-2">
          <p class="font-medium">{{ index + 1 }}. {{ question.text }}</p>
          <div class="flex flex-col space-y-2">
            <button
              v-for="(answer, answerIndex) in question.answers"
              :key="answerIndex"
              class="text-left px-6 py-3 rounded-[40px] cursor-pointer w-fit max-w-full transition-all"
              :class="[
                'bg-primary text-white',
                {
                  'opacity-50 cursor-not-allowed': isSelected(index, answer),
                  'hover:bg-primary-dark': !isSelected(index, answer),
                },
                getResultClasses(index, answer),
              ]"
              @click="handleSelectAnswer(index, answer)"
              :disabled="isSelected(index, answer) || showResults"
            >
              {{ String.fromCharCode(65 + answerIndex) }}. {{ answer }}
              <span v-if="showResults && isCorrectAnswer(index, answer)" class="ml-2">✓</span>
              <span v-if="showResults && isWrongAnswer(index, answer)" class="ml-2">✕</span>
            </button>
          </div>
        </div>
        <div class="flex gap-2 mt-8 mb-8">
          <CommonButton
            label="Check Result"
            @click="checkResults"
            class="h-[40px]"
            :disabled="isChecking || showResults || !allQuestionsAnswered"
          />
          <CommonButton
            label="Next"
            @click="handleNext"
            class="h-[40px]"
            :disabled="!showResults || isLoading"
          />
        </div>
      </div>
    </div>
  </AccountWorkingLayout>
</template>
<script setup lang="ts">
import DotsLoader from '@/components/DotsLoader.vue'
import AccountWorkingLayout from '@/layouts/AccountWorkingLayout.vue'
import { WebHookService } from '@/services/webHookService'
import CommonButton from '@/components/CommonButton.vue'
import type { WebhookResultItem } from '@/shared/interfaces/entities'
import { ref, onBeforeMount, computed, watch } from 'vue'
import { useQuizStore } from '@/stores/quizStore'

const quizStore = useQuizStore()
const isLoading = computed(() => quizStore.isLoading)
const questions = computed(() => quizStore.questions)
const webhookUrl = computed(() => quizStore.webhookUrl)

const selectedAnswers = ref<string[]>([])
const isChecking = ref(false)
const checkResultsData = ref<WebhookResultItem[][]>([])
const showResults = ref(false)
const loading = ref(false)

const props = defineProps({
  unit: {
    type: Number,
    required: true,
  },
})

const handleSelectAnswer = (questionIndex: number, answer: string) => {
  selectedAnswers.value[questionIndex] = answer
}

const allQuestionsAnswered = computed(() => {
  return (
    selectedAnswers.value.length === questions.value.length &&
    selectedAnswers.value.every((answer) => !!answer)
  )
})
const checkResults = async () => {
  if (!webhookUrl.value) return

  const parts = webhookUrl.value.split('/')
  const webhookId = parts[parts.length - 1]

  try {
    isChecking.value = true
    const answersArray = selectedAnswers.value.map((answer) => [answer])
    const response = await WebHookService.getResult({ id: webhookId }, { answers: answersArray })
    checkResultsData.value = response.data.result
    showResults.value = true
  } catch (error) {
    console.error('Error checking results:', error)
  } finally {
    isChecking.value = false
  }
}
const isSelected = (questionIndex: number, answer: string) => {
  return selectedAnswers.value[questionIndex] === answer
}

const getResultClasses = (questionIndex: number, answer: string) => {
  if (!showResults.value) return ''

  const result = checkResultsData.value[questionIndex]?.[0]
  const isCorrect = result?.rightAnswer === answer
  const isWrongSelected = isSelected(questionIndex, answer) && !result?.isCorrect

  return {
    'bg-green-600 text-white': isCorrect,
    'bg-red-600 text-white': isWrongSelected,
  }
}

const isCorrectAnswer = (questionIndex: number, answer: string) => {
  return checkResultsData.value[questionIndex]?.[0]?.rightAnswer === answer
}

const isWrongAnswer = (questionIndex: number, answer: string) => {
  return (
    selectedAnswers.value[questionIndex] === answer &&
    !checkResultsData.value[questionIndex]?.[0]?.isCorrect
  )
}

const handleNext = async () => {
  await quizStore.fetchQuestions({ unit: props.unit, count: 5 })
  resetState()
}

const resetState = () => {
  selectedAnswers.value = []
  checkResultsData.value = []
  showResults.value = false
}

onBeforeMount(() => {
  quizStore.fetchQuestions({ unit: props.unit, count: 5 })
})

watch(questions, () => {
  selectedAnswers.value = new Array(questions.value.length).fill('')
  checkResultsData.value = []
  showResults.value = false
})
</script>
