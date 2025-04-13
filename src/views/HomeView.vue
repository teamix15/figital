<template>
  <div class="p-[24px]">
    <div class="flex flex-col justify-center items-center">
      <div
        class="flex flex-col lg:flex-row w-full gap-4 md:gap-8 2xl:justify-center 2xl:max-w-[1800px] mx-auto px-4 sm:px-6"
      >
        <div class="lg:w-1/2 w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h1
            class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px] leading-tight md:leading-snug lg:leading-[1.2] uppercase text-center sm:text-start"
          >
            English for Design
          </h1>

          <div class="w-full rounded-[40px] bg-white/10 p-6 md:p-8 lg:p-10 backdrop-blur-sm">
            <p
              class="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-loose"
            >
              The key to modern and effective learning. Here you get access to unique educational
              materials adapted to your level and goals. The interactive format helps to delve
              deeper into the topic, and the thoughtful design makes learning interesting and
              accessible.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2 w-full flex items-center">
          <div
            class="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] rounded-[40px] lg:rounded-l-[48px] overflow-hidden"
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

      <div class="flex flex-col mt-[20px] md:mt-[40px]">
        <div class="flex flex-col justify-center">
          <p class="uppercase font-[700] text-[36px] md:text-[56px]">why we?</p>
          <p class="font-[700] text-[16px] md:text-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div class="flex gap-8 justify-center lg:justify-between mt-[20px] flex-wrap">
            <div
              v-for="n in 4"
              :key="n"
              class="border-5 border-primary font-[700] text-[16px] md:w-[305px] lg:w-[220px] xl:w-[270px] md:text-[20px] rounded-[40px] h-[290px] md:h-[185px] gap-8 p-4 overflow-hidden"
            >
              <p class="line-clamp-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[20px]">
        <p class="font-[700] text-[36px] md:text-[56px] uppercase">what we teach?</p>
        <div class="flex flex-wrap bg-primary rounded-[40px] h-auto p-[10px]">
          <div
            v-for="n in 12"
            :key="n"
            class="flex items-center justify-center bg-[#FFFFFF] rounded-[40px] text-[16px] md:text-[19px] uppercase font-[500] p-4 m-[5px]"
          >
            special vocabulary
          </div>
        </div>
      </div>

      <div class="relative rounded-[40px] overflow-hidden mt-[40px] min-h-[400px] w-full">
        <div class="absolute inset-0 rounded-[40px] overflow-hidden">
          <img
            src="@/shared/assets/home-view-main.png"
            alt="Background"
            class="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover brightness-50"
            style="min-width: 100%; min-height: 100%; width: auto; height: auto"
          />
          <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <div class="relative z-10 p-8 h-full flex flex-col justify-between">
          <div>
            <p class="font-bold text-4xl md:text-5xl uppercase text-white">Courses</p>
            <p class="font-bold text-xl md:text-3xl text-white mt-4 max-w-2xl">
              The key to modern and effective learning. Here you get access to unique educational
              materials adapted to your level and goals. The interactive format helps to delve
              deeper into the topic, and the thoughtful design makes learning interesting and
              accessible.
            </p>
          </div>

          <div class="flex justify-end mt-6">
            <CommonButton
              label="More..."
              class="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div
        class="flex bg-primary rounded-[40px] h-[63px] w-full mt-[63px] overflow-hidden max-w-full border-5 border-primary"
      >
        <div
          class="hidden md:flex md:justify-center md:items-center w-full bg-white rounded-[40px] text-[20px] overflow-hidden border-[3px] border-primary"
        >
          <p class="truncate color-accent font-600 p-4">
            YOUR CREATIVE FUTURE STARTS HERE. JOIN AND BREAK THE BARRIER NOW
          </p>
        </div>
        <RouterLink to="/sign-up">
          <CommonButton label="sign up" variant="ghost" class="w-full md:w-[200px] h-full" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
</script>
