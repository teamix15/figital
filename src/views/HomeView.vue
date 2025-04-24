<template>
  <main className="min-h-screen flex flex-col">
    <section className="bg-[#7080e7] py-12 px-8">
      <div className="max-w-7xl mx-auto flex lg:flex-col">
        <div className="w-1/2">
          <h1 className="text-[#282828] text-7xl font-bold leading-tight">
            ENGLISH
            <br />
            FOR
            <br />
            DESIGN
          </h1>
          <p className="text-[#282828] mt-6 max-w-md">
            the key to modern and effective learning. Here you get access to unique educational
            materials adapted to your level and goals. The interactive format helps to delve deeper
            into the topic, and the thoughtful design makes learning interesting and accessible.
          </p>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute inset-0 rounded-[40px] overflow-hidden">
            <img
              src="@/shared/assets/home-view-main.svg"
              alt="Library illustration"
              width="{500}"
              height="{400}"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#282828] text-5xl font-bold mb-4">WHY WE?</h2>
        <p className="text-[#282828] mb-12 max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto officia quasi,
          repellendus, dolore velit quod obcaecati saepe iste totam rerum sit tempore, a dolorum
          minus dolores. Quam laudantium earum officiis.
        </p>

        <div className="grid grid-cols-4 gap-6">
          <div
            className="bg-[#fc4994] rounded-[128px] py-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-white text-2xl font-bold">LEARN</span>
          </div>
          <div
            className="bg-[#7080e7] rounded-[128px] py-6 flex items-center justify-center relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-white text-2xl font-bold">CREATE</span>
          </div>
          <div
            className="bg-[#282828] rounded-[128px] py-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-white text-2xl font-bold">GROW</span>
          </div>
          <div
            className="bg-[#f2f2f2] rounded-[128px] py-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-[#fc4994] text-2xl font-bold">SUCCEED</span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#282828] text-5xl font-bold mb-8">WHAT WE TEACH?</h2>

        <div className="flex flex-wrap gap-2 mb-12">
          <button
            className="border-[2px] border-[#7080e7] rounded-full px-4 py-1 text-xs text-[#282828]"
          >
            SPECIAL VOCABULARY
          </button>
          <button
            key="{i}"
            className="border-[2px] border-[#7080e7] rounded-full px-4 py-1 text-xs text-[#282828]"
          >
            ABOUT US
          </button>
        </div>

        <div className="bg-[#282828] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="@/shared/assets/home-view-main.svg"
              alt="Education background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-white text-5xl font-bold mb-6">COURSES</h3>
            <p className="text-white max-w-4xl font-[500] text-[20px]">
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
            <button
              className="absolute bottom-4 right-4 bg-[#fc4994] rounded-full px-4 py-1 text-xs text-white z-20"
            >
              MORE
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-6 px-8 bg-white">
      <RouterLink :to="PATHS.SIGN_UP">
        <div className="rounded-full max-w-7xl mx-auto p-[2px] bg-[#7080e7] cursor-pointer">
          <div className="rounded-full p-1 flex items-center justify-between bg-white">
            <p className="ml-6 font-[600] text-[#FC4994]">
              YOUR CREATIVE FUTURE STARTS HERE. JOIN AND BREAK THE BARRIER NOW
            </p>
            <button
              className="bg-[#7080e7] rounded-full w-8 h-8 flex items-center justify-center text-white"
            >
              <img
                src="@/shared/assets/icons/arrow-down-right.svg"
                class="text-[#FC4994] cursor-pointer"
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
