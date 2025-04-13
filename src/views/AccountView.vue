<template>
  <div class="container mx-auto px-4 sm:px-6 md:px-8 py-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 md:mb-12">
      <div class="order-2 md:order-1 flex-1">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-normal">Name Surname</h1>
        <div class="mt-2 space-y-1 text-sm sm:text-base">
          <p class="text-gray-600">Speciality: <span class="text-black">Designer</span></p>
          <p class="text-gray-600">Score: <span class="text-black">85/100</span></p>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img
          class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-primary"
          src="@/shared/assets/logo.svg"
          alt="Profile"
        />
      </div>
    </div>

    <div class="flex flex-col sm:flex-row justify-center md:justify-end gap-4 mb-8 md:mb-12">
      <CommonButton
        label="Progress"
        class="w-full sm:w-36 md:w-40 px-4 py-2 text-sm sm:text-base"
      />
      <CommonButton
        label="Settings"
        class="w-full sm:w-36 md:w-40 px-4 py-2 text-sm sm:text-base"
      />
      <RouterLink to="/words-game">
        <CommonButton label="Words" class="w-full sm:w-36 md:w-40 px-4 py-2 text-sm sm:text-base" />
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in 4" :key="n" class="flex flex-col items-center">
        <div
          class="bg-primary rounded-3xl w-full aspect-[4/3] max-w-xs flex items-center justify-center p-4 shadow-md hover:shadow-lg transition-shadow"
        ></div>
        <div class="mt-3 text-center">
          <p class="font-bold text-lg">Reading</p>
          <p class="font-bold text-primary text-lg">8/10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommonButton from '@/components/CommonButton.vue'
</script>
