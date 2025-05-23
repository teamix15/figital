<template>
  <div class="relative flex justify-center">
    <div class="absolute inset-0 bg-black/60 z-0">
      <img
        src="/home-view-main.svg"
        alt="Dictionary background"
        class="object-cover w-full h-full mix-blend-overlay"
      />
    </div>

    <div class="flex-grow max-w-7xl flex flex-col dvh-content">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center z-10 px-6 py-12"
      >
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
              v-model="searchQuery"
              class="bg-white rounded-full pl-4 pr-10 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-[#fc4994]"
              @keyup.enter="handleSearch"
            />
            <SearchIcon
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
              @click="handleSearch"
            />
          </div>
        </div>
      </div>

      <DotsLoader class="flex items-center justify-center h-full" :is-loading="isLoading" />

      <DictionaryWithWords v-if="!isLoading && words.length" />

      <EmptyDictionary v-if="!isLoading && !words.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDictionaryStore } from '@/stores/dictionaryStore'
import { computed, onMounted, ref } from 'vue'
import DictionaryWithWords from './components/DictionaryWithWords.vue'
import DotsLoader from '@/components/DotsLoader.vue'
import EmptyDictionary from './components/EmptyDictionary.vue'
import { COMMON_PAGE_SIZE } from '@/shared/constants/common'
import SearchIcon from '@/components/icons/SearchIcon.vue'

const dictionaryStore = useDictionaryStore()

const searchQuery = ref('')
const words = computed(() => dictionaryStore.words)
const isLoading = computed(() => dictionaryStore.isLoading)

const handleSearch = async () => {
  await dictionaryStore.fetchAllWords({
    limit: COMMON_PAGE_SIZE,
    filter: searchQuery.value.trim(),
  })
}

onMounted(() => {
  dictionaryStore.fetchAllWords({ limit: COMMON_PAGE_SIZE })
})
</script>
