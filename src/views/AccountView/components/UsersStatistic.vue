<template>
  <div class="w-full mx-auto p-4">
    <UsersList @select-user="openUserStatistics" />

    <ModalWindow :is-open="isModalOpen" @close="closeModal">
      <div class="bg-white rounded-xl p-6 w-full max-w-4xl min-w-[600px] min-h-[400px]">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">
            {{ selectedUser?.user.firstname }} {{ selectedUser?.user.surname }}'s Statistics
          </h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700 hover-effect">
            <CloseIcon />
          </button>
        </div>

        <ExercisesStatistic :stat="selectedUser?.stat" :show-title="false" v-if="selectedUser?.stat" />
      </div>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UsersList from './UsersList.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import type { UserStatisticItem } from '@/shared/interfaces/entities'
import ExercisesStatistic from './ExercisesStatistic.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

const selectedUser = ref<UserStatisticItem | null>(null)
const isModalOpen = ref(false)

console.log('selectedUser.value?.stat', selectedUser.value)

const openUserStatistics = (user: UserStatisticItem) => {
  selectedUser.value = user
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

// const exerciseIconClass = (exercise: string) => {
//   return (
//     {
//       words: 'bg-blue-500',
//       gaps: 'bg-green-500',
//       quiz: 'bg-purple-500',
//     }[exercise] || 'bg-gray-500'
//   )
// }

// const progressBarClass = (exercise: string) => {
//   return (
//     {
//       words: 'bg-blue-400',
//       gaps: 'bg-green-400',
//       quiz: 'bg-purple-400',
//     }[exercise] || 'bg-gray-400'
//   )
// }

// const progressTextClass = (exercise: string) => {
//   return (
//     {
//       words: 'text-blue-600',
//       gaps: 'text-green-600',
//       quiz: 'text-purple-600',
//     }[exercise] || 'text-gray-600'
//   )
// }
</script>
