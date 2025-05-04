<template>
  <header class="header bg-primary p-[36px]">
    <div class="hidden md:flex justify-between items-center rounded w-full gap-2">
      <RouterLink to="/">
        <img src="@/shared/assets/logo.svg" class="h-[50px] w-[200px]" />
      </RouterLink>
      <div class="flex items-center gap-2 max-h-[32px]">
        <RouterLink to="/units">
          <div label="units" variant="ghost"></div>
        </RouterLink>
        <RouterLink to="/units">
          <CommonButton label="Units" variant="ghost" class="max-h-[32px]" />
        </RouterLink>
        <RouterLink to="/account">
          <CommonButton label="account" variant="ghost" class="max-h-[32px]" />
        </RouterLink>
        <CommonButton label="about us" variant="ghost" class="max-h-[32px]" />
        <RouterLink to="/dictionary" v-if="isAuthorizedUser">
          <img src="@/shared/assets/icons/dictionary.svg" />
        </RouterLink>
        <RouterLink to="/account" v-if="isAuthorizedUser">
          <img
            class="w-[41px] h-[41px] hover:cursor-pointer"
            src="@/shared/assets/base-avatar.svg"
          />
        </RouterLink>
      </div>
    </div>
    <div class="flex md:hidden justify-end items-center gap-2">
      <BurgerMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
import BurgerMenu from './BurgerMenu.vue'
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'

const userStore = useUserStore()

const isAuthorizedUser = computed(() => userStore.isAuthenticated)
</script>
