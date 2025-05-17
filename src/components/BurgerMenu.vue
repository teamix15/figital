<template>
  <div ref="nav" class="z-100">
    <div
      @click="toggleIsOpen"
      class="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-primary transition-transform duration-300 hover:scale-110"
    >
      <img src="@/shared/assets/icons/bars-3.svg" class="w-[30px] h-[30px] cursor-pointer" />
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div
        v-if="isOpen"
        class="w-1/2 h-screen fixed right-0 top-0 border-l-3 border-primary bg-white p-[16px] shadow-lg"
      >
        <div class="flex justify-between mb-6">
          <RouterLink to="/">
            <img
              class="w-[120px] h-[60px] hover:cursor-pointer transition-transform duration-200 hover:scale-110"
              src="/logo.svg"
              @click="isOpen = false"
            />
          </RouterLink>
          <img
            @click="isOpen = false"
            src="@/shared/assets/icons/close.svg"
            class="w-[30px] h-[30px] cursor-pointer transition-transform duration-200 hover:scale-110"
          />
        </div>
        <div>
          <RouterLink
            class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px] hover:bg-gray-100 px-4 transition-all duration-200"
            to="/units"
            @click="isOpen = false"
            >Units</RouterLink
          >
          <RouterLink
            class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px] hover:bg-gray-100 px-4 transition-all duration-200"
            to="/account"
            @click="isOpen = false"
            >Account</RouterLink
          >
          <div
            class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px] hover:bg-gray-100 px-4 transition-all duration-200"
            @click="isOpen = false"
          >
            About us
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isOpen = ref<boolean>(false)
const nav = ref<HTMLElement | null>(null)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (nav.value && !nav.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
