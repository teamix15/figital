<template>
  <div class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
      <div
        v-for="n in 7"
        :key="n"
        class="group relative transition-all duration-300 hover:scale-[1.02]"
      >
        <div
          class="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square w-full bg-gradient-to-br from-primary/80 to-primary/60 shadow-sm"
        >
          <div class="absolute inset-0 flex items-center justify-center p-2">
            <span class="text-xl sm:text-2xl font-bold text-white text-center">Unit {{ n }}</span>
          </div>

          <div
            class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"
          ></div>
        </div>

        <div class="mt-2 px-1 text-center">
          <p class="text-sm sm:text-base font-medium text-gray-800 truncate">Unit {{ n }}</p>
          <p class="hidden sm:block text-xs text-gray-500 mt-1">Описание юнита</p>
        </div>

        <div
          class="hidden md:block absolute bottom-0 left-0 right-0 px-2 py-1 bg-white/90 rounded-b-2xl sm:rounded-b-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <button class="w-full text-xs font-semibold text-primary hover:underline text-center">
            Подробнее →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
