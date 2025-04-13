<template>
  <div class="container mx-auto px-4 sm:px-6 md:px-8 py-8 mb-[40px]">
    <!-- Профиль -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 md:mb-14">
      <div class="order-2 md:order-1 flex-1">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-normal">Name Surname</h1>
        <div class="mt-4 space-y-2 text-sm sm:text-base">
          <!-- Увеличенный mt и space-y -->
          <p class="text-gray-600">Speciality: <span class="text-gray-800">Designer</span></p>
          <p class="text-gray-600">Score: <span class="text-gray-800">85/100</span></p>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img
          class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-primary shadow-md"
          src="@/shared/assets/logo.svg"
          alt="Profile"
        />
      </div>
    </div>

    <div class="flex flex-col sm:flex-row justify-center md:justify-end gap-4 mb-12 md:mb-16">
      <CommonButton
        label="Progress"
        class="w-full sm:w-36 md:w-40 px-4 py-3 text-sm sm:text-base hover:scale-[1.02] transition-transform"
      />
      <CommonButton
        label="Settings"
        class="w-full sm:w-36 md:w-40 px-4 py-3 text-sm sm:text-base hover:scale-[1.02] transition-transform"
      />
      <RouterLink to="/words-game">
        <CommonButton
          label="Words"
          class="w-full sm:w-36 md:w-40 px-4 py-3 text-sm sm:text-base hover:scale-[1.02] transition-transform"
        />
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="group relative hover:scale-[1.02] transition-all duration-300"
      >
        <div
          class="bg-gradient-to-br from-primary/80 to-primary/60 rounded-3xl w-full aspect-[4/3] flex items-center justify-center p-4 shadow-md hover:shadow-lg transition-all"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-2xl font-bold text-white opacity-90">{{ skill.icon }}</span>
          </div>
          <div
            class="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white/90 rounded-b-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <p class="text-xs text-gray-600 text-center">{{ skill.description }}</p>
          </div>
        </div>
        <div class="mt-4 space-y-1 text-center">
          <!-- Увеличенный mt и добавлен space-y -->
          <p class="font-bold text-lg text-gray-800">{{ skill.name }}</p>
          <p class="font-bold text-primary text-lg">{{ skill.score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommonButton from '@/components/CommonButton.vue'
import { ref } from 'vue'

const skills = ref([
  { name: 'Reading', score: '8/10', icon: '📖', description: 'Reading comprehension skills' },
  { name: 'Writing', score: '7/10', icon: '✍️', description: 'Writing and composition' },
  { name: 'Listening', score: '9/10', icon: '👂', description: 'Listening exercises' },
  { name: 'Speaking', score: '6/10', icon: '🗣️', description: 'Speaking practice' },
])
</script>
