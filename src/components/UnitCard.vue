<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      class="rounded-3xl p-6 text-white relative cursor-pointer z-20 hover-effect"
      :style="{ backgroundColor: `var(--color-unit-${unitNumber})` }"
    >
      <h3 class="text-xl font-medium">YOUR LEVEL</h3>
      <h2 class="text-6xl font-bold mt-4">UNIT {{ unitNumber }}</h2>
      <div class="absolute bottom-6 right-6">
        <div class="bg-white rounded-full p-2">
          <ArrowRightIcon size="24" :style="{ color: `var(--color-unit-${unitNumber})` }" />
        </div>
      </div>
    </div>

    <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
      <RouterLink :to="{ name: ROUTE_NAMES.WRITING, params: { unit: unitNumber } }">
        <SkillCard title="Writing" :unitNumber="unitNumber" backgroundColor="#7BB0EC" />
      </RouterLink>

      <SkillCard title="Reading" :unitNumber="unitNumber" backgroundColor="#446942" />

      <SkillCard title="Listening" :unitNumber="unitNumber" backgroundColor="#F29C47" />

      <RouterLink :to="{ name: ROUTE_NAMES.GAMES, params: { unit: unitNumber } }">
        <SkillCard title="Games" :unitNumber="unitNumber" hideProgress backgroundColor="#FC4994" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from '@/router'
import SkillCard from '@/components/SkillCard.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue';

defineProps({
  unitNumber: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 1 && value <= 12,
  },
})
</script>
