<template>

  <div class="flex flex-wrap justify-center gap-8">
    <div v-for="n in 7" :key="n">
      <div class="bg-primary rounded-[40px] w-[200px] h-[200px] md:h-[400px] md:w-[400px]"></div>
      <p class="text-center font-[700]">Unit {{ n }}</p>
    </div>
  </div>

</template>