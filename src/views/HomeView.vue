<template>
  <div class="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
    <div class="flex flex-col items-center max-w-[1800px] mx-auto">
      <div class="flex flex-col lg:flex-row w-full gap-6 md:gap-8 lg:gap-10">
        <div class="lg:w-1/2 w-full flex flex-col">
          <h1
            class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[72px] lg:leading-[1.1] uppercase text-center sm:text-start leading-relaxed md:leading-loose pl-5 sm:pl-6 md:pl-8 lg:pl-10"
          >
            English for Design
          </h1>

          <div
            class="w-full rounded-3xl sm:rounded-[40px] bg-white/10 p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm"
          >
            <p
              class="font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose"
            >
              The key to modern and effective learning. Here you get access to unique educational
              materials adapted to your level and goals. The interactive format helps to delve
              deeper into the topic, and the thoughtful design makes learning interesting and
              accessible.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2 w-full flex items-center mt-4 lg:mt-0">
          <div
            class="relative w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-[4/3] rounded-3xl sm:rounded-[40px] overflow-hidden"
          >
            <img
              src="@/shared/assets/home-view-main.png"
              alt="English for Design"
              class="absolute w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

      <div class="w-full mt-8 md:mt-12 lg:mt-16">
        <div class="flex flex-col gap-4 md:gap-6">
          <h2
            class="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] text-center md:text-left pl-5 sm:pl-6 md:pl-8 lg:pl-10"
          >
            Why we?
          </h2>
          <p
            class="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-justify pl-5 sm:pl-6 md:pl-8 lg:pl-10"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
            <div
              v-for="n in 4"
              :key="n"
              class="border-4 border-primary font-bold text-sm sm:text-base md:text-lg rounded-3xl p-4 md:p-5 aspect-[4/3] overflow-y-auto"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mt-10 md:mt-14 lg:mt-20">
        <h2
          class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] uppercase mb-4 md:mb-6 pl-5 sm:pl-6 md:pl-8 lg:pl-10"
        >
          What we teach?
        </h2>
        <div
          class="bg-primary rounded-3xl sm:rounded-[40px] p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          <div
            v-for="n in 12"
            :key="n"
            class="flex items-center justify-center bg-white rounded-2xl sm:rounded-3xl text-xs sm:text-sm md:text-base uppercase font-medium py-2 px-3 sm:py-3 sm:px-4"
          >
            Special Vocab
          </div>
        </div>
      </div>

      <div
        class="relative w-full aspect-[4/3] sm:aspect-[3/1] rounded-3xl sm:rounded-[40px] overflow-hidden mt-8 md:mt-12 lg:mt-16"
      >
        <img
          src="@/shared/assets/home-view-main.png"
          alt="Courses"
          class="absolute w-full h-full object-cover object-center brightness-50"
        />
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="relative z-10 h-full flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white">
            Courses
          </h2>
          <p
            class="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-3 sm:mt-4 max-w-2xl"
          >
            The key to modern and effective learning. Here you get access to unique educational
            materials adapted to your level and goals.
          </p>
          <div class="flex justify-end mt-4 sm:mt-6">
            <CommonButton
              label="More..."
              class="bg-white text-black hover:bg-gray-100 px-4 py-2 sm:px-6 sm:py-3 rounded-[40px] text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col sm:flex-row bg-primary rounded-3xl sm:rounded-[40px] h-auto sm:h-16 w-full mt-10 md:mt-14 lg:mt-20 overflow-hidden border-4 border-primary"
      >
        <div
          class="hidden sm:flex items-center justify-center flex-1 bg-white rounded-3xl sm:rounded-[40px] overflow-hidden border-3 border-primary px-4"
        >
          <p class="text-accent font-semibold text-sm md:text-base lg:text-lg truncate px-2">
            YOUR CREATIVE FUTURE STARTS HERE. JOIN AND BREAK THE BARRIER NOW
          </p>
        </div>
        <RouterLink to="/sign-up" class="w-full sm:w-auto">
          <CommonButton
            label="SIGN UP"
            variant="ghost"
            class="w-full h-16 sm:h-full px-6 text-sm sm:text-base md:text-lg"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
</script>
