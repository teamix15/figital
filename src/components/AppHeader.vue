<template>
    <div class="mb-[32px]">
        <div class="hidden md:flex justify-between rounded w-full gap-2">
            <div class="w-8 md:w-[162px] bg-primary rounded-[40px]"></div>
            <div class="flex items-center gap-2">
                <CommonButton label="search" variant="ghost" />
                <RouterLink to="/units">
                    <CommonButton label="units" variant="ghost" />
                </RouterLink>
                <RouterLink to="/account">
                    <CommonButton label="account" variant="ghost" />
                </RouterLink>
                <CommonButton label="about us" variant="ghost" />
                <RouterLink to="/">
                    <img class="w-[41px] h-[41px] hover:cursor-pointer" src="/src/assets/logo.svg">
                </RouterLink>
            </div>
        </div>
        <div class="flex md:hidden justify-end items-center gap-2">
            <CommonButton label="search" variant="ghost" />
            <BurgerMenu />
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
import BurgerMenu from './BurgerMenu.vue';
</script>