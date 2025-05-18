<template>
  <div class="px-8 py-4 overflow-y-auto max-h-200px">
    <StudentCard
      v-for="userStatistic in allUsersStatistics"
      :key="userStatistic.user._id"
      :userStatistic="userStatistic"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useStatisticsStore } from '@/stores/statisticsStore'
import StudentCard from './StudentCard.vue'

const statisticStore = useStatisticsStore()

const allUsersStatistics = computed(() => statisticStore.allUsersStatistics)

onBeforeMount(() => statisticStore.fetchAllUsersStatistics())
</script>
