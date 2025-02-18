<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col justify-between gap-10 md:flex-row">
      <div class="flex flex-col justify-between">
        <p
          class="font-[700] text-2xl md:text-[86px] leading-[40px] md:leading-[100px] uppercase w-full text-center sm:text-start"
        >
          english for design
        </p>
        <div
          class="w-full border-5 border-primary rounded-[40px] h-auto min-h-[200px] md:min-h-[517px] p-6 mt-[16px] md:mt-[32px] whitespace-normal"
        >
          <p class="font-[700]">
            The key to modern and effective learning. Here you get access to unique educational
            materials adapted to your level and goals. The interactive format helps to delve deeper
            into the topic, and the thoughtful design makes learning interesting and accessible.
          </p>
        </div>
      </div>
      <div
        class="hidden lg:flex font-[700] border-5 border-primary rounded-[40px] p-6 min-w-[300px] flex-1 max-h-[775px] max-w-[470px]"
      >
        <img src="/src/assets/logo.svg" class="h-full w-full" />
      </div>
    </div>

    <div class="flex flex-col mt-[20px] md:mt-[40px]">
      <div class="flex flex-col justify-center">
        <p class="uppercase font-[700] text-[36px] md:text-[56px]">why we?</p>
        <p class="font-[700] text-[16px] md:text-[20px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
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

    <div class="border-[5px] border-primary rounded-[40px] p-[20px] mt-[40px]">
      <p class="font-[700] text-[36px] md:text-[56px] uppercase">cources</p>
      <p class="font-[700] text-[20px] md:text-[32px]">
        the key to modern and effective learning. Here you get access to unique educational
        materials adapted to your level and goals. The interactive format helps to delve deeper into
        the topic, and the thoughtful design makes learning interesting and accessible.
      </p>
      <div class="flex justify-end">
        <CommonButton label="More..." />
      </div>
    </div>

    <div
      class="flex bg-primary rounded-[40px] h-[63px] w-full mt-[63px] overflow-hidden max-w-full border-5 border-primary"
    >
      <div
        class="hidden md:flex md:justify-center md:items-center w-full bg-white rounded-[40px] text-[20px] overflow-hidden border-[3px] border-primary"
      >
        <p class="truncate p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <CommonButton
        @click="isLoginModalOpen = true"
        label="sign in"
        variant="ghost"
        class="w-full md:w-[200px] h-full"
      />
    </div>
    <LoginModal
      v-if="isLoginModalOpen"
      v-model:isOpen="isLoginModalOpen"
      @click="isLoginModalOpen = true"
      @close="handleClose"
      @login="handleLogin"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonButton from '@/components/CommonButton.vue'
import LoginModal from '@/components/LoginModal.vue'

const isLoginModalOpen = ref<boolean>(false)

const handleLogin = (data: { login: string; password: string }) => {
  console.log('Вход:', data)
  isLoginModalOpen.value = false
}

const handleClose = () => {
  isLoginModalOpen.value = false
}

defineEmits<{
  (event: 'close', value: boolean): void
  (event: 'login', payload: { login: string; password: string }): void
}>()
</script>
