<template>
  <footer class="flex justify-between bg-primary p-[36px]">
    <div class="flex">
      <RouterLink to="/">
        <img src="@/shared/assets/logo.svg" class="h-[50px] w-[200px]" />
      </RouterLink>
      <RouterLink
        class="flex items-center content-center uppercase h-[54px] border-3 border-primary text-[20px] color-[#111111] rounded-[40px] p-4"
        to="/units"
      >
        <CommonButton label="Units" />
      </RouterLink>
    </div>

    <CommonButton label="about us" />
  </footer>
</template>

<script setup lang="ts">
import CommonButton from '@/components/CommonButton.vue'
</script>
