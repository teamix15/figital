<template>
  <main class="max-w-6xl mx-auto p-12">
    <div v-if="currentTask" class="flex flex-col items-center gap-8">
      <div class="grid grid-cols-2 gap-8 w-full">
        <div
          v-for="(option, index) in currentTask.options.slice(0, 2)"
          :key="option"
          class="rounded-3xl flex items-center justify-center h-64 hover-effect"
          :class="{
            'bg-[#c7ceff]': selectedIndex === null,
            'bg-green-500': selectedIndex === index && result && result.isCorrect,
            'bg-red-500': selectedIndex === index && result && !result.isCorrect,
            'opacity-50 pointer-events-none': loading,
          }"
          @click="checkResults(index)"
        >
          <p class="text-[#282828] text-2xl font-medium">{{ option }}</p>
        </div>
      </div>
      <div class="flex justify-center w-full my-8">
        <h2 class="text-[#282828] text-5xl font-bold text-center w-full">
          {{ currentTask.russian }}
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-8 w-full">
        <div
          v-for="(option, index) in currentTask.options.slice(2)"
          :key="option"
          class="rounded-3xl flex items-center justify-center h-64 hover-effect"
          :class="{
            'bg-[#c7ceff]': selectedIndex === null,
            'bg-green-500': selectedIndex === index + 2 && result && result.isCorrect,
            'bg-red-500': selectedIndex === index + 2 && result && !result.isCorrect,
            'opacity-50 pointer-events-none': loading,
          }"
          @click="checkResults(index + 2)"
        >
          <p class="text-[#282828] text-2xl font-medium">{{ option }}</p>
        </div>
      </div>
    </div>
    <DotsLoader v-else-if="loading" />
    <DotsLoader v-else />
  </main>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { toast } from 'vue3-toastify'
import type { FetchWordsResponse, WebhookResultItem } from '@/shared/interfaces/entities'
import { WebHookService } from '@/services/webHookService'
import { WordsService } from '@/services/wordsService'
import DotsLoader from '@/components/DotsLoader.vue'

const props = defineProps<{ unit: number }>()

const currentTask = ref<FetchWordsResponse | null>(null)
const selectedIndex = ref<number | null>(null)
const result = ref<WebhookResultItem | null>(null)
const loading = ref(false)

const fetchTask = async () => {
  loading.value = true
  selectedIndex.value = null
  result.value = null
  try {
    const response = await WordsService.fetchWords(props.unit)
    currentTask.value = response.data
  } catch {
    toast.error('Error loading task')
    currentTask.value = null
  } finally {
    loading.value = false
  }
}

const checkResults = async (index: number) => {
  if (!currentTask.value?.webhookUrl) {
    return
  }

  selectedIndex.value = index

  const parts = currentTask.value.webhookUrl.split('/')
  const webhookId = parts[parts?.length - 1]

  try {
    const response = await WebHookService.getResult(
      { id: webhookId },
      { answers: [[currentTask.value.options[index]]] },
    )

    result.value = response.data.result[0][0]

    if (result.value && result.value.isCorrect) {
      toast.success('Correct!')
      setTimeout(() => {
        fetchTask()
        selectedIndex.value = null
      }, 1000)
    } else if (result.value) {
      toast.error(`Incorrect! Correct answer: ${result.value.rightAnswer}`)
      setTimeout(() => {
        fetchTask()
        selectedIndex.value = null
      }, 1500)
    }
  } catch (error) {
    console.error('Error checking results:', error)
  }
}

onBeforeMount(() => {
  fetchTask()
})
</script>
