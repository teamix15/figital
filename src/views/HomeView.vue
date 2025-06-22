<template>
  <main class="min-h-screen flex flex-col">
    <section class="bg-[#7080e7] py-12 px-4 sm:px-8">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-1/2 order-2 lg:order-1">
          <h1 class="text-[#282828] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            ENGLISH
            <br />
            FOR
            <br />
            DESIGN
          </h1>
          <p class="text-[#282828] mt-6 max-w-md">
            the key to modern and effective learning. Here you get access to unique educational
            materials adapted to your level and goals. The interactive format helps to delve deeper
            into the topic, and the thoughtful design makes learning interesting and accessible.
          </p>
        </div>
        <div class="w-full lg:w-1/2 relative order-1 lg:order-2">
          <img
            src="/home-view-main.svg"
            alt="Library illustration"
            class="w-full h-auto max-h-[500px] object-cover rounded-3xl lg:rounded-[48px]"
          />
        </div>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-[#282828] text-4xl sm:text-5xl font-bold mb-4">WHY WE?</h2>
        <p class="text-[#282828] mb-12 max-w-2xl">
          Our platform is designed for creative professionals who want to master English for their
          careers. We focus on design terminology, communication with international clients, and
          understanding industry trends. With our interactive lessons and real-world examples,
          you'll not only learn the language but also gain confidence in your professional skills.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            class="bg-[#fc4994] rounded-3xl sm:rounded-[128px] py-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span class="text-white text-xl sm:text-2xl font-bold">LEARN</span>
          </div>
          <div
            class="bg-[#7080e7] rounded-3xl sm:rounded-[128px] py-6 flex items-center justify-center relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span class="text-white text-xl sm:text-2xl font-bold">CREATE</span>
          </div>
          <div
            class="bg-[#282828] rounded-3xl sm:rounded-[128px] py-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span class="text-white text-xl sm:text-2xl font-bold">GROW</span>
          </div>
          <div
            class="bg-[#f2f2f2] rounded-3xl sm:rounded-[128px] py-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span class="text-[#fc4994] text-xl sm:text-2xl font-bold">SUCCEED</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-[#282828] text-4xl sm:text-5xl font-bold mb-8">WHAT WE TEACH?</h2>

        <div class="flex flex-wrap gap-2 mb-12">
          <button
            class="border-[2px] border-[#7080e7] rounded-full px-4 py-1 text-xs text-[#282828]"
          >
            SPECIAL VOCABULARY
          </button>
          <button
            class="border-[2px] border-[#7080e7] rounded-full px-4 py-1 text-xs text-[#282828]"
          >
            ABOUT US
          </button>
        </div>

        <div class="bg-[#282828] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div class="absolute inset-0 z-0">
            <img
              src="/home-view-main.svg"
              alt="Education background"
              class="w-full h-full object-cover opacity-30"
            />
          </div>

          <div class="relative z-10">
            <h3 class="text-white text-3xl sm:text-5xl font-bold mb-6">COURSES</h3>
            <p class="text-white max-w-4xl font-[500] text-base sm:text-[20px]">
              the key to modern and effective learning. Here you get access to unique educational
              materials adapted to your level and goals. The interactive format helps to delve
              deeper into the topic, and the thoughtful design makes learning interesting and
              accessible.the key to modern and effective learning. Here you get access to unique
              educational materials adapted to your level and goals. The interactive format helps to
              delve deeper into the topic, and the thoughtful design makes learning interesting and
              accessible.the key to modern and effective learning. Here you get access to unique
              educational materials adapted to your level and goals. The interactive format helps to
              delve deeper into the topic, and the thoughtful design makes learning interesting and
              accessible.
            </p>
            <!-- <button
              class="mt-4 sm:absolute sm:bottom-4 sm:right-4 bg-[#fc4994] rounded-full px-4 py-2 sm:px-4 sm:py-1 text-xs text-white z-20"
            >
              MORE
            </button> -->
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 px-4 sm:px-8 bg-white">
      <RouterLink :to="PATHS.SIGN_UP">
        <div class="rounded-full max-w-7xl mx-auto p-[2px] bg-[#7080e7] cursor-pointer">
          <div class="rounded-full p-1 flex items-center justify-between bg-white">
            <p class="ml-2 sm:ml-6 font-[600] text-[#FC4994] text-sm sm:text-base">
              YOUR CREATIVE FUTURE STARTS HERE. JOIN AND BREAK THE BARRIER NOW
            </p>
            <button
              class="bg-[#7080e7] rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white flex-shrink-0"
            >
              <img
                src="@/shared/assets/icons/arrow-down-right.svg"
                class="text-[#FC4994] cursor-pointer w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
          </div>
        </div>
      </RouterLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import { PATHS } from '@/router'
</script>
