<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <div class="relative h-80">
        <div class="absolute inset-0 overflow-hidden bg-black/30">
          <img
            src="@/shared/assets/account-background.svg"
            alt="Profile background"
            class="w-full h-full object-cover mix-blend-multiply"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-6 pt-8 z-10">
          <div class="flex flex-col justify-between gap-12">
            <div class="flex items-start gap-6">
              <div
                class="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-[#d9d9d9]"
              >
              <img src="@/shared/assets/base-avatar.svg" alt="Avatar" class="h-full w-full"/>
            </div>

              <div class="text-white">
                <h2 class="text-6xl font-bold tracking-wide">
                  {{ userData?.firstname }} {{ userData?.surname }}
                </h2>
                <div class="mt-4 text-sm">
                  <p>Specialty: NA</p>
                  <p>Score: NA</p>
                </div>
              </div>
            </div>

            <div class="flex gap-3 pb-2">
              <button
                class="bg-[#7bb0ec] text-white rounded-full px-6 py-2 font-medium flex items-center"
              >
                Writing
                <ChevronDown class="ml-2 h-4 w-4" />
              </button>
              <button
                class="bg-[#446942] text-white rounded-full px-6 py-2 font-medium flex items-center"
              >
                Reading
                <Check class="ml-2 h-4 w-4" />
              </button>
              <button class="bg-[#f29c47] text-white rounded-full px-6 py-2 font-medium">
                Listening
              </button>
              <button class="bg-[#fc4994] text-white rounded-full px-6 py-2 font-medium">
                Games
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6" style="margin-top: -40px">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'

const userStore = useUserStore()
const userData = computed(() => userStore.userData)
</script>
