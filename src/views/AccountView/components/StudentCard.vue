<template>
  <div
    class="rounded-full flex items-center mb-4 pr-2 bg-[#ADCB6D] hover:bg-[#9CBB5D] transition-colors"
    @click="$emit('click')"
  >
    <div class="flex items-center gap-4">
      <Avatar class="h-16 w-16 rounded-full border-4 border-white">
        <img src="/base-avatar.svg" alt="Student avatar" width="64" height="64" />
      </Avatar>
      <span class="text-white text-xl font-medium"
        >{{ userStatistic?.user?.firstname }} {{ userStatistic?.user?.surname }}</span
      >
    </div>

    <div class="flex-1 flex justify-center gap-4 mx-4">
      <button
        v-for="unit in uniqueUnits"
        :key="unit"
        class="bg-white text-black rounded-full px-8 py-2 font-medium"
      >
        Unit {{ unit }}
      </button>
      <p v-if="uniqueUnits.length === 0" class="text-white text-xl font-medium">
        No units completed
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserStatisticItem } from '@/shared/interfaces/entities'

const props = defineProps<{
  userStatistic: UserStatisticItem
}>()

import { computed } from 'vue'

const uniqueUnits = computed(() => {
  if (!props.userStatistic?.stat?.length) return []

  const units = new Set(props.userStatistic.stat.map((item) => item.unit))
  return Array.from(units)
})
</script>
