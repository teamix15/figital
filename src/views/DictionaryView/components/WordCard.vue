<template>
  <div class="bg-white rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow">
    <div class="mb-4">
      <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">English</h3>
      <p class="text-xl font-bold text-blue-600 truncate">{{ word.english }}</p>
    </div>
    <div>
      <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Russian</h3>
      <p class="text-xl font-medium text-gray-800 truncate">{{ word.russian }}</p>
    </div>

    <div class="mt-6 flex justify-end space-x-2">
      <button
        @click="deleteWord(word._id)"
        class="p-2 text-gray-500 hover:text-accent transition-colors cursor-pointer h-[36px]"
        title="Delete"
      >
        <TrashIcon v-if="!isDeleteWordLoading"/>

        <DotsLoader v-if="isDeleteWordLoading" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TrashIcon from '@/components/icons/TrashIcon.vue'
import DotsLoader from '@/components/DotsLoader.vue'
import { DictionaryService } from '@/services/dictionaryService'
import { useDictionaryStore } from '@/stores/dictionaryStore'
import { toast } from 'vue3-toastify'
import { ref } from 'vue'
import type { DictionaryWord } from '@/shared/interfaces/entities'

const { word } = defineProps<{ word: DictionaryWord }>()

const dictionaryStore = useDictionaryStore()

const isDeleteWordLoading = ref(false)

// TODO: delete from store
const deleteWord = async (id: string) => {
  try {
    isDeleteWordLoading.value = true
    await DictionaryService.deleteWord({ combinationId: id })
    // await dictionaryStore.fetchAllWords()
  } catch (error) {
    toast.error('Error deleting word')
  } finally {
    isDeleteWordLoading.value = false
  }
}
</script>
