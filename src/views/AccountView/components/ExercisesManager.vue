<template>
  <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div v-for="(types, category) in EXERCISE_TYPES" :key="category">
      <div v-for="exercise in types" :key="exercise" class="bg-white rounded-xl p-6 shadow-lg mb-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold capitalize">{{ exercise }}</h3>
          <div class="flex gap-4">
            <CommonSelector
              v-model="selectedUnits[category][exercise]"
              title="Select Unit"
              color="#7bb0ec"
              :units="availableUnits"
              class="flex-1"
            />
          </div>
        </div>

        <div class="flex gap-4 justify-end">
          <CommonButton
            label="Upload"
            :disabled="!selectedUnits[category][exercise]"
            @click="openUploadModal(category, exercise)"
            class="h-[40px] px-6"
          />
          <CommonButton
            label="Download"
            :disabled="!selectedUnits[category][exercise]"
            @click="handleDownload(category, exercise)"
            class="h-[40px]"
          />
        </div>
      </div>
    </div>

    <UploadModal
      v-if="showUploadModal"
      :exerciseType="currentExercise"
      :unit="currentUnit"
      @close="showUploadModal = false"
      @upload="handleFileUpload"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import CommonSelector from '@/components/CommonSelector.vue'
import CommonButton from '@/components/CommonButton.vue'
import UploadModal from '@/components/UploadModal.vue'
import { useExerciseStore } from '@/stores/exerciseStore'

const EXERCISE_TYPES = {
  games: ['words'],
  writing: ['gaps'],
}

const exerciseStore = useExerciseStore()
const availableUnits = Array.from({ length: 12 }, (_, i) => `UNIT ${i + 1}`)

const selectedUnits = reactive({
  games: { words: null },
  writing: { gaps: null },
})

const showUploadModal = ref(false)
const currentCategory = ref('')
const currentExercise = ref('')
const currentUnit = ref('')

const exerciseHandlers = {
  words: {
    upload: (file: File, unit: string) => exerciseStore.uploadWordsExercise(file, unit),
    download: (unit: string) => exerciseStore.downloadWordsExercise(unit),
  },
  gaps: {
    upload: (file: File, unit: string) => exerciseStore.uploadGapsExercise(file, unit),
    download: (unit: string) => exerciseStore.downloadGapsExercise(unit),
  },
}

const openUploadModal = (category: string, exercise: string) => {
  currentCategory.value = category
  currentExercise.value = exercise
  currentUnit.value = selectedUnits[category][exercise]
  showUploadModal.value = true
}

const handleDownload = async (category: string, exercise: string) => {
  const unit = selectedUnits[category][exercise]
  if (exerciseHandlers[exercise]?.download) {
    await exerciseHandlers[exercise].download(unit)
  }
}

const handleFileUpload = async (file: File) => {
  if (exerciseHandlers[currentExercise.value]?.upload) {
    await exerciseHandlers[currentExercise.value].upload(file, currentUnit.value)
  }
  showUploadModal.value = false
}
</script>
