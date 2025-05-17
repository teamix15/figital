<template>
  <Teleport to="body">
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-100">
      <div class="bg-white rounded-xl p-8 w-full max-w-md" @click.stop>
        <h3 class="text-2xl font-bold mb-6 text-center">
          Upload for {{ exerciseType }} ({{ unit }})
        </h3>

        <div
          class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-colors"
          :class="{ 'border-blue-500 bg-blue-50': isDragging }"
          @dragover.prevent="handleDragOver"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="handleDrop"
          @click="fileInput?.click()"
        >
          <input ref="fileInput" type="file" class="hidden" @change="handleFileSelect" />

          <div class="space-y-4">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>

            <div class="text-gray-600">
              <p class="font-medium">Drag and drop files here</p>
              <p class="text-sm">or click to browse</p>
            </div>

            <p v-if="selectedFile" class="text-sm text-gray-500 truncate">
              Selected file: {{ selectedFile.name }}
            </p>
          </div>
        </div>

        <div class="mt-6 flex gap-4 justify-end">
          <CommonButton
            label="Cancel"
            @click="$emit('close')"
            class="bg-gray-500 hover:bg-gray-600"
          />
          <CommonButton
            label="Upload"
            :disabled="!selectedFile"
            @click="handleUpload"
            class="bg-[#7bb0ec] hover:bg-[#6a9ed6]"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonButton from '@/components/CommonButton.vue'

const props = defineProps({
  exerciseType: String,
  unit: String,
})

const emit = defineEmits(['close', 'upload'])

const isDragging = ref(false)
const selectedFile = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const handleDragOver = () => {
  isDragging.value = true
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  const files = e.dataTransfer?.files
  if (files?.length) {
    selectedFile.value = files[0]
  }
}

const handleFileSelect = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files?.length) {
    selectedFile.value = input.files[0]
  }
}

const handleUpload = () => {
  if (selectedFile.value) {
    emit('upload', selectedFile.value)
  }
}
</script>
