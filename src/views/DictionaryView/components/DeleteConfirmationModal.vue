<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-100"
      @click.self="$emit('close')"
    >
      <div class="bg-white rounded-xl p-8 w-full max-w-md">
        <h3 class="text-2xl font-bold mb-6 text-center">Confirm Deletion</h3>
        <p class="text-center text-gray-600 mb-8">
          Are you sure you want to delete this word? This action cannot be undone.
        </p>
        <div class="flex gap-4 justify-center">
          <button
            @click="$emit('close')"
            class="px-6 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="$emit('confirm')"
            class="px-6 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineEmits(['close', 'confirm'])
</script> 