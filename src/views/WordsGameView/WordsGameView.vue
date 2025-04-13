<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 class="text-3xl font-bold text-center mb-8">Word Game</h1>

      <div class="flex justify-between mb-6">
        <div class="text-lg font-medium">
          Unit: <span class="font-bold">{{ currentUnit }}</span>
        </div>
        <div class="text-lg font-medium">
          Words: <span class="font-bold">{{ words.length }}/{{ wordsCount }}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="border-2 rounded-lg p-4 h-32 flex items-center justify-center cursor-pointer transition-all"
          :class="{
            'border-gray-300': !card.revealed && !card.matched,
            'border-blue-500': card.revealed && !card.matched,
            'border-green-500': card.matched,
            'bg-gray-50': !card.revealed && !card.matched,
            'bg-blue-50': card.revealed && !card.matched,
            'bg-green-50': card.matched,
          }"
          @click="flipCard(index)"
        >
          <div v-if="card.revealed || card.matched" class="text-center">
            <p class="font-bold text-xl">
              {{ card.type === 'english' ? card.word.english : card.word.russian }}
            </p>
            <p class="text-sm text-gray-600">
              {{ card.type === 'english' ? 'English' : 'Russian' }}
            </p>
          </div>
          <div v-else class="text-gray-400">
            <p class="text-center">?</p>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <CommonButton @click="resetGame" variant="ghost" label="Reset" />
        <CommonButton @click="nextUnit" label="Next pairs" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useWordsStore } from '@/stores/wordsStore'
import type { DictionaryWord } from '@/shared/interfaces/entities'
import { toast } from 'vue3-toastify'
import CommonButton from '@/components/CommonButton.vue'

interface GameCard {
  word: DictionaryWord
  type: 'english' | 'russian'
  revealed: boolean
  matched: boolean
}

const wordsStore = useWordsStore()

const cards = ref<GameCard[]>([])
const flippedCards = ref<number[]>([])
const matchedPairs = ref<number>(0)

const words = computed<DictionaryWord[]>(() => wordsStore.words)
const currentUnit = computed<number>(() => wordsStore.currentUnit)
const wordsCount = computed<number>(() => wordsStore.wordsCount)

const fetchWords = async (): Promise<void> => {
  await wordsStore.fetchWords()
  setupGame()
}

const setupGame = (): void => {
  const wordPairs: Omit<GameCard, 'revealed' | 'matched'>[] = []
  words.value.forEach((word: DictionaryWord) => {
    wordPairs.push({ word, type: 'english' })
    wordPairs.push({ word, type: 'russian' })
  })

  cards.value = shuffleArray(wordPairs).map((card) => ({
    ...card,
    revealed: false,
    matched: false,
  }))

  flippedCards.value = []
  matchedPairs.value = 0
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const flipCard = (index: number): void => {
  const card = cards.value[index]

  if (card.revealed || flippedCards.value.length === 2 || card.matched) return

  card.revealed = true
  flippedCards.value.push(index)

  if (flippedCards.value.length === 2) {
    const [firstIndex, secondIndex] = flippedCards.value
    const firstCard = cards.value[firstIndex]
    const secondCard = cards.value[secondIndex]

    if (firstCard.word === secondCard.word) {
      firstCard.matched = true
      secondCard.matched = true
      matchedPairs.value++
      flippedCards.value = []

      if (matchedPairs.value === words.value.length) {
        toast.success('Congratulations! You matched all pairs!')
      }
    } else {
      setTimeout(() => {
        firstCard.revealed = false
        secondCard.revealed = false
        flippedCards.value = []
      }, 1000)
    }
  }
}

const resetGame = (): void => {
  setupGame()
}

const nextUnit = (): void => {
  fetchWords()
}

onMounted((): void => {
  fetchWords()
})
</script>
