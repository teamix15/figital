<template>
    <div class="flex justify-between rounded mb-[32px]">
        <CommonButton label="" class="w-[162px] bg-[#E6007E]" />
        <div class="flex items-center gap-[20px]">
            <CommonButton label="search" />
            <CommonButton label="units" />
            <CommonButton label="about us" />
            <div label="" class="w-[41px] h-[41px] rounded-full bg-[#E6007E]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
</script>