<template>
  <div class="flex items-center justify-center gap-1">
    <button
      class="px-3 py-1 rounded-md cursor-pointer bg-primary border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 min-w-[2.5rem]"
      :class="{ 'opacity-50 cursor-default': currentPage === 1 }"
      @click="handlePageChange(currentPage - 1)"
    >
      <
    </button>

    <template v-for="page in totalPages" :key="page">
      <button
        v-if="typeof page === 'number'"
        class="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 min-w-[2.5rem]"
        :class="{
          'bg-accent text-white shadow-md': page === currentPage,
          'bg-primary shadow-md cursor-pointer': page !== currentPage,
          'hover:bg-gray-200': page !== currentPage,
        }"
        @click="handlePageChange(page)"
      >
        {{ page }}
      </button>
      <span v-else class="px-2 text-gray-500">•</span>
    </template>

    <button
      class="px-3 py-1 rounded-md cursor-pointer bg-primary border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 min-w-[2.5rem]"
      :class="{ 'opacity-50 cursor-default': currentPage === totalPages }"
      @click="handlePageChange(currentPage + 1)"
    >
      >
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    validator: (value: number) => value > 0,
  },
  totalPages: {
    type: Number,
    required: true,
    validator: (value: number) => value > 0,
  },
})

const emit = defineEmits(['page-change'])

const handlePageChange = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return
  emit('page-change', page)
}
</script>
