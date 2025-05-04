<template>
  <div class="relative flex justify-center">
    <div class="absolute inset-0 bg-black/60 z-0">
      <img
        src="@/shared/assets/home-view-main.svg"
        alt="Dictionary background"
        class="object-cover w-full h-full mix-blend-overlay"
      />
    </div>

    <div class="flex-grow max-w-7xl flex flex-col">
      <DotsLoader class="flex items-center justify-center dvh-content" :is-loading="isLoading" />

      <DictionaryWithWords v-if="!isLoading && words.length" />

      <EmptyDictionary v-if="!isLoading && !words.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDictionaryStore } from '@/stores/dictionaryStore'
import { computed, onBeforeMount } from 'vue'
import DictionaryWithWords from './components/DictionaryWithWords.vue'
import DotsLoader from '@/components/DotsLoader.vue'
import EmptyDictionary from './components/EmptyDictionary.vue'

const dictionaryStore = useDictionaryStore()

const words = computed(() => dictionaryStore.words)
const isLoading = computed(() => dictionaryStore.isLoading)

onBeforeMount(() => {
  dictionaryStore.fetchAllWords()
})
</script>
