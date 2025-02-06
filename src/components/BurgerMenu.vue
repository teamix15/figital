<template>
  <div ref="nav">
    <div @click="toggleIsOpen" class="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-primary">
      <img src="@/assets/icons/bars-3.svg" class="w-[30px] h-[30px] cursor-pointer" />
    </div>
    <template v-if="isOpen">
      <div class="w-1/2 h-screen fixed right-0 top-0 border-l-3 border-primary bg-white p-[16px] shadow-lg">
        <div class="flex justify-between mb-6">
          <RouterLink to="/">
            <img class="w-[41px] h-[41px] hover:cursor-pointer" src="/src/assets/logo.svg">
          </RouterLink>
          <img @click="isOpen = false" src="@/assets/icons/close.svg" class="w-[30px] h-[30px] cursor-pointer" />
        </div>
        <div>
          <RouterLink
            class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px]"
            to="/units">Units</RouterLink>
          <RouterLink
            class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px]"
            to="/account">Account</RouterLink>
          <div class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px]">
            About us</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const isOpen = ref<boolean>(false);
const nav = ref<HTMLElement | null>(null)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
  if (nav.value && !nav.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>
