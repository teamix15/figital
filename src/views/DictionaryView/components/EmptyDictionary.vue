<template>
  <div class="relative dvh-content">
    <div class="px-6 py-12 text-white">
      <h1 class="text-6xl font-bold mb-4">DICTIONARY</h1>
      <div class="flex justify-between items-center mb-16">
        <div class="bg-white text-[#282828] rounded-full px-4 py-2 text-sm">
          The word of the day - {{ wordOfTheDay }}
        </div>

        <div class="flex items-center">
          <div class="relative">
            <input
              type="text"
              placeholder="SEARCH"
              class="bg-white text-[#282828] rounded-full pl-4 pr-10 py-2 w-40 focus:outline-none"
            />
            <SearchIcon
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#282828]"
            />
          </div>
          <button class="bg-[#fc4994] text-white rounded-full p-2 ml-2">
            <FilterIcon class="w-4 h-4" />
          </button>
        </div>
      </div>

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
    <AddWordModal v-if="showAddWordModal" @close="closeAddWordModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddWordModal from './AddWordModal.vue'

const showAddWordModal = ref(false)

const openAddWordModal = () => {
  showAddWordModal.value = true
}

const closeAddWordModal = () => {
  showAddWordModal.value = false
}

const wordOfTheDay = ref('word')

</script>
