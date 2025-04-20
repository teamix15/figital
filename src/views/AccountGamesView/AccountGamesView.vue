<template>
  <AccountWorkingLayout>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RouterLink :to="{ name: ROUTE_NAMES.FOUR_CARD_WORDS_GAME, params: { unit } }">
        <UnitGamePrctiseCard title="Four cards words game" :unit="unit" />
      </RouterLink>

      <RouterLink :to="{ name: ROUTE_NAMES.WORDS_GAME, params: { unit } }">
        <UnitGamePrctiseCard title="Six cards words game" :unit="unit" />
      </RouterLink>
    </div>
  </AccountWorkingLayout>
</template>

<script setup lang="ts">
import UnitGamePrctiseCard from '@/components/UnitGamePrcticeCard.vue'
import AccountWorkingLayout from '@/layouts/AccountWorkingLayout.vue'
import { ROUTE_NAMES } from '@/router'

defineProps<{ unit: number }>()
</script>
