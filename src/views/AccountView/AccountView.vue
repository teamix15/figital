<template>
  <div class="flex flex-col">
    <div class="relative h-80">
      <div class="absolute inset-0 overflow-hidden bg-black/30">
        <img
          src="@/shared/assets/account-background.svg"
          alt="Profile background"
          class="w-full h-full object-cover mix-blend-multiply"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      </div>

      <div class="absolute top-4 right-4 z-10">
        <button class="bg-[#fc4994] rounded-full p-2"></button>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 pt-8 flex items-start gap-6 z-10">
        <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img
            src="@/shared/assets/base-avatar.svg"
            alt="Avatar"
            width="128"
            height="128"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="text-white">
          <h2 class="text-6xl font-bold tracking-wide">
            {{ userData?.firstname }} {{ userData?.surname }}
          </h2>
          <div class="mt-4 text-sm">
            <p>Speciality: 'NA'</p>
            <p>Score: 'NA'</p>
            <CommonButton label="Log out" @click="userStore.logoutUser" class="h-[20px] mt-2" />
          </div>
        </div>
      </div>

      <div class="absolute right-8 bottom-15 z-10">
        <div class="bg-white rounded-full py-2 px-6 text-[#fc4994] font-medium">
          You did better than 99% of the users this week
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 p-[16px]" style="margin-top: -40px">
      <UnitCard :unit-number="1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import UnitCard from '@/components/UnitCard.vue'
import CommonButton from '@/components/CommonButton.vue'

const userStore = useUserStore()
const userData = computed(() => userStore.userData)

onMounted(() => {
  if (!userData.value) {
    userStore.getUserData()
  }
})
</script>
