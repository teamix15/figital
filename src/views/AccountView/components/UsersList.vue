<template>
  <div class="px-8 py-4 overflow-y-auto max-h-200px">
    <StudentCard
      v-for="userStatistic in allUsersStatistics"
      :key="userStatistic.user._id"
      :userStatistic="userStatistic"
      @click="selectUser(userStatistic)"
      class="cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useStatisticsStore } from '@/stores/statisticsStore'
import StudentCard from './StudentCard.vue'
import type { UserStatisticItem } from '@/shared/interfaces/entities'

const statisticStore = useStatisticsStore()

const allUsersStatistics = computed(() => statisticStore.allUsersStatistics)

const emit = defineEmits<{
  (e: 'select-user', user: UserStatisticItem): void
}>()

const selectUser = (user: UserStatisticItem) => {
  emit('select-user', user)
}

onBeforeMount(() => statisticStore.fetchAllUsersStatistics())
</script>