<template>
  <main class="flex-1 bg-white">
    <div class="mb-8">
      <h3 class="font-bold mb-4">STEP {{ stepNumber }}: TEST</h3>
      <p class="mb-4">
        <template v-for="(part, index) in parts" :key="index">
          {{ part }}
          <template v-if="index < parts.length - 1">
            <CommonButton
              v-if="selectedAnswers[index]"
              :label="selectedAnswers[index]!"
              @click="deselectAnswer(index)"
              :class="[
                'h-[12px] inline-flex mx-1',
                {
                  'border-2 border-green-500': showResults && isAnswerCorrect(index),
                  'border-2 border-red-500': showResults && !isAnswerCorrect(index),
                },
              ]"
            />
            <span v-else class="inline-flex mx-1 text-gray-500"> {{ index + 1 }}. ___ </span>
            <span v-if="showResults && !isAnswerCorrect(index)" class="text-sm text-red-500">
              (Correct: {{ sentence.answers[index] }})
            </span>
          </template>
        </template>
      </p>

      <div class="flex gap-2 flex-wrap mb-4">
        <CommonButton
          v-for="answer in shuffledAnswers"
          :key="answer"
          :label="answer"
          @click="selectAnswer(answer)"
          class="h-[12px]"
        />
      </div>

      <CommonButton
        v-if="allAnswersFilled && !showResults"
        label="Check Answers"
        @click="showResults = true"
        class="h-[12px]"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
import type { GapsItem } from '@/shared/interfaces/entities'
import { ref, watch, computed } from 'vue'

const props = defineProps<{ sentence: GapsItem; stepNumber: number }>()

const parts = computed(() => props.sentence.text.split('*'))
const gapsCount = computed(() => parts.value.length - 1)

const shuffledAnswers = ref<string[]>([])
const selectedAnswers = ref<(string | null)[]>([])
const showResults = ref(false)

const emit = defineEmits(['update-stats'])

const allAnswersFilled = computed(() => selectedAnswers.value.every((answer) => answer !== null))

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5)
}

const isAnswerCorrect = (index: number) => {
  return selectedAnswers.value[index] === props.sentence.answers[index]
}

const selectAnswer = (answer: string) => {
  if (showResults.value) return

  const emptySlotIndex = selectedAnswers.value.findIndex((a) => a === null)
  if (emptySlotIndex !== -1) {
    shuffledAnswers.value = shuffledAnswers.value.filter((a) => a !== answer)
    selectedAnswers.value[emptySlotIndex] = answer
  }
}

const deselectAnswer = (index: number) => {
  if (showResults.value) return

  const answer = selectedAnswers.value[index]
  if (answer) {
    shuffledAnswers.value = [...shuffledAnswers.value, answer]
    selectedAnswers.value[index] = null
  }
}

watch(
  () => props.sentence,
  (newSentence) => {
    shuffledAnswers.value = shuffleArray(newSentence.answers)
    selectedAnswers.value = Array(gapsCount.value).fill(null)
    showResults.value = false
  },
  { immediate: true, deep: true },
)

watch(showResults, (newVal) => {
  if (newVal) {
    const correct = selectedAnswers.value.filter(
      (answer, index) => answer === props.sentence.answers[index],
    ).length
    const incorrect = gapsCount.value - correct
    emit('update-stats', { correct, incorrect }, props.stepNumber - 1)
  }
})
</script>
