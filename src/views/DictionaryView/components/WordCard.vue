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
        @click="openDeleteConfirmationModal"
        class="p-2 text-gray-500 hover:text-accent transition-colors cursor-pointer h-[36px]"
        title="Delete"
      >
        <TrashIcon v-if="!isDeleteWordLoading" />

        <DotsLoader v-if="isDeleteWordLoading" />
      </button>
    </div>
  </div>
  <DeleteConfirmationModal
    v-if="showDeleteConfirmationModal"
    @close="closeDeleteConfirmationModal"
    @confirm="handleDeleteConfirm"
  />
</template>

<script lang="ts" setup>
import TrashIcon from '@/components/icons/TrashIcon.vue'
import DotsLoader from '@/components/DotsLoader.vue'
import { DictionaryService } from '@/services/dictionaryService'
import { toast } from 'vue3-toastify'
import { ref } from 'vue'
import type { DictionaryWord } from '@/shared/interfaces/entities'
import DeleteConfirmationModal from './DeleteConfirmationModal.vue'

const { word } = defineProps<{ word: DictionaryWord }>()
const emit = defineEmits(['fetch-words'])

const isDeleteWordLoading = ref(false)
const showDeleteConfirmationModal = ref(false)

const openDeleteConfirmationModal = () => {
  showDeleteConfirmationModal.value = true
}

const closeDeleteConfirmationModal = () => {
  showDeleteConfirmationModal.value = false
}

const handleDeleteConfirm = () => {
  deleteWord(word._id)
  closeDeleteConfirmationModal()
}

const deleteWord = async (id: string) => {
  try {
    isDeleteWordLoading.value = true
    await DictionaryService.deleteWord({ combinationId: id })
    await emit('fetch-words')
  } catch {
    toast.error('Error deleting word')
  } finally {
    isDeleteWordLoading.value = false
  }
}
</script>
