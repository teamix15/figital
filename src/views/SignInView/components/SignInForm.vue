<template>
  <div class="h-full min-w-full flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <div class="flex justify-between text-center">
        <RouterLink :to="PATHS.SIGN_UP">
          <div class="flex font-medium text-indigo-600 hover:text-indigo-500 ml-1 gap-1">
            <ArrowLeftIcon />
            Back
          </div>
        </RouterLink>
        <h1 className="text-[#282828] text-5xl font-bold mb-12 text-right uppercase">
          sign
          <br />
          in
          <br />
          account
        </h1>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md space-y-4">
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
              class="mt-1 block w-full border-3 border-primary rounded-[40px] py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-[40px] shadow-sm text-sm font-medium text-white bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 hover-effect h-[40px]"
          >
            <DotsLoader v-if="isLoading" />

            <span v-if="!isLoading" class="uppercase">sign in</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useUserStore } from '@/stores/userStore'
import router, { PATHS } from '@/router'
import { toast } from 'vue3-toastify'
import DotsLoader from '@/components/DotsLoader.vue'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'

const form = reactive({
  email: '',
  password: '',
})

const userStore = useUserStore()

const isLoading = computed(() => userStore.isLoading)
const error = computed(() => userStore.error)

const handleSubmit = async () => {
  try {
    await userStore.loginUser(form)
    router.push('/')
    toast.success('You have successfully logged in')
  } catch (err) {
    toast.error(error.value)
  }
}
</script>
