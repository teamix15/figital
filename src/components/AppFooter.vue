<template>
  <div class="flex justify-between mt-10">
    <div class="flex gap-8">
      <div class="w-[42px] h-[42px] bg-[#E6007E] rounded-full"></div>
      <div class="w-[42px] h-[42px] bg-[#E6007E] rounded-full"></div>
    </div>

    <CommonButton label="" class="w-[260px] bg-[#E6007E]" />

    <div class="flex gap-8">
      <RouterLink
        class="flex items-center content-center uppercase h-[54px] border-3 border-[#E6007E] text-[20px] color-[#111111] rounded-[40px] p-4"
        to="/units">
        Units
      </RouterLink>
      <CommonButton label="about us" />
    </div>

  </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue';
</script>