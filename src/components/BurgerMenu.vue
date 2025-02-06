<template>
  <div @click="isOpen = !isOpen" class="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-primary">
    <img src="@/assets/icons/bars-3.svg" class="w-[30px] h-[30px] cursor-pointer" />
  </div>
  <template v-if="isOpen">
    <div class="w-1/2 h-screen fixed right-0 top-0 border-l-3 border-primary bg-white p-[20px] shadow-lg">
      <div class="flex justify-between mb-6">
        <RouterLink to="/">
          <img class="w-[41px] h-[41px] hover:cursor-pointer" src="/src/assets/logo.svg">
        </RouterLink>
        <img @click="isOpen = false" src="@/assets/icons/close.svg" class="w-[30px] h-[30px] cursor-pointer" />
      </div>
      <div>
        <RouterLink
          class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px] p-4"
          to="/units">Units</RouterLink>
        <RouterLink
          class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px] p-4"
          to="/account">Account</RouterLink>
        <div class="flex items-center content-center uppercase h-[54px] text-[20px] color-[#111111] rounded-[40px] p-4">
          About us</div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref<boolean>(false);
</script>
