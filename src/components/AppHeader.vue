<template>
    <div class="flex justify-between rounded mb-[32px]">
        <CommonButton label="" class="w-[162px] bg-[#E6007E]" />
        <div class="flex items-center gap-[20px]">
            <CommonButton label="search" />
            <RouterLink
                class="flex items-center content-center uppercase h-[54px] border-3 border-[#E6007E] text-[20px] color-[#111111] rounded-[40px] p-4"
                to="/units">Units</RouterLink>
            <RouterLink
                class="flex items-center content-center uppercase h-[54px] border-3 border-[#E6007E] text-[20px] color-[#111111] rounded-[40px] p-4"
                to="/account">Account</RouterLink>
            <CommonButton label="about us" />
            <RouterLink to="/">
                <img class="w-[41px] h-[41px] hover:cursor-pointer" src="/src/assets/logo.svg">
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
</script>