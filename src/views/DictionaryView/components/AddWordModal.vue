<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      @click.self="closeModal"
    >
      <transition name="scale" appear>
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Add a new word</h2>

            <form @submit.prevent="handleSubmit">
              <div class="mb-6">
                <label for="english" class="block text-gray-700 font-medium mb-3"> English: </label>
                <input
                  id="english"
                  v-model="form.english"
                  type="text"
                  required
                  placeholder="Enter English word"
                  class="w-full px-4 py-3 border border-gray-200 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30"
                />
              </div>

              <div class="mb-6">
                <label for="russian" class="block text-gray-700 font-medium mb-3"> Russian: </label>
                <input
                  id="russian"
                  v-model="form.russian"
                  type="text"
                  required
                  placeholder="Enter Russian translation"
                  class="w-full px-4 py-3 border border-gray-200 rounded-[40px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30"
                />
              </div>

              <div v-if="error" class="mb-6 text-red-500 text-sm">
                {{ error }}
              </div>

              <div class="flex justify-end space-x-4 mt-8">
                <CommonButton
                  type="button"
                  label="Cancel"
                  variant="ghost"
                  @click="closeModal"
                  class="w-1/2"
                />
                <CommonButton
                  type="submit"
                  :label="isLoading ? 'Adding...' : 'Add Word'"
                  class="w-1/2"
                />
              </div>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDictionaryStore } from '@/stores/dictionaryStore'
import CommonButton from '@/components/CommonButton.vue'

interface FormData {
  english: string
  russian: string
}

const emit = defineEmits(['close', 'fetch-words'])

const dictionaryStore = useDictionaryStore()
const isOpen = ref(true)
const isLoading = ref(false)
const error = ref<string | null>(null)

const form = ref<FormData>({
  english: '',
  russian: '',
})

const closeModal = () => {
  isOpen.value = false
  setTimeout(() => emit('close'), 300)
}

const handleSubmit = async () => {
  error.value = null
  isLoading.value = true

  try {
    dictionaryStore.addWord(form.value)
    emit('fetch-words')
    closeModal()
  } catch (err) {
    error.value = dictionaryStore.error || 'Failed to add word'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
