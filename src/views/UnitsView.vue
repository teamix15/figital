<template>
  <div class="flex flex-wrap gap-8">
    <div v-for="n in 7" :key="n">
      <div class="bg-[#E6007E] rounded-[40px] h-[400px] w-[400px]"></div>
      <p class="text-center font-[700]">Unit {{ n }}</p>
    </div>
  </div>
</template>