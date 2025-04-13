<template>
  <div class="w-full p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">DICTIONARY</h1>

    <div class="bg-blue-50 p-8 mb-6 rounded-[40px]">
      <p class="text-sm font-semibold text-blue-600 mb-1">The word of the day</p>
      <p class="text-2xl font-bold text-gray-800">word</p>
    </div>

    <button
      class="gap-2 text-blue-600 font-medium mb-6 hover:text-blue-800 transition-colors cursor-pointer"
      @click="openAddWordModal"
    >
      <PlusIcon class="w-5 h-5" />
      <span>ADD A WORD +</span>
    </button>

    <div class="relative">
      <input
        type="text"
        placeholder="SEARCH"
        class="w-full p-3 pl-10 border border-gray-300 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <SearchIcon class="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
    </div>

    <div class="mx-auto px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="word in words"
          :key="word.english"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="p-6">
            <div class="mb-4">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">English</h3>
              <p class="text-xl font-bold text-blue-600">{{ word.english }}</p>
            </div>

            <div>
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Russian</h3>
              <p class="text-xl font-medium text-gray-800">{{ word.russian }}</p>
            </div>

            <div class="mt-6 flex justify-end space-x-2">
              <button
                @click="deleteWord(word._id)"
                class="p-2 text-gray-500 hover:text-accent transition-colors cursor-pointer"
                title="Delete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddWordModal v-if="showAddWordModal" @close="closeAddWordModal" />
  </div>
</template>

<script setup lang="ts">
import { DictionaryService } from '@/services/dictionaryService'
import { useDictionaryStore } from '@/stores/dictionaryStore'
import { computed, onBeforeMount, ref } from 'vue'
import { toast } from 'vue3-toastify'

import AddWordModal from './components/AddWordModal.vue'

const dictionaryStore = useDictionaryStore()

const words = computed(() => dictionaryStore.words)

const showAddWordModal = ref(false)

const openAddWordModal = () => {
  showAddWordModal.value = true
}

const closeAddWordModal = () => {
  showAddWordModal.value = false
}

const deleteWord = async (id: string) => {
  try {
    await DictionaryService.deleteWord({ combinationId: id })
    await dictionaryStore.fetchAllWords()
  } catch (error) {
    toast.error('Error deleting word')
  }
}

onBeforeMount(() => {
  dictionaryStore.fetchAllWords()
})
</script>
