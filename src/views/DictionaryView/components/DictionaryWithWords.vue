<template>
  <div class="flex-grow relative">
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-12">
      <div class="flex flex-col gap-[16px]">
        <div class="flex flex-col gap-6 justify-between h-full">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <button
              @click="openAddWordModal"
              class="bg-accent text-white rounded-xl p-6 flex items-center justify-center gap-2 hover:bg-[#e34184] hover-effect"
            >
              <span class="font-medium">ADD A WORD</span>
              <PlusIcon class="w-5 h-5" />
            </button>

            <WordCard
              v-for="word in words"
              :key="word._id"
              :word="word"
              class="bg-white rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
              @fetch-words="handleWordDeleted"
            />
          </div>
        </div>
        <CommonPagination
          v-if="pagination && pagination.totalPages > 1"
          :current-page="pagination.page"
          :total-pages="pagination.totalPages"
          @page-change="handlePageChange"
        />
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
import { useDictionaryStore } from '@/stores/dictionaryStore'
import { computed, ref } from 'vue'
import AddWordModal from './AddWordModal.vue'
import WordCard from './WordCard.vue'
import CommonPagination from '@/components/CommonPagination.vue'
import { COMMON_PAGE_SIZE } from '@/shared/constants/common'
import PlusIcon from '@/components/icons/PlusIcon.vue'

const dictionaryStore = useDictionaryStore()

const words = computed(() => dictionaryStore.words)
const pagination = computed(() => dictionaryStore.pagination)

const showAddWordModal = ref(false)

const openAddWordModal = () => {
  showAddWordModal.value = true
}

const closeAddWordModal = () => {
  showAddWordModal.value = false
}

const handleFetchWords = () => {
  dictionaryStore.fetchAllWords({ page: pagination.value?.page, limit: COMMON_PAGE_SIZE })
}

const handleWordDeleted = () => {
  const currentPage = pagination.value?.page || 1
  if (words.value.length === 1 && currentPage > 1) {
    dictionaryStore.fetchAllWords({ page: currentPage - 1, limit: COMMON_PAGE_SIZE })
  } else {
    handleFetchWords()
  }
}

const handlePageChange = (page: number) => {
  dictionaryStore.fetchAllWords({ page, limit: COMMON_PAGE_SIZE })
}
</script>
