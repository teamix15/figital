<template>
  <div>
    <div class="w-full">
      <div class="flex justify-end">
        <div></div>
        <div class="flex gap-8">
          <div>
            <p class="font-[400] text-[40px]">Name Surname</p>
            <p>Speciality:</p>
            <p>Score:</p>
          </div>
          <img class="w-[120px] h-[120px]" src="/src/assets/logo.svg" />
        </div>
      </div>

      <div class="flex justify-center md:justify-end mt-8 gap-8">
        <CommonButton label="" class="w-[150px]" />
        <CommonButton label="" class="w-[150px]" />
      </div>

      <div class="flex flex-wrap justify-center md:justify-between gap-8">
        <div v-for="n in 4" :key="n">
          <div
            class="bg-primary rounded-[40px] h-[220px] w-[305px] lg:w-[220px] xl:w-[270px] gap-8 flex-grow-0 p-4 mt-8"
          ></div>
          <div class="flex flex-col justify-center">
            <p class="text-center font-[700]">Reading</p>
            <p class="text-center font-[700]">8/10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommonButton from '@/components/CommonButton.vue'
</script>
