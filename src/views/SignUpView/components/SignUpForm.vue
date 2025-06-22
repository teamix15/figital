<template>
  <div class="h-full flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 className="text-[#282828] text-5xl font-bold mb-12 text-right uppercase">
          sign
          <br />
          up
          <br />
          account
        </h1>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">NAME</label>
              <input
                id="name"
                v-model="form.firstname"
                type="text"
                required
                class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label for="surname" class="block text-sm font-medium text-gray-700">SURNAME</label>
              <input
                id="surname"
                v-model="form.surname"
                type="text"
                required
                class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">EMAIL</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">PASSWORD</label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                minlength="8"
                class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-[40px] shadow-sm text-sm font-medium text-white bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 hover-effect h-[40px]"
        >
          <DotsLoader v-if="isLoading" />

          <span v-if="!isLoading" class="uppercase">sign up</span>
        </button>
      </form>

      <div class="text-center text-sm">
        <span class="text-gray-600">Have an Account?</span>
        <RouterLink to="/login">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 ml-1">Sign in</a>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
import DotsLoader from '@/components/DotsLoader.vue'

const form = reactive({
  firstname: '',
  surname: '',
  email: '',
  password: '',
})

const showPassword = ref(false)

const userStore = useUserStore()

const isLoading = computed(() => userStore.isLoading)

const error = ref(null)

const handleSubmit = async () => {
  error.value = null
  await userStore.registerUser(form)

  console.log('userStore.error', userStore.error)
  router.push('/')
}
</script>
