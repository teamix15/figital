<template>
  <div class="relative">
    <div class="px-6 py-12 text-white">
      <h1 class="text-6xl font-bold mb-4">DICTIONARY</h1>
      <div class="flex items-center justify-between">
        <div class="flex flex-col items-start mb-16">
          <h2 class="text-6xl font-bold leading-tight">
            YOU DON'T HAVE<br />
            ANY WORDS<br />
            IN THE<br />
            DICTIONARY YET
          </h2>
        </div>

        <div class="flex justify-end">
          <button
            @click="openAddWordModal"
            class="bg-[#fc4994] text-white rounded-[20px] px-6 py-3 flex items-center justify-center gap-2 font-medium hover-effect w-[425px] h-[90px]"
          >
            ADD A WORD
            <PlusIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    <AddWordModal
      v-if="showAddWordModal"
      @close="closeAddWordModal"
      @fetch-words="handleFetchWords"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddWordModal from './AddWordModal.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import { useDictionaryStore } from '@/stores/dictionaryStore'
import { COMMON_PAGE_SIZE } from '@/shared/constants/common'

const dictionaryStore = useDictionaryStore()

const showAddWordModal = ref(false)

const handleFetchWords = async () => {
  await dictionaryStore.fetchAllWords({ limit: COMMON_PAGE_SIZE })
}

const openAddWordModal = () => {
  showAddWordModal.value = true
}

const closeAddWordModal = () => {
  showAddWordModal.value = false
}
</script>
