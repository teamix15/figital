<template>
  <main class="max-w-6xl mx-auto p-12">
    <div class="flex flex-col items-center gap-8">
      <!-- Верхний ряд английских слов -->
      <div class="grid grid-cols-2 gap-8 w-full">
        <div
          v-for="(option, index) in options.slice(0, 2)"
          :key="'top-' + index"
          class="rounded-3xl flex items-center justify-center h-64 cursor-pointer transition-colors duration-300"
          :class="{
            'bg-[#c7ceff]': !option.revealed,
            'bg-green-500':
              (option.revealed && option.isCorrect) || (showCorrect && option.isCorrect),
            'bg-red-500': option.revealed && !option.isCorrect,
          }"
          @click="selectOption(index)"
        >
          <p class="text-[#282828] text-2xl font-medium">{{ option.english }}</p>
        </div>
      </div>

      <!-- Центральное русское слово -->
      <div class="text-center my-8">
        <h2 class="text-[#282828] text-5xl font-bold">{{ currentWord?.russian }}</h2>
      </div>

      <!-- Нижний ряд английских слов -->
      <div class="grid grid-cols-2 gap-8 w-full">
        <div
          v-for="(option, index) in options.slice(2, 4)"
          :key="'bottom-' + index"
          class="rounded-3xl flex items-center justify-center h-64 cursor-pointer transition-colors duration-300"
          :class="{
            'bg-[#c7ceff]': !option.revealed,
            'bg-green-500':
              (option.revealed && option.isCorrect) || (showCorrect && option.isCorrect),
            'bg-red-500': option.revealed && !option.isCorrect,
          }"
          @click="selectOption(index + 2)"
        >
          <p class="text-[#282828] text-2xl font-medium">{{ option.english }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useWordsStore } from '@/stores/wordsStore'
import { toast } from 'vue3-toastify'
import { DictionaryService } from '@/services/dictionaryService'
import type { DictionaryWord, DictionaryWordWithoutId } from '@/shared/interfaces/entities'

const wordsStore = useWordsStore()
const props = defineProps({
  unit: Number,
})

interface GameOption {
  english: string
  isCorrect: boolean
  revealed: boolean
}

const currentWord = ref<DictionaryWord | null>(null)
const options = ref<GameOption[]>([])
const selectedIndex = ref<number | null>(null)
const showCorrect = ref(false)

const setupRound = () => {
  if (wordsStore.words.length < 4) return

  const randomIndex = Math.floor(Math.random() * wordsStore.words.length)
  currentWord.value = wordsStore.words[randomIndex]

  const wrongOptions = wordsStore.words
    .filter((word) => word.english !== currentWord.value?.english)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  options.value = [
    { english: currentWord.value.english, isCorrect: true, revealed: false },
    ...wrongOptions.map((word) => ({ english: word.english, isCorrect: false, revealed: false })),
  ].sort(() => 0.5 - Math.random())

  selectedIndex.value = null
  showCorrect.value = false
}

const selectOption = async (index: number) => {
  if (selectedIndex.value !== null) return

  selectedIndex.value = index
  options.value[index].revealed = true

  if (options.value[index].isCorrect) {
    setTimeout(() => {
      setupRound()
    }, 1000)
  } else {
    showCorrect.value = true
    toast.error(`Неверно! Правильный ответ: ${currentWord.value?.english}`)

    if (currentWord.value) {
      try {
        const wordToAdd: DictionaryWordWithoutId = {
          english: currentWord.value.english,
          russian: currentWord.value.russian,
        }
        await DictionaryService.addWord(wordToAdd)
      } catch (err) {
        console.error('Error adding word to dictionary:', err)
      }
    }

    setTimeout(() => {
      setupRound()
    }, 1500)
  }
}

onMounted(async () => {
  wordsStore.setUnit(props.unit)
  await wordsStore.fetchWords()
  setupRound()
})
</script>
