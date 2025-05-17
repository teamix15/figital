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
      :unit="currentUnit !== null ? String(currentUnit) : undefined"
      @close="showUploadModal = false"
      @upload="handleFileUpload"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import CommonSelector from '@/components/UnitSelector.vue'
import CommonButton from '@/components/CommonButton.vue'
import UploadModal from '@/components/UploadModal.vue'
import { useExerciseStore } from '@/stores/exerciseStore'
import { toast } from 'vue3-toastify'

const EXERCISE_TYPES = {
  games: ['words'],
  writing: ['gaps'],
} as const

type Category = keyof typeof EXERCISE_TYPES
type Exercise = (typeof EXERCISE_TYPES)[Category][number]

const exerciseStore = useExerciseStore()
const availableUnits = Array.from({ length: 12 }, (_, i) => i + 1)

const selectedUnits: Record<Category, Record<string, number | null>> = reactive({
  games: { words: null },
  writing: { gaps: null },
})

const showUploadModal = ref(false)
const currentCategory = ref<Category | ''>('')
const currentExercise = ref<Exercise | ''>('')
const currentUnit = ref<number | null>(null)

const exerciseHandlers: Record<
  string,
  {
    upload: (file: File, unit: number) => Promise<void>
    download: (unit: number) => Promise<void>
  }
> = {
  words: {
    upload: (file: File, unit: number) => exerciseStore.uploadWordsExercise(file, unit),
    download: (unit: number) => exerciseStore.downloadWordsExercise(unit),
  },
  gaps: {
    upload: (file: File, unit: number) => exerciseStore.uploadGapsExercise(file, unit),
    download: (unit: number) => exerciseStore.downloadGapsExercise(unit),
  },
}

const openUploadModal = (category: Category, exercise: Exercise) => {
  currentCategory.value = category
  currentExercise.value = exercise
  currentUnit.value = selectedUnits[category][exercise]
  showUploadModal.value = true
}

const handleDownload = async (category: Category, exercise: Exercise) => {
  const unit = selectedUnits[category][exercise]
  if (unit) {
    await exerciseHandlers[exercise].download(unit)
  }
}

const handleFileUpload = async (file: File) => {
  if (currentUnit.value && currentExercise.value) {
    await exerciseHandlers[currentExercise.value].upload(file, currentUnit.value)
    if (currentExercise.value === 'words') {
      toast.success('Words file uploaded successfully!')
    } else if (currentExercise.value === 'gaps') {
      toast.success('Gaps file uploaded successfully!')
    }
  }
  showUploadModal.value = false
}
</script>
