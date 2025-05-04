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
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              minlength="8"
              class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
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
