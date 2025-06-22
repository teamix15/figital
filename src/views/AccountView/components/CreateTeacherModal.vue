<template>
  <ModalWindow :is-open="isOpen" @close="$emit('close')">
    <div class="bg-white rounded-[30px] p-8 w-[480px]">
      <h2 class="text-3xl font-bold text-[#282828] mb-6 text-center uppercase">
        Add New
        <br />
        Teacher
      </h2>

      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="teacher-name" class="block text-sm font-medium text-gray-700">NAME</label>
            <input
              id="firstname"
              v-model="form.firstname"
              type="text"
              required
              class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none"
            />
          </div>
          <div>
            <label for="teacher-surname" class="block text-sm font-medium text-gray-700"
              >SURNAME</label
            >
            <input
              id="surname"
              v-model="form.surname"
              type="text"
              required
              class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label for="teacher-email" class="block text-sm font-medium text-gray-700">EMAIL</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none"
          />
        </div>

        <div>
          <label for="teacher-password" class="block text-sm font-medium text-gray-700"
            >TEMPORARY PASSWORD</label
          >
          <div class="relative">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              required
              minlength="8"
              class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 pr-10 focus:outline-none"
            />
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none cursor-pointer">
              <span v-if="showPassword">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-5.373-10-7s4.477-7 10-7c1.326 0 2.597.258 3.762.725M19.07 4.93A9.956 9.956 0 0122 12c0 1.627-4.477 7-10 7a9.956 9.956 0 01-7.07-2.93M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" /></svg>
              </span>
              <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </span>
            </button>
          </div>
        </div>

        <div class="flex gap-4 pt-4">
          <button
            type="button"
            @click="$emit('close')"
            class="flex-1 py-2 px-4 border border-gray-300 rounded-[40px] shadow-sm text-sm font-medium text-gray-700  hover-effect"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 py-2 px-4 border border-transparent rounded-[40px] shadow-sm text-sm font-medium text-white bg-[#fc4994] hover-effect"
          >
            <DotsLoader v-if="isLoading" />
            <span v-else>Add Teacher</span>
          </button>
        </div>
      </form>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import { reactive, defineEmits, defineProps, ref } from 'vue'
import DotsLoader from '@/components/DotsLoader.vue'
import ModalWindow from '@/components/ModalWindow.vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit', 'close'])

const form = reactive({
  firstname: '',
  surname: '',
  email: '',
  password: '',
})

const showPassword = ref(false)

const handleSubmit = () => {
  emit('submit', form)
}
</script>
