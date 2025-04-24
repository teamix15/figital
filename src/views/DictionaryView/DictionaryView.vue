<template>
  <main class="flex-grow relative min-h-screen">
    <div class="absolute inset-0 bg-black/60 z-0">
      <img
        src="@/shared/assets/home-view-main.svg"
        alt="Dictionary background"
        class="object-cover w-full h-full mix-blend-overlay"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-12">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 class="text-white text-5xl font-bold mb-4">DICTIONARY</h2>
            <div class="inline-block bg-white rounded-full px-4 py-2 text-sm">
              The word of the day - word
            </div>
          </div>
          <div class="mt-4 md:mt-0 flex items-center">
            <div class="relative">
              <input
                type="text"
                placeholder="SEARCH"
                class="bg-white rounded-full pl-4 pr-10 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-[#fc4994]"
              />
              <SearchIcon class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>
            <button class="ml-2 bg-[#fc4994] p-2 rounded-full">
              <FilterIcon class="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <button
            @click="openAddWordModal"
            class="bg-[#fc4994] text-white rounded-xl p-6 flex items-center justify-center gap-2 hover:bg-[#e34184] hover-effect"
          >
            <span class="font-medium">ADD A WORD</span>
          </button>

          <div
            v-for="word in words"
            :key="word._id"
            class="bg-white rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
          >
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
  </main>
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
    toast.success('Word deleted successfully')
  } catch (error) {
    toast.error('Error deleting word')
  }
}

onBeforeMount(() => {
  dictionaryStore.fetchAllWords()
})
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
