<template>
  <div class="flex flex-col">
    <div class="relative h-80">
      <div class="absolute inset-0 overflow-hidden bg-black/30">
        <img
          src="/account-background.svg"
          alt="Profile background"
          class="w-full h-full object-cover mix-blend-multiply"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 pt-8 flex items-start gap-6 z-10">
        <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img
            src="/base-avatar.svg"
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
            <p>
              Speciality:
              {{ (userData?.role as USER_ROLES) === USER_ROLES.ADMIN ? 'Teacher' : 'Student' }}
            </p>
            <p>Score: 'NA'</p>
            <CommonButton label="Log out" @click="userStore.logoutUser" class="h-[20px] mt-2" />
          </div>
        </div>
      </div>

      <div class="absolute right-8 bottom-15 z-10">
        <div class="flex gap-2">
          <CommonButton
            v-if="isAdmin"
            label="Add new teacher"
            class="h-[40px]"
            @click="isCreateTeacherModalOpen = true"
          />
          <div class="bg-white rounded-full py-2 px-6 text-[#fc4994] font-medium">
            You did better than 99% of the users this week
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-6">
      <TabsContainer v-model="activeTab" :tabs="availableTabs">
        <template #exercises>
          <div v-if="isUser" class="w-full mx-auto p-[16px]">
            <ExercisesStatistic :stat="currentUserStatistic" />
          </div>
          <div v-if="isAdmin" class="w-full p-[16px]">
            <ExercisesManager />
          </div>
        </template>

        <template #statistic v-if="isAdmin">
          <div class="w-full p-[16px]">
            <UsersStatistic />
          </div>
        </template>
      </TabsContainer>
    </div>
  </div>

  <CreateTeacherModal
    v-if="isAdmin"
    :is-loading="isCreateTeacherModalLoading"
    :is-open="isCreateTeacherModalOpen"
    @close="isCreateTeacherModalOpen = false"
    @submit="handleCreateTeacher"
  />
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import CommonButton from '@/components/CommonButton.vue'
import { USER_ROLES } from '@/shared/enums/common'
import ExercisesStatistic from './components/ExercisesStatistic.vue'
import CreateTeacherModal from './components/CreateTeacherModal.vue'
import { AuthService } from '@/services/authService'
import { toast } from 'vue3-toastify'
import ExercisesManager from './components/ExercisesManager.vue'
import UsersStatistic from './components/UsersStatistic.vue'
import TabsContainer from '@/components/TabsContainer.vue'
import { useStatisticsStore } from '@/stores/statisticsStore'

interface TeacherFormData {
  firstname: string
  surname: string
  password: string
  email: string
}

const userStore = useUserStore()
const statisticsStore = useStatisticsStore()
const isCreateTeacherModalOpen = ref(false)
const isCreateTeacherModalLoading = ref(false)
const activeTab = ref('exercises')

const userData = computed(() => userStore.userData)
const isAdmin = computed(() => (userData?.value?.role as USER_ROLES) === USER_ROLES.ADMIN)
const isUser = computed(() => (userData?.value?.role as USER_ROLES) === USER_ROLES.USER)
const currentUserStatistic = computed(() => statisticsStore.userStatistics)

const availableTabs = computed(() => {
  const tabs = [{ id: 'exercises', label: 'Exercises' }]
  if (isAdmin.value) {
    tabs.push({ id: 'statistic', label: 'Users statistic' })
  }
  return tabs
})

const handleCreateTeacher = async (formData: TeacherFormData) => {
  try {
    isCreateTeacherModalLoading.value = true
    AuthService.createAdmin(formData)
    isCreateTeacherModalOpen.value = false
    toast.success('Teacher has been successfully created')
  } catch (error) {
    console.error('Error creating teacher:', error)
  } finally {
    isCreateTeacherModalLoading.value = true
  }
}

onBeforeMount(() => {
  userStore.getUserData()
  if ((userData.value?.role as USER_ROLES) === USER_ROLES.USER)
    statisticsStore.fetchUserStatistics()
})
</script>
