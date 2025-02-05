<template>
  <div class="flex justify-center flex-wrap gap-8">
    <div v-for="n in 7" :key="n">
      <div class="bg-[#E6007E] rounded-[40px] w-[200px] h-[200px] md:h-[400px] md:w-[400px]"></div>
      <p class="text-center font-[700]">Unit {{ n }}</p>
    </div>
  </div>
</template>