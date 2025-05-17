import { defineStore } from 'pinia'
import { QuizService } from '@/services/quizService'
import { ref } from 'vue'
import type { QuizQuestion } from '@/shared/interfaces/entities'

export const useQuizStore = defineStore('quiz', () => {
  const isLoading = ref(false)
  const questions = ref<QuizQuestion[]>([])
  const webhookUrl = ref('')

  const fetchQuestions = async (params: { unit: number; count: number }) => {
    try {
      isLoading.value = true
      const response = await QuizService.getQuiz(params)
      questions.value = response.data.questions
      webhookUrl.value = response.data.webhookUrl
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    questions,
    webhookUrl,
    fetchQuestions,
  }
})
