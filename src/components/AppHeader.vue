<template>
    <div class="mb-[32px]">
        <div class="hidden md:flex justify-between rounded w-full gap-2">
            <CommonButton label="" class="w-8 h-8 md:w-[162px] bg-primary" />
            <div class="flex items-center gap-2">
                <CommonButton label="search" />
                <RouterLink
                    class="flex items-center content-center uppercase h-[54px] border-3 border-primary text-[20px] color-[#111111] rounded-[40px] p-4"
                    to="/units">Units</RouterLink>
                <RouterLink
                    class="flex items-center content-center uppercase h-[54px] border-3 border-primary text-[20px] color-[#111111] rounded-[40px] p-4"
                    to="/account">Account</RouterLink>
                <CommonButton label="about us" />
                <RouterLink to="/">
                    <img class="w-[41px] h-[41px] hover:cursor-pointer" src="/src/assets/logo.svg">
                </RouterLink>
            </div>
        </div>
        <div class="flex md:hidden justify-end items-center gap-2">
            <CommonButton label="search" />
            <BurgerMenu />
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
import BurgerMenu from './BurgerMenu.vue';
</script>