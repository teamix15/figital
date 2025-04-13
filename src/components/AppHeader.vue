<template>
  <div class="h-[190px] bg-primary p-[36px]">
    <div class="hidden md:flex justify-between rounded w-full gap-2">
      <RouterLink to="/">
        <img src="@/shared/assets/logo.svg" />
      </RouterLink>
      <div class="flex items-center gap-2 h-[32px]">
        <RouterLink to="/units">
          <div label="units" variant="ghost"></div>
        </RouterLink>
        <RouterLink to="/account">
          <CommonButton label="account" variant="ghost" />
        </RouterLink>
        <CommonButton label="about us" variant="ghost" />
        <RouterLink to="/dictionary">
          <img src="@/shared/assets/icons/dictionary.svg" />
        </RouterLink>
        <img class="w-[41px] h-[41px] hover:cursor-pointer" src="@/shared/assets/logo.svg" />
      </div>
    </div>
    <div class="flex md:hidden justify-end items-center gap-2">
      <CommonButton label="search" variant="ghost" />
      <BurgerMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
import BurgerMenu from './BurgerMenu.vue'
</script>
