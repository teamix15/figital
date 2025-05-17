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
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            minlength="8"
            class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none"
          />
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
import { reactive, defineEmits, defineProps } from 'vue'
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

const handleSubmit = () => {
  emit('submit', form)
}
</script>
