<template>
  <Modal :isOpen="isOpen">
    <div
      class="flex flex-col justify-center items-center bg-[#282828] rounded-[40px] shadow-lg w-[300px] md:w-[580px] p-[30px]"
    >
      <div class="icon flex justify-end w-full" @click="emit('close')">
        <img
          src="/src/assets/icons/close.svg"
          class="w-[24px] h-[24px] text-primary hover:cursor-pointer"
        />
      </div>
      <img src="/src/assets/logo.svg" class="h-[340px] w-[340px]" />

      <form @submit.prevent="handleLogin">
        <div class="flex flex-col gap-8 w-[200px] md:w-[340px] mt-[16px]">
          <input
            v-model="login"
            placeholder="Enter your email"
            class="h-[50px] rounded-[40px] border-1 border-white text-white p-4 font-[500]"
          />
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            class="h-[50px] rounded-[40px] border-1 border-white text-white p-4 font-[500]"
          />
          <CommonButton label="sign in" @click="emit('close')" />
        </div>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import CommonButton from './CommonButton.vue'
import Modal from '@/components/ModalWindow.vue'

interface Props {
  isOpen: boolean
}

defineProps<Props>()

const login = ref('')
const password = ref('')

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'login', payload: { login: string; password: string }): void
}>()

const handleLogin = () => {
  emit('login', { login: login.value, password: password.value })
}
</script>

<style>
.icon {
  color: var(--color-primary);
  stroke: var(--color-primary);
}
</style>
