<template>
  <div class="flex justify-end">
    <div></div>
    <div class="flex gap-8">
      <div>
        <p class="font-[400] text-[40px]">Name Surname</p>
        <p>Speciality:</p>
        <p>Score:</p>
      </div>
      <img class="w-[120px] h-[120px]" src="/src/assets/logo.svg">
    </div>

  </div>

  <div class="flex justify-end mt-8">
    <CommonButton label="" class="bg-[#E6007E] w-[140px]" />
    <CommonButton label="" class="bg-[#E6007E] w-[140px]" />
  </div>

  <div class="flex justify-between">
    <div v-for="n in 4" :key="n">
      <div class="bg-[#E6007E] rounded-[40px] h-[220px] min-w-[305px] gap-8 flex-grow-0 p-4 mt-8">
      </div>
      <div class="flex flex-col justify-center">
        <p class="text-center font-[700]">Reading</p>
        <p class="text-center font-[700]">8/10</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommonButton from '@/components/CommonButton.vue';
</script>